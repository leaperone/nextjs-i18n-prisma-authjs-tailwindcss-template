import { signOut } from "@/auth";
import { Button, Card } from "@/lib/heroui";

const SignoutPage = async () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <Card.Header className="flex flex-col items-center pb-0">
          <h2 className="font-bold text-2xl">Are you sure to sign out?</h2>
        </Card.Header>
        <Card.Content>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}>
            <Button type="submit" variant="primary" className="w-full">
              Sign out
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SignoutPage;
