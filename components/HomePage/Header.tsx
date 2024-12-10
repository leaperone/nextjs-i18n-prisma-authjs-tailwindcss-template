import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import { BrandLogo, BrandName } from '../Brand';
import { HomePageNavigationMenu } from '@/components/HomePage/NavigationMenu';
import SignInButton from '@/components/SignInButton';
import { ThemeSwitcher } from '../ThemeSwitcher';

export default function HomePageHeader() {
  return (
    <Navbar className="fixed inset-x-0 top-0 z-50">
      <NavbarBrand>
        <Link href="/">
          <BrandLogo />
          <BrandName />
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
        <NavbarItem>
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
