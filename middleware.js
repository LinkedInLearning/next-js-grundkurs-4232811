import { NextResponse } from "next/server";

export function middleware(request) {
  const nextUrl = request.nextUrl;
  const pathname = nextUrl.pathname;

  if (pathname.startsWith('/blog/new')) {
    const user = process.env.BASIC_AUTH_USER;
    const pw = process.env.BASIC_AUTH_PW;

    const basicAuth = request.headers.get("authorization");

    if (!basicAuth) {
      return NextResponse.rewrite(
        new URL('/authorize', request.url)
      )
    } else {
      const authValue = basicAuth.split(" ")[1];
      const [_user, _pw] = atob(authValue).split(":");

      if (user == _user && pw == _pw) {
        return NextResponse.next();
      } else {
        return NextResponse.rewrite(
          new URL('/authorize', request.url)
        )
      }
    }
  }
}