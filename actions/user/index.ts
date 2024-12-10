'use server';

import { templateDb } from '@/lib/db';
import { auth } from '@/auth';

export const getUserInfo = async () => {
  const session = await auth();
  const user = session?.user;
  return await templateDb.user.findUnique({ where: { id: user?.id } });
};
