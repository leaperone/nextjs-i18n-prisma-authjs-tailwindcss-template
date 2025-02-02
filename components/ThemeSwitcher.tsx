// app/components/ThemeSwitcher.tsx
'use client';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@heroui/react";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SidebarMenuButton } from './ui/sidebar';

interface ThemeSwitcherProps {
  className?: string;
  isBlur?: boolean;
}

export function ThemeSwitcher({ className, isBlur = true }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      {theme === 'light' ? (
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className={isBlur ? 'bg-foreground/10 dark:bg-foreground/20' : ''}
          onPress={() => setTheme('dark')}>
          <Sun />
        </Button>
      ) : (
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className={isBlur ? 'bg-foreground/10 dark:bg-foreground/20' : ''}
          onPress={() => setTheme('light')}>
          <Moon />
        </Button>
      )}
    </div>
  );
}

export function SidebarThemeSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <SidebarMenuButton
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={className}>
      {theme === 'light' ? <Sun className="size-5" /> : <Moon className="size-5" />}
      <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
    </SidebarMenuButton>
  );
}
