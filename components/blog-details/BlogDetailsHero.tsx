"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const HERO_DATA = {
  title: {
    ar:"قصة نجاح",
    en: "Success Story",
  },
};

export default function BlogDetailsHero() {
  const locale = useLocale() as "ar" | "en";
  const { title } = HERO_DATA;

  return (
    <section className="flex justify-start text-base font-normal mt-[70px] mb-[20px] lg:mt-[31px] lg:mb-5 text-[#999999] gap-2">
      {/* Breadcrumb */}
      <div
        className="flex justify-start text-base font-normal mb-6 text-[#999999] gap-2 mr-[0px] lg:mr-[-25px]"
        
      >
<Link
  href="/"
  className="font-semibold text-base leading-[160%] tracking-normal text-[#1A1A1A] hover:text-primary transition-colors cursor-pointer"
>
  {locale === "ar" ? "الرئيسية" : "Home"}
</Link>
        <span className="font-bold text-[#18181836]">/</span>
        <span className="font-extrabold text-base leading-[160%] tracking-normal text-primary line-clamp-1 max-w-xs">
  {title[locale]}
</span>
      </div>
    </section>
  );
}