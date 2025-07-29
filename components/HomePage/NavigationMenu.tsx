'use client';

import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link as HeroLink } from '@heroui/react';
import {
  LayoutDashboard,
  MessageSquare,
  Gift,
  Tag,
  FileText,
  Wrench,
  MenuIcon,
  InboxIcon,
  RssIcon,
} from 'lucide-react';

const dashboardItems: { title: string; icon: React.ElementType; href: string; description: string }[] = [
  {
    title: '泡泡树洞',
    icon: InboxIcon,
    href: '/dashboard/bubblebox',
    description: '所有收稿，都在这里',
  },
  {
    title: '僚机',
    icon: MessageSquare,
    href: '/dashboard/danmuku',
    description: '弹幕、SC、礼物、舰长、用户行为等数据',
  },
  {
    title: '礼兮',
    icon: Gift,
    href: '/dashboard/oh-gift',
    description: 'AIO 粉丝维护系统',
  },
  {
    title: '小工具',
    icon: Wrench,
    href: '/tools',
    description: '你最好的工具箱',
  },
];

export function HomePageNavigationMenu() {
  return (
    <div className="flex items-center gap-4">
      <Button
        as={HeroLink}
        href="/dashboard"
        variant="light"
        startContent={<LayoutDashboard className="size-4" />}>
        仪表盘
      </Button>

      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            variant="light"
            endContent={
              <ChevronDown
                fill="currentColor"
                size={16}
              />
            }
            startContent={<MenuIcon className="size-4" />}>
            功能
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="功能菜单"
          itemClasses={{
            base: 'gap-4 text-foreground text-lg font-bold',
            description: 'text-foreground/50 text-xs font-light',
          }}>
          {dashboardItems.map((item) => (
            <DropdownItem
              key={item.title}
              description={item.description}
              startContent={<item.icon className="text-inherit" />}
              as={HeroLink}
              href={item.href}>
              {item.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Button
        as={HeroLink}
        href="https://mc1cz6k4he.feishu.cn/wiki/VEBmwYV7hi5UTqk71DucmARinVd"
        target="_blank"
        variant="light"
        startContent={<RssIcon className="size-4" />}>
        博客
      </Button>

      <Button
        as={HeroLink}
        href="https://doc.2some.ren"
        target="_blank"
        variant="light"
        startContent={<FileText className="size-4" />}>
        文档
      </Button>

      <Button
        as={HeroLink}
        href="/pricing"
        variant="light"
        startContent={<Tag className="size-4" />}>
        定价
      </Button>
    </div>
  );
}

interface IconProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}

const ChevronDown: React.FC<IconProps> = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};
