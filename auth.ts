import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { type User } from "next-auth";
import Github from "next-auth/providers/github";
import { db } from "@/lib/db";
import { accounts, authenticators, sessions, users, verificationTokens } from "@/lib/schema";

declare module "next-auth" {
  interface Session {
    user: {
      createdAt: Date;
      username: string;
    } & User;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  providers: [Github],
  callbacks: {
    async session({ session, user }) {
      // TODO: When get session, we need to do something
      console.log("get session", session, user);
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      // TODO: When create user, we need to do something
      console.log("create user", user);
    },
  },
});
