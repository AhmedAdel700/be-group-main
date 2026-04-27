"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import PagesHero from "@/components/pages-hero/PagesHero";
import Partners from "@/components/partners/Partners";
import Status from "@/components/status/Status";
export default function AllSectors() {
  return (
    <>
    <PagesHero page="allsectors" />
    {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat number={16} label="سنة من الخبرة" suffix="+" />
          <Stat number={250} label="فريق متخصص" suffix="+" />
          <Stat number={400} label="مشروع ناجح" suffix="+" />
          <Stat number={3000} label="عملاء راضون" suffix="+" />
        </div>
    <div className="relative">All Sectors Page</div>
    <Partners />
    </>
    
  )

}
  /* STAT COMPONENT */
function Stat({
  number,
  label,
  suffix = "",
}: {
  number: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(value) + suffix;
          }
        },
      });
    }
  }, [isInView, number, suffix]);

  return (
    <div className="flex flex-col items-center gap-2">
      <h3
        ref={ref}
        className="text-4xl md:text-[60px] font-medium leading-[125%] text-main-black"
      >
        0{suffix}
      </h3>
      <p className="text-base md:text-lg text-font-body leading-[155%] font-normal">
        {label}
      </p>
    </div>
  );
}
