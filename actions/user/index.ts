"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserInfo = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) return null;

  return await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, user.id as string),
  });
};
