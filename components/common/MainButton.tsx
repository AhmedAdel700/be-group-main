"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttontype?: "primary" | "secondary" | "black" | "prev" | "next";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  className?: string;
}

export default function MainButton({
  children,
  buttontype = "primary",
  iconStart,
  iconEnd,
  className = "",
  "aria-label": ariaLabel,
  ...props
}: MainButtonProps) {
  const locale = useLocale();
  const t = useTranslations("a11y");
  const isRtl = locale === "ar";

  const variantClasses = {
    primary: "btn-main",
    secondary: "btn-secondary",
    black: "btn-black",
    prev: "btn-nav-prev",
    next: "btn-nav-next",
  };

  const selectedVariant = variantClasses[buttontype] || variantClasses.primary;

  const defaultNavLabel =
    buttontype === "prev" ? t("previous") : buttontype === "next" ? t("next") : undefined;

  const resolvedAriaLabel =
    ariaLabel ??
    ((buttontype === "prev" || buttontype === "next") && !children
      ? defaultNavLabel
      : undefined);

  const renderNavIcon = () => {
    if (buttontype === "prev") {
      return isRtl ? <ArrowRight size={24} aria-hidden="true" /> : <ArrowLeft size={24} aria-hidden="true" />;
    }
    if (buttontype === "next") {
      return isRtl ? <ArrowLeft size={24} aria-hidden="true" /> : <ArrowRight size={24} aria-hidden="true" />;
    }
    return null;
  };

  return (
    <button
      suppressHydrationWarning
      className={`${selectedVariant} ${className} flex items-center gap-2.5`}
      aria-label={resolvedAriaLabel}
      {...props}
    >
      {(iconStart || buttontype === "prev") && (
        <span className="inline-flex items-center justify-center" aria-hidden={!!resolvedAriaLabel && !children}>
          {iconStart || renderNavIcon()}
        </span>
      )}

      {children && <span>{children}</span>}

      {(iconEnd || buttontype === "next") && (
        <span className="inline-flex items-center justify-center" aria-hidden={!!resolvedAriaLabel && !children}>
          {iconEnd || renderNavIcon()}
        </span>
      )}
    </button>
  );
}
