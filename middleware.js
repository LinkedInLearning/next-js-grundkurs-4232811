import { NextResponse } from 'next/server'


export function middleware(request) {
  const basicAuth = request.headers.get("authorization");
  const url = request.nextUrl;
  const mustProtect = url.pathname.startsWith('/blog/new');

  if (mustProtect) {
    if (!basicAuth) return NextResponse.rewrite(
      new URL('/basic-auth', request.url)
    );

    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    const validUser = process.env.BASIC_AUTH_USER;
    const validPassWord = process.env.BASIC_AUTH_PW;

    if (user === validUser && pwd === validPassWord) {
      return NextResponse.next();
    } else {
      return NextResponse.rewrite(
        new URL('/basic-auth', request.url)
      );
    }
  }
}