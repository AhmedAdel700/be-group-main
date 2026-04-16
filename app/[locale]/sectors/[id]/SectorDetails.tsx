'use client';

import SectorServices from "@/components/sector-serivces/SectorServices";
import Partners from "@/components/partners/Partners";
import Reviews from "@/components/reviews/Reviews";
import PagesHero from "@/components/pages-hero/PagesHero";
import Status from "@/components/status/Status";

export default function SectorDetails() {
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