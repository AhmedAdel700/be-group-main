import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

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
  ...props
}: MainButtonProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const variantClasses = {
    primary: "btn-main",
    secondary: "btn-secondary",
    black: "btn-black",
    prev: "btn-nav-prev",
    next: "btn-nav-next",
  };

  const selectedVariant = variantClasses[buttontype] || variantClasses.primary;

  const renderNavIcon = () => {
    if (buttontype === "prev") {
      return isRtl ? <ArrowRight size={24} /> : <ArrowLeft size={24} />;
    }
    if (buttontype === "next") {
      return isRtl ? <ArrowLeft size={24} /> : <ArrowRight size={24} />;
    }
    return null;
  };

  return (
    <button
      suppressHydrationWarning
      className={`${selectedVariant} ${className} flex items-center gap-2.5`}
      {...props}
    >
      {(iconStart || buttontype === "prev") && (
        <span className="inline-flex items-center justify-center">
          {iconStart || renderNavIcon()}
        </span>
      )}

      {children && <span>{children}</span>}

      {(iconEnd || buttontype === "next") && (
        <span className="inline-flex items-center justify-center">
          {iconEnd || renderNavIcon()}
        </span>
      )}
    </button>
  );
}
