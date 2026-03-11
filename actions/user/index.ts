"use server";

import { auth } from "@/auth";
import { templateDb } from "@/lib/db";

export const getUserInfo = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) return null;

  return await templateDb.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, user.id as string),
  });
};
