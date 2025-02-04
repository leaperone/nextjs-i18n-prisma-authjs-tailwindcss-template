import { Button, Chip } from "@heroui/react";
import { cn } from '@/lib/utils';
import { CheckIcon, LayoutDashboardIcon } from 'lucide-react';
import Link from 'next/link';
import ScrollScreenChevronDown from '@/components/HomePage/ScrollScreenChevronDown';
import HeroSectionTextHover from './hero-section-text-hover';
import { createTranslation } from '@/i18n/server';

async function InfoContainer() {
  const { t } = await createTranslation('home');

  const underlinedWord = (text: string) => (
    <span className="cursor-pointer underline decoration-blue-500 decoration-wavy dark:decoration-yellow-300">
      {text}
    </span>
  );

  return (
    <div className="flex w-full flex-col items-center">
      <Chip
        size="lg"
        variant="flat"
        color="success"
        startContent={<CheckIcon />}>
        {t('hero.beta')}
      </Chip>
      <HeroSectionTextHover />
      <p className="mb-8 w-full max-w-2xl animate-fadeIn text-center text-lg leading-8 text-foreground-600">
        All in one 🎯 tool that empowers 🚀 your creating 📝 in {underlinedWord('any platform')}.
      </p>
      <div className="flex animate-fadeIn justify-center gap-2">
        <Button
          as={Link}
          href="/dashboard"
          size="lg"
          startContent={<LayoutDashboardIcon />}
          className="bg-gradient-to-r from-blue-400 to-sky-300 text-white transition-opacity hover:opacity-90">
          {t('hero.cta')}
        </Button>
      </div>
    </div>
  );
}

// HeroSection Component
async function HeroSection({ className }: { className?: string }) {
  return (
    <div className={cn('hero-container relative w-full bg-background', className)}>
      <div className="z-40 m-auto flex h-full min-h-[70vh] w-[90%] flex-col items-center justify-center bg-transparent">
        <InfoContainer />
      </div>
      <div className="absolute bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-8">
        <ScrollScreenChevronDown />
      </div>
    </div>
  );
}

export default HeroSection;
