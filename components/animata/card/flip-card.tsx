import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  icon,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-72 w-56 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}>
        {/* Front */}
        <div className="absolute size-full overflow-hidden rounded-2xl bg-card shadow-xl [backface-visibility:hidden] [border:1px_solid_rgba(0,0,0,0.1)] dark:shadow-2xl dark:shadow-black/40 dark:[border:1px_solid_rgba(255,255,255,0.1)]">
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-4">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5" />
            <Icon icon={icon} className="relative size-24" />
            <div className="relative font-bold text-xl">{title}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full overflow-hidden rounded-2xl bg-card p-4 [backface-visibility:hidden] [border:1px_solid_rgba(0,0,0,0.1)] dark:[border:1px_solid_rgba(255,255,255,0.1)]",
            self[1],
          )}>
          <div className="relative flex min-h-full flex-col gap-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5" />
            <h1 className="relative font-bold text-xl">{subtitle}</h1>
            <p className="relative mt-1 border-default-200 border-t py-4 font-medium text-base text-foreground/80 leading-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
