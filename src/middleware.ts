import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const myCookie = request.cookies.get('access token');

  if (request.nextUrl.pathname.includes('/home')) {
    if (myCookie === undefined) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const jwt = JSON.parse(myCookie!.value);
      const prueba = await jwtVerify(
        jwt.token,
        new TextEncoder().encode(process.env.JWT_SECRET_KEY!),
      );
      console.log(prueba);
      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home'],
};
