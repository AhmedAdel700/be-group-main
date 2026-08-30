"use client";

import {  useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
export default function Numbers() {
  return (
    <>
    {/* STATS */}
    <div className="relative ">
      <div className="grid w-3/4 grid-cols-2 md:grid-cols-4 gap-6 text-start">
          <Stat  number={16} label="سنة من الخبرة" suffix="+" />
          <Stat number={250} label="فريق متخصص" suffix="+" />
          <Stat number={400} label="مشروع ناجح" suffix="+" />
          <Stat number={3000} label="عملاء راضون" suffix="+" />
        </div>
    </div>
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
    <div className="flex flex-col text-white items-start gap-2">
      <h3
        ref={ref}
        className="text-2xl md:text-4xl lg:text-5xl xl:text-[60px] font-medium leading-[125%]"
      >
        0{suffix}
      </h3>
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-font-white leading-[155%] font-normal">
        {label}
      </p>
    </div>
  );
}
