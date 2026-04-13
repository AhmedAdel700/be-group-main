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
      className="relative flex items-center w-30 h-10 bg-main-white/5 backdrop-blur-xl rounded-full border border-main-white/10 p-1 cursor-pointer transition-all duration-500 hover:border-primary/40 group"
    >
      {/* Sliding Highlight */}
      <motion.div
        layout
        animate={{ x: locale === "ar" ? 0 : 58 }}
        className="absolute w-13.5 h-7.5 bg-primary rounded-full shadow-[0_4px_15px_rgba(222,114,53,0.3)]"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      <div className="relative flex justify-between w-full items-center z-10 px-1">
        <div className={`flex-1 text-center transition-colors duration-300`}>
          <span className={`text-[12px] font-bold tracking-tight ${locale === "ar" ? "text-main-white" : "text-main-white/40 group-hover:text-main-white/60"}`}>
            العربية
          </span>
        </div>
        <div className={`flex-1 text-center transition-colors duration-300`}>
          <span className={`text-[12px] font-bold tracking-widest ${locale === "en" ? "text-main-white" : "text-main-white/40 group-hover:text-main-white/60"}`}>
            EN
          </span>
        </div>
      </div>
    </div>
  );
}
