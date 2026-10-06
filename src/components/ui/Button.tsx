"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

/**
 * Reusable Button component with multiple variants and loading state.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconRight,
  fullWidth = false,
  className,
  disabled,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-[var(--radius-md)] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light hover:scale-[1.03] hover:shadow-lg active:bg-primary-dark",
    secondary:
      "bg-secondary text-white hover:bg-secondary-light hover:scale-[1.03] hover:shadow-lg active:bg-secondary-dark",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.03]",
    ghost:
      "text-primary hover:bg-primary-50 hover:scale-[1.02]",
    accent:
      "bg-accent text-white hover:bg-accent-hover hover:scale-[1.03] hover:shadow-lg active:bg-accent-dark",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
