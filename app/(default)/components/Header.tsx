"use client";

import { Button, Dropdown } from "@heroui/react";
import { ChevronDown, FileText, LayoutDashboard, Menu, Wrench, X } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

import { BrandLogo, BrandName } from "@/components/Brand";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const dashboardItems: { title: string; icon: React.ElementType; href: string; description: string }[] = [
  {
    title: "Tools",
    icon: Wrench,
    href: "/tools",
    description: "Your best toolbox",
  },
  {
    title: "Docs",
    icon: FileText,
    href: "/docs",
    description: "Project documentation and guides",
  },
];

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Tools",
    icon: Wrench,
    href: "/tools",
  },
  {
    title: "Docs",
    icon: FileText,
    href: "/docs",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-border border-b bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-10 items-center justify-between px-4">
        {/* Left: Mobile toggle + Brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Link href="/" className="flex items-center gap-1">
            <BrandLogo />
            <BrandName className="hidden sm:block" />
          </Link>
        </div>

        {/* Center: Desktop navigation */}
        <div className="hidden items-center gap-6 sm:flex">
          <Link href="/dashboard" className="flex items-center gap-2 text-foreground text-xs hover:text-foreground/80">
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>

          <Dropdown>
            <Dropdown.Trigger>
              <Button variant="ghost" size="sm">
                <Menu className="size-4" />
                Features
                <ChevronDown className="size-4" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <Dropdown.Menu aria-label="Features menu">
                {dashboardItems.map((item) => (
                  <Dropdown.Item key={item.title} id={item.title} textValue={item.title} href={item.href}>
                    <item.icon className="size-4" />
                    <span className="font-bold">{item.title}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>

          <Link href="/about" className="flex items-center gap-2 text-foreground text-xs hover:text-foreground/80">
            <FileText className="size-4" />
            About
          </Link>
        </div>

        {/* Right: Theme + Sign in */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher isBlur={false} className="hidden sm:block" />
          <LoginUserBtn />
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-border border-t sm:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-foreground hover:bg-muted"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}>
                  <item.icon className="size-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-foreground hover:bg-muted"
                href="/about"
                onClick={() => setIsMenuOpen(false)}>
                <FileText className="size-5" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <LoginUserBtnMobile />
            </li>
            <li>
              <ThemeSwitcher isBlur={false} className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function LoginUserBtn() {
  return (
    <Link href="/signin">
      <Button size="sm">Sign In</Button>
    </Link>
  );
}

function LoginUserBtnMobile() {
  return (
    <Link
      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-lg text-primary hover:bg-muted"
      href="/signin">
      Sign In
    </Link>
  );
}
