import { cn } from "@/lib/utils";

export const BrandLogo = () => (
  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
    <span className="font-bold text-sm text-white">T</span>
  </div>
);

export const BrandName = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-br from-blue-300 to-pink-600 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:to-pink-400",
        className,
      )}>
      My Template
    </span>
  );
};
