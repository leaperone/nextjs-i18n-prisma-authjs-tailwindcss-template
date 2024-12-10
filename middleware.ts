import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // const access_token = request.cookies.get('access_token')?.value;

  // // 未登录，访问控制台，跳转到登录页面
  // if (!access_token && request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL(`/signin/phonePwd${request.nextUrl.search}`, request.url));
  // }

  // // 已经登录，但是访问登录页面，跳转到控制台
  // if (access_token && request.nextUrl.pathname.startsWith('/signin')) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url));
  // }

  if (request.nextUrl.pathname.startsWith('/dashboard/fans')) {
    return NextResponse.redirect(new URL('/dashboard/gift', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico).*)'],
};
