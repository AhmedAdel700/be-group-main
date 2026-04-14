"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      onClick={toggleLanguage}
      dir="ltr"
      className="relative flex items-center w-[140px] h-[44px] bg-white/5 backdrop-blur-md rounded-full border border-white/10 p-1 cursor-pointer transition-all duration-500 hover:border-primary/30 group select-none"
    >
      <div className="relative flex w-full h-full items-center z-10">
        <div className="flex-1 flex justify-center items-center">
          <span className={`text-[13px] font-bold transition-colors duration-500 ${locale === "ar" ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
            العربية
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <span className={`text-[13px] font-bold transition-colors duration-500 ${locale === "en" ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
            English
          </span>
        </div>
      </div>

      {/* Sliding Highlight */}
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
        className="absolute left-0 w-[66px] h-[36px] bg-primary rounded-full shadow-[0_4px_20px_rgba(222,114,53,0.4)] z-0"
      />
    </div>
  );
}
