'use client';

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectorServices from "@/components/sector-serivces/SectorServices";
import ContactSection from "@/components/contact-section/ContactSection";
import Partners from "@/components/partners/Partners";
import Reviews from "@/components/reviews/Reviews";
import PagesHero from "@/components/pages-hero/PagesHero";
import Status from "@/components/status/Status";

export default function SectorDetails() {
  const locale = useLocale();

  return (
    <main>
        <PagesHero />
        <SectorServices />
        <Status />
        <Partners />
        <Reviews />
    </main>
  );
}