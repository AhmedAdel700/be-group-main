"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("a11y");

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleLanguage();
    }
  };

  const isAboutPage = pathname === "/about" || pathname?.startsWith("/blogs/");

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      onKeyDown={handleKeyDown}
      dir="ltr"
      role="switch"
      aria-checked={locale === "en"}
      aria-label={`${t("languageSwitch")}: ${locale === "ar" ? t("languageArabic") : t("languageEnglish")}`}
      className={`relative flex items-center w-35 h-11 backdrop-blur-md rounded-full border p-1 cursor-pointer transition-all duration-500 hover:border-primary/30 group select-none ${
        isAboutPage ? "bg-black/60 border-white/10" : "bg-white/5 border-white/10"
      }`}
    >
      <div className="relative flex w-full h-full items-center z-10 pointer-events-none">
        <div className="flex-1 flex justify-center items-center">
          <span
            className={`text-sm leading-[100%] font-bold transition-colors duration-500 ${
              locale === "ar"
                ? "text-white"
                : "text-white/50 group-hover:text-white/80"
            }`}
          >
            {t("languageArabic")}
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span
            className={`text-sm leading-[100%] font-bold transition-colors duration-500 ${
              locale === "en"
                ? "text-white"
                : "text-white/50 group-hover:text-white/80"
            }`}
          >
            {t("languageEnglish")}
          </span>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          x: locale === "ar" ? 4 : 70,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
        aria-hidden="true"
        className="absolute left-0 w-16.5 h-9 bg-primary rounded-full shadow-[0_4px_20px_rgba(222,114,53,0.4)] z-0"
      />
    </button>
  );
}
