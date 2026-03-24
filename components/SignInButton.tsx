"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SignInButton = () => {
  const session = useSession();

  if (session.data?.user) {
    return <UserInfoDisplay />;
  }

  return (
    <Link href="/signin">
      <Button>Sign In</Button>
    </Link>
  );
};

const UserInfoDisplay = () => {
  const session = useSession();
  return (
    <Link
      className="flex items-center space-x-2 rounded-full bg-muted px-2 py-1 transition-colors hover:bg-muted/80"
      href="/dashboard">
      <p className="font-medium text-foreground text-sm">{session.data?.user?.name}</p>
    </Link>
  );
};

export default SignInButton;
