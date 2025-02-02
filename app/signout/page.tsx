import React from 'react';
import { signOut } from '@/auth';
import { Card, CardHeader, CardBody, Button } from "@heroui/react";

const SignoutPage = async () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center pb-0">
          <h2 className="text-2xl font-bold">Are you sure to sign out?</h2>
        </CardHeader>
        <CardBody>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}>
            <Button
              type="submit"
              color="primary"
              fullWidth>
              Sign out
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignoutPage;
