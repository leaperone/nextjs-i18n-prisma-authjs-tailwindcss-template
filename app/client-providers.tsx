"use client";

import { HeroUIProvider } from "@heroui/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LocaleProvider } from "@/i18n/locale-provider";
import type { Locales } from "@/i18n/settings";

export function ClientProviders({
  children,
  session,
  locale,
}: {
  children: React.ReactNode;
  session: Session | null;
  locale: Locales;
}) {
  return (
    <SessionProvider session={session}>
      <HeroUIProvider>
        <LocaleProvider value={locale}>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
        </LocaleProvider>
      </HeroUIProvider>
    </SessionProvider>
  );
}
