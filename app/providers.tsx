import { auth } from "@/auth";
import { getLocale } from "@/i18n/server";
import { ClientProviders } from "./client-providers";

export async function Providers({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const locale = await getLocale();
  return (
    <ClientProviders session={session} locale={locale}>
      {children}
    </ClientProviders>
  );
}
