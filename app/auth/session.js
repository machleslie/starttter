import "server-only";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secret = process.env.SECRET_JWT;
const key = new TextEncoder().encode(secret);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    path: "/",
  },
  duration: 60 * 60 * 24 * 7, // 7 days
};

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function decrypt(input) {
  try {
    const { payload } = await jwtVerify(input, key);
    return payload;
  } catch (error) {
    throw new Error("Token not valid");
  }
}

export async function createSession(userid) {
  const expires = new Date(Date.now() + cookie.duration);
  const token = await encrypt({ userid, expires });
  cookies().set(cookie.name, token, { ...cookie.options, expires });
  redirect("/dashboard");
}

export async function verifySession() {
  const token = cookies().get(cookie.name)?.value;
  if (!token) return redirect("/login");
  try {
    const payload = await decrypt(token);
    if (payload.expires < new Date()) {
      cookies().delete(cookie.name);
      return redirect("/login");
    }
    return payload;
  } catch (error) {
    cookies().delete(cookie.name);
    return redirect("/login");
  }
}

export async function deleteSession() {
  cookies().delete(cookie.name);
  redirect("/login");
}
// export async function getSession() {
//   const token = cookies().get(cookie.name)?.value;
//   if (!token) return null;
//   try {
//     const payload = await decrypt(token);
//     return payload;
//   } catch (error) {
//     cookies().delete(cookie.name);
//     return null;
//   }
// }
