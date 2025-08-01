'use client';

import { Divider, Link } from '@heroui/react';
import type { IconProps } from '@iconify/react';
import { Icon } from '@iconify/react';
import React from 'react';

import { BrandLogo, BrandName } from '@/components/Brand';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

type SocialIconProps = Omit<IconProps, 'icon'>;

const footerNavigation = {
  services: [
    { name: '2SOMEone', href: 'https://2some.one' },
    { name: 'MultiPost 多平台运营工具', href: 'https://multipost.app' },
    { name: '礼兮', href: '/dashboard/oh-gift' },
    { name: 'Voite', href: 'https://voite.2some.one' },
    { name: 'FameDayOne', href: 'https://fameday.one' },
  ],
  supportOptions: [
    { name: '定价', href: '/pricing' },
    { name: '用户手册（文档）', href: 'https://mc1cz6k4he.feishu.cn/wiki/EcU8wdd00iXieQkIQbTctNcMnFc' },
    { name: 'LEAPERone Doc 开发文档', href: 'https://doc.leaper.one' },
    { name: '直播服务商名录', href: 'https://mc1cz6k4he.feishu.cn/wiki/space/7460543293223616540' },
    { name: '服务可用状态', href: 'https://status.2some.ren' },
  ],
  aboutUs: [
    { name: '我们的团队', href: 'http://leaper.one' },
    // { name: '博客（Live2SOMEone）', href: 'https://live.2some.one' },
    // { name: 'Latest News', href: '#' },
    // { name: 'Career Opportunities', href: '#' },
    // { name: 'Media Enquiries', href: '#' },
    // { name: 'Collaborations', href: '#' },
  ],
  legal: [
    // { name: '隐私政策', href: 'https://mc1cz6k4he.feishu.cn/wiki/XQxBwIqxOidbP8kdRfscsjsYnMd' },
    // { name: '用户协议', href: 'https://mc1cz6k4he.feishu.cn/wiki/JcXHwMqzCis1xekykN3cFVYPn4b' },
    { name: '隐私政策', href: '/legal/privacy' },
    { name: '用户协议', href: '/legal/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon
          {...props}
          icon="fontisto:facebook"
        />
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon
          {...props}
          icon="fontisto:instagram"
        />
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon
          {...props}
          icon="fontisto:twitter"
        />
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon
          {...props}
          icon="fontisto:github"
        />
      ),
    },
  ],
};

const beiAnLinks = [
  {
    label: '粤ICP备2024184990号',
    to: 'https://beian.miit.gov.cn',
  },
  {
    label: '粤公网安备44040202001522',
    to: 'https://beian.mps.gov.cn/#/query/webSearch?code=44040202001522',
  },
];

export default function Footer() {
  const renderList = React.useCallback(
    ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-default-400"
                href={item.href}
                size="sm">
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
      <div className="px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <BrandLogo />
              <BrandName />
            </div>
            <p className="text-small text-default-500">人、直播、生活</p>
            {/* TODO: social links */}
            {/* <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  isExternal
                  className="text-default-400"
                  href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    aria-hidden="true"
                    className="w-6"
                  />
                </Link>
              ))}
            </div> */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: '服务', items: footerNavigation.services })}</div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: '支持', items: footerNavigation.supportOptions })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: '关于我们', items: footerNavigation.aboutUs })}</div>
              <div className="mt-10 md:mt-0">{renderList({ title: '合规', items: footerNavigation.legal })}</div>
            </div>
          </div>
        </div>
        <Divider className="mt-16 sm:mt-20 lg:mt-24" />
        <div className="flex flex-wrap items-center justify-between gap-2 pt-8">
          <p className="text-small text-default-400">&copy; 2025 LEAPERone Inc. 保留所有权利。</p>
          {beiAnLinks.map((link) => (
            <Link
              key={link.label}
              href={link.to}
              size="sm"
              className="text-default-400">
              {link.label}
            </Link>
          ))}
          <ThemeSwitcher isBlur={false} />
        </div>
      </div>
    </footer>
  );
}
