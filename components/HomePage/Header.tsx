import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@heroui/react';
import { HomePageNavigationMenu } from '@/components/HomePage/NavigationMenu';
import SignInButton from '@/components/SignInButton';
import { ThemeSwitcher } from '../ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';

export default function HomePageHeader() {
  return (
    <Navbar className="fixed inset-x-0 top-0 z-50">
      <NavbarBrand>
        <Link
          href="/"
          className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <span className="text-lg font-bold text-white">D</span>
          </div>
          <span className="text-xl font-semibold">Demo</span>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center">
        <HomePageNavigationMenu />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher isBlur={false} />
        </NavbarItem>
        <NavbarItem className="hidden sm:block w-28">
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
