import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "ar"],
  defaultLocale: "ar",
  localePrefix: "always",
  localeDetection: false,
});
