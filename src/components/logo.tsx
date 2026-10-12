import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <rect width="40" height="40" rx="12" fill="#331753" />
      <circle cx="20" cy="15.5" r="4.6" fill="#e8dff7" />
      <path
        d="M9.5 29.5c1.6-4.1 5.7-6.8 10.5-6.8s8.9 2.7 10.5 6.8"
        fill="none"
        stroke="#e8dff7"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="10.6" cy="17.8" r="2.5" fill="#a385d5" />
      <circle cx="29.4" cy="17.8" r="2.5" fill="#a385d5" />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      to={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600",
        className,
      )}
      aria-label="Koleva, kembali ke beranda"
    >
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-3" />
      <span className="font-display text-xl font-extrabold tracking-tight text-primary-900">
        Koleva
      </span>
    </Link>
  );
}
