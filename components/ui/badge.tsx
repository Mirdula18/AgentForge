import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-[0.18em] uppercase",
  {
    variants: {
      variant: {
        default: "border-cyan-400/25 bg-cyan-400/10 text-cyan-600 dark:text-cyan-100",
        violet: "border-violet-400/25 bg-violet-400/10 text-violet-600 dark:text-violet-100",
        success: "border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-100",
        warning: "border-amber-400/25 bg-amber-400/10 text-amber-600 dark:text-amber-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
