import "server-only";
import PocketBase from "pocketbase";
import { verifySession } from "./session";
import { cache } from "react";

const pocketbaseurl = process.env.Pocketbase_url;

const pb = new PocketBase(pocketbaseurl);

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  const user = await pb.collection("users").getOne(session.userid, {});

  const userdata = {
    // id: user.id,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
  };

  return userdata;
});
