"use client";

import { useTranslations } from "next-intl";

export default function SkipToContent() {
  const t = useTranslations("a11y");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-main-white focus:outline-none focus:ring-2 focus:ring-main-white"
    >
      {t("skipToContent")}
    </a>
  );
}
