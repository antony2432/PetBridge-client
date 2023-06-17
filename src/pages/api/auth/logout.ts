import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

interface Req {
  cookies: { accessToken: any };
}

interface Res {
  status: (arg0: number) => {
    (): any;
    new (): any;
    json: { (arg0: { error?: string; message?: string; errorMessage?: any }): void; new (): any };
  };
  setHeader: (arg0: string, arg1: string) => void;
}

export default async function logout(req: Req, res: Res) {
  const accessToken = JSON.parse(req.cookies.accessToken);

  if (!accessToken) {
    return res.status(401).json({ error: 'no token' });
  }

  try {
    jwt.verify(accessToken.token, process.env.JWT_SECRET_KEY!);
    const sesionCookie = serialize('accessToken', '', {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });
    res.setHeader('Set-Cookie', sesionCookie);
    res.status(200).json({ message: 'log out sucess' });
  } catch (error: any) {
    console.log(error);
    res.status(401).json({ message: 'server error', errorMessage: error.message });
  }
}
