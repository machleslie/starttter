"use server";
import {
  loginSchema,
  signupSchema,
} from "@/app/auth/definations";
import PocketBase from "pocketbase";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "@/app/auth/session";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function signup(state, formdata) {
  const verifyForm = signupSchema.safeParse({
    email: formdata.get("email"),
    password: formdata.get("password"),
    passwordConfirm: formdata.get("passwordConfirm"),
  });

  if (!verifyForm.success) {
    return {
      errors: verifyForm.error.flatten().fieldErrors,
    };
  }

  const { email, password } = verifyForm.data;

  const existingUser = await pb
    .collection("users")
    .getFirstListItem("email='" + email + "'")
    .catch((err) => {
      return err;
    });

  if (existingUser) {
    return {
      error: ["The user already exists"],
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await pb.collection("users").create({
    email,
    password: hashedPassword,
    // passwordConfirm: hashedPassword,
  });

  const userid = user.id;
  await createSession(userid);
}

export default async function login(state, formdata) {
  const verifyForm = loginSchema.safeParse({
    email: formdata.get("email"),
    password: formdata.get("password"),
  });

  if (!verifyForm.success) {
    return {
      errors: verifyForm.error.flatten().fieldErrors,
    };
  }

  const { email, password } = verifyForm.data;

  const User = await pb
    .collection("users")
    .getFirstListItem("email='" + email + "'")
    .catch((err) => {
      return err;
    });

  if (!User.code === 400) {
    return {
      error: ["The user does not exist"],
    };
  }

  const passMatch = await bcrypt.compare(password, existingUser.password);

  if (!passMatch) {
    return {
      error: ["The password is incorrect"],
    };
  }

  const userid = existingUser.id;
  await createSession(userid);
}

export async function logout() {
  await deleteSession();
}
