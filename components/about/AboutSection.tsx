"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-main-white">
      <div className="section-container flex flex-col gap-10">
        {/* TEXT */}
        <div className="flex flex-col gap-2 w-full lg:max-w-287.5">
          <h2 className="text-primary font-bold text-lg leading-[160%] text-start">
            من نحن
          </h2>
          <p className="text-main-black font-medium text-base leading-[160%] text-start">
            بي جروب هي مجموعة سعودية رائدة تعمل في خمسة قطاعات حيوية تخدم السوق
            المحلي والإقليمي. نؤمن بأن التكامل بين القطاعات يخلق قيمة مضافة
            لعملائنا وشركائنا. نلتزم برؤية المملكة 2030 من خلال تقديم حلول
            مبتكرة وخدمات احترافية تساهم في بناء اقتصاد متنوع ومستدام. نفخر
            بفريقنا من الخبراء السعوديين الذين يقودون مشاريعنا بكفاءة عالية.
          </p>
        </div>

        {/* VIDEO */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
          {isPlaying ? (
            <iframe
              className="w-full h-55 md:h-125.5"
              src="https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <Image
                src="/assets/videoImage.svg"
                alt="Video Poster"
                width={5000}
                height={700}
                className="w-full h-55 md:h-140 object-cover"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-20 h-20 md:w-31 md:h-31 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-semibold hover:scale-105 transition">
                  Play
                </div>
              </button>
            </>
          )}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat number={16} label="سنة من الخبرة" suffix="+" />
          <Stat number={250} label="فريق متخصص" suffix="+" />
          <Stat number={400} label="مشروع ناجح" suffix="+" />
          <Stat number={3000} label="عملاء راضون" suffix="+" />
        </div>
      </div>
    </section>
  );
}

/* STAT COMPONENT */
function Stat({ number, label, suffix = "" }: { number: number; label: string; suffix?: string }) {
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
      <h3 ref={ref} className="text-4xl md:text-[60px] font-medium leading-[125%] text-main-black">
        0{suffix}
      </h3>
      <p className="text-base md:text-lg text-font-body leading-[155%] font-normal">{label}</p>
    </div>
  );
}
