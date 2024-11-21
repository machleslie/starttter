import { NextResponse } from "next/server";

const protectedroutes = ["/dashboard"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedroutes.some((route) => {
    return path.startsWith(route);
  });

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  try {
    const payload = await decrypt(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}
