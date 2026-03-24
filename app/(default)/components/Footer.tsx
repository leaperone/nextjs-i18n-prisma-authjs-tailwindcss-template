"use client";

import { Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";

import { BrandLogo, BrandName } from "@/components/Brand";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const footerNavigation = {
  services: [
    { name: "Service One", href: "#" },
    { name: "Service Two", href: "#" },
  ],
  supportOptions: [
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
  ],
  aboutUs: [{ name: "Our Team", href: "/about" }],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
};

export default function Footer() {
  const renderList = React.useCallback(
    ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
      <div>
        <h3 className="font-semibold text-muted-foreground text-sm">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link className="text-muted-foreground text-sm hover:text-foreground" href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer className="flex w-full flex-col">
      <div className="px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <BrandLogo />
              <BrandName />
            </div>
            <p className="text-muted-foreground text-sm">Your project tagline goes here.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: "Services", items: footerNavigation.services })}</div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: "Support", items: footerNavigation.supportOptions })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: "About Us", items: footerNavigation.aboutUs })}</div>
              <div className="mt-10 md:mt-0">{renderList({ title: "Legal", items: footerNavigation.legal })}</div>
            </div>
          </div>
        </div>
        <Separator className="mt-16 sm:mt-20 lg:mt-24" />
        <div className="flex flex-wrap items-center justify-between gap-2 pt-8">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <ThemeSwitcher isBlur={false} />
        </div>
      </div>
    </footer>
  );
}
