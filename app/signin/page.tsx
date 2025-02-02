import React from 'react';
import { signIn } from '@/auth';
import { Button, Spacer } from "@heroui/react";
import { Icon } from '@iconify/react/dist/iconify.js';
// import { MailIcon } from 'lucide-react';

const SigninPage = async () => {
  return (
    <div className="flex min-h-[40px] flex-col items-center gap-2 pb-2">
      <h1 className="text-xl font-medium">Sign In</h1>
      <Spacer y={4} />
      {/* <form
        className="w-full max-w-sm space-y-4"
        action={async (formData) => {
          'use server';
          formData.set('redirectTo', '/dashboard');
          await signIn('mailgun', formData);
        }}>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          size="lg"
          variant="underlined"
          startContent={<MailIcon />}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full bg-foreground/10 dark:bg-foreground/20">
          Continue with Email
        </Button>
      </form>

      <div className="flex w-full max-w-sm items-center gap-2 py-6">
        <Divider className="flex-1" />
        <span className="text-sm text-default-400">OR</span>
        <Divider className="flex-1" />
      </div> */}

      <form
        action={async () => {
          'use server';
          await signIn('google', { redirectTo: '/dashboard' });
        }}>
        <Button
          type="submit"
          className="w-full bg-foreground/10 dark:bg-foreground/20"
          startContent={
            <Icon
              icon="logos:google-icon"
              className="size-6"
            />
          }>
          Sign in with Google
        </Button>
      </form>

      <Spacer y={2} />

      <form
        action={async () => {
          'use server';
          await signIn('github', { redirectTo: '/dashboard' });
        }}>
        <Button
          type="submit"
          className="w-full bg-foreground/10 dark:bg-foreground/20"
          startContent={
            <Icon
              icon="logos:github-icon"
              className="size-6"
            />
          }>
          Sign in with GitHub
        </Button>
      </form>
    </div>
  );
};

export default SigninPage;
