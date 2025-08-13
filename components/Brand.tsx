import { cn, Image } from '@heroui/react';
import React from 'react';

export const BrandLogo = () => (
  <div className="flex size-10 items-center rounded-full bg-white dark:bg-black">
    <Image
      src="https://2someone-web-static.s3.bitiful.net/2024/06/5f2b5bfcae6e587ab4e8bc42e4e5bc96.avif"
      alt="2SOMEren Logo"
    />
  </div>
);

export const BrandName = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-br from-blue-300 to-pink-600 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:to-pink-400',
        className,
      )}>
      LEAPERone Template
    </span>
  );
};
