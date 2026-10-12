import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent-300 bg-accent-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

const primaryStyle =
  "bg-primary-800 text-white shadow-soft hover:bg-primary-900 active:bg-primary-950";

const secondaryStyle =
  "border border-line bg-white text-primary-800 hover:border-accent-300 hover:bg-accent-50";

const sizes = {
  md: "h-11 px-5",
  lg: "h-13 px-7 text-[0.95rem]",
} as const;

type LinkButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "secondary";
  size?: keyof typeof sizes;
};

export function LinkButton({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        buttonBase,
        sizes[size],
        variant === "primary" ? primaryStyle : secondaryStyle,
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
