'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
} from '@heroui/react';
import { LayoutDashboard, FileText, Wrench, MenuIcon, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

import { BrandLogo, BrandName } from '@/components/Brand';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const dashboardItems: { title: string; icon: React.ElementType; href: string; description: string }[] = [
  {
    title: 'Tools',
    icon: Wrench,
    href: '/tools',
    description: 'Your best toolbox',
  },
  {
    title: 'Docs',
    icon: FileText,
    href: '/docs',
    description: 'Project documentation and guides',
  },
];

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Tools',
    icon: Wrench,
    href: '/tools',
  },
  {
    title: 'Docs',
    icon: FileText,
    href: '/docs',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      height="2.5rem"
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <BrandLogo />
            <BrandName className="hidden sm:block" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="mx-auto hidden w-fit justify-between gap-6 sm:flex"
        justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/dashboard"
            className="flex items-center gap-2 text-xs">
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                size="sm"
                endContent={<ChevronDown className="size-4" />}
                startContent={<MenuIcon className="size-4" />}>
                Features
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Features menu"
              itemClasses={{
                base: 'gap-4 text-foreground text-lg font-bold',
                description: 'text-foreground/50 text-xs font-light',
              }}>
              {dashboardItems.map((item) => (
                <DropdownItem
                  key={item.title}
                  description={item.description}
                  startContent={<item.icon className="text-inherit" />}
                  as={Link}
                  href={item.href}>
                  {item.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/about"
            className="flex items-center gap-2 text-xs">
            <FileText className="size-4" />
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher
          isBlur={false}
          className="hidden sm:block"
        />

        <NavbarItem>
          <LoginUserBtn />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg">
              <div className="flex items-center gap-2">
                <item.icon className="size-5" />
                <span>{item.title}</span>
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="foreground"
            href="/about"
            size="lg">
            <div className="flex items-center gap-2">
              <FileText className="size-5" />
              <span>About</span>
            </div>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <LoginUserBtnMobile />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <ThemeSwitcher
            isBlur={false}
            className="w-full"
          />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

function LoginUserBtn() {
  return (
    <Button
      as={Link}
      href="/signin"
      size="sm">
      Sign In
    </Button>
  );
}

function LoginUserBtnMobile() {
  return (
    <Link
      className="w-full"
      color="primary"
      href="/signin"
      size="lg">
      Sign In
    </Link>
  );
}
