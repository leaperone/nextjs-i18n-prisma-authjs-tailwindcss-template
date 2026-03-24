"use client";

import { Separator } from "@heroui/react";
import type { IconProps } from "@iconify/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

import { BrandLogo, BrandName } from "@/components/Brand";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    { name: "2SOMEone", href: "https://2some.one" },
    { name: "2SOMEren", href: "https://2some.ren" },
    { name: "MultiPost Multi-platform Operations Tool", href: "https://multipost.app" },
    { name: "Voite", href: "https://voite.2some.one" },
    { name: "FameDayOne", href: "https://fameday.one" },
  ],
  supportOptions: [
    { name: "Pricing", href: "/pricing" },
    { name: "User Manual (Docs)", href: "https://mc1cz6k4he.feishu.cn/wiki/EcU8wdd00iXieQkIQbTctNcMnFc" },
    { name: "LEAPERone Doc Development Docs", href: "https://doc.leaper.one" },
    { name: "Live Service Provider Directory", href: "https://mc1cz6k4he.feishu.cn/wiki/space/7460543293223616540" },
    { name: "Service Status", href: "https://status.2some.ren" },
  ],
  aboutUs: [{ name: "Our Team", href: "http://leaper.one" }],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github" />,
    },
  ],
};

const beiAnLinks = [
  {
    label: "粤ICP备2024184990号",
    to: "https://beian.miit.gov.cn",
  },
  {
    label: "粤公网安备44040202001522",
    to: "https://beian.mps.gov.cn/#/query/webSearch?code=44040202001522",
  },
];

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
            <p className="text-muted-foreground text-sm">People, Live Streaming, Life</p>
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
          <p className="text-muted-foreground text-sm">&copy; 2025 LEAPERone Inc. All rights reserved.</p>
          {beiAnLinks.map((link) => (
            <Link key={link.label} href={link.to} className="text-muted-foreground text-sm hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <ThemeSwitcher isBlur={false} />
        </div>
      </div>
    </footer>
  );
}
