import { Icon } from "@iconify/react/dist/iconify.js";
import { signIn } from "@/auth";
import { Button } from "@/lib/heroui";

const SigninPage = async () => {
  return (
    <div className="flex min-h-[40px] flex-col items-center gap-2 pb-2">
      <h1 className="font-medium text-xl">Sign In</h1>
      <div className="h-8" />
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}>
        <Button type="submit" className="w-full bg-foreground/10 dark:bg-foreground/20">
          <Icon icon="logos:google-icon" className="size-6" />
          Sign in with Google
        </Button>
      </form>

      <div className="h-4" />

      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/dashboard" });
        }}>
        <Button type="submit" className="w-full bg-foreground/10 dark:bg-foreground/20">
          <Icon icon="logos:github-icon" className="size-6" />
          Sign in with GitHub
        </Button>
      </form>
    </div>
  );
};

export default SigninPage;
