import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';

interface IBody {
  email: string;
  password: string;
}
interface Req {
  body: IBody;
}
interface Res {
  setHeader(arg0: string, sesionCookie: string): unknown;
  status: (arg0: number) => {
    (): any;
    new (): any;
    json: {
      (arg0: { message: string; errorMessage?: string; userInformation?: IUser }): void;
      new (): any;
    };
  };
}
interface IResult {
  token: string;
  id: string;
  message: string;
}

interface IUser {
  id: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string | null;
  image?: string | null;
  country?: string | null;
  phone?: string | null;
}
interface IJwtPayload {
  email: string;
  id: string;
  firstName: string,
  lastName: string,
  image: string | null,
  country: string | null,
  phone: string | null,
  rol: string;
  [key: string]: any;
}

export default async function handlerLogin(req: Req, res: Res) {
  const credencials: IBody = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const result = await fetch(`${process.env.API_BACK}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credencials),
    });
    const data: IResult = await result.json();

    if (result.ok) {
      const very = jwt.verify(data.token, process.env.JWT_SECRET_KEY!) as IJwtPayload;
      if (very) {
        const sesionCookie = serialize('access token', JSON.stringify(data), {
          httpOnly: true,
          maxAge: 29 * 24 * 60 * 60 * 1000,
          path: '/',
        });
        res.setHeader('Set-Cookie', sesionCookie);
        res.status(200).json({
          message: 'inicio de sesion success',
          userInformation: {
            id: data.id,
            email: very.email,
            firstName: very.firstName,
            lastName: very.lastName,
            image: very.image,
            country: very.country,
            phone: very.phone,
          },
        });
      }
    } else {
      res.status(401).json({ message: data.message });
    }
  } catch (error: any) {
    console.log(error);
    res.status(401).json({ message: 'server error', errorMessage: error.message });
  }
}
