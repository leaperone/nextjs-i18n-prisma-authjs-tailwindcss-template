'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';
import { LayoutDashboard, MessageSquare, Gift, Tag, FileText, RssIcon } from 'lucide-react';
import React, { useState } from 'react';

import { BrandLogo, BrandName } from '@/components/Brand';
import { HomePageNavigationMenu } from '@/components/HomePage/NavigationMenu';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const menuItems = [
  {
    title: '仪表盘',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: '泡泡树洞',
    icon: MessageSquare,
    href: '/dashboard/bubblebox',
  },
  {
    title: '僚机',
    icon: MessageSquare,
    href: '/dashboard/danmuku',
  },
  {
    title: '礼兮',
    icon: Gift,
    href: '/dashboard/oh-gift',
  },
  {
    title: '文档',
    icon: FileText,
    href: 'https://doc.2some.ren',
  },
  {
    title: '博客',
    icon: RssIcon,
    href: 'https://mc1cz6k4he.feishu.cn/wiki/VEBmwYV7hi5UTqk71DucmARinVd',
  },
  {
    title: '定价',
    icon: Tag,
    href: '/pricing',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
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
        className="hidden gap-4 sm:flex"
        justify="center">
        <HomePageNavigationMenu />
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
      href="/signin">
      登录
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
      登录
    </Link>
  );
}
