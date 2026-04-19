"use client";

import Image from "next/image";
import sector1 from "@/assets/service1.png";
import sector2 from "@/assets/service2.png";
import sector3 from "@/assets/service3.png";
import sector4 from "@/assets/service4.png";
import sector5 from "@/assets/service5.png";
import sector6 from "@/assets/service6.png";
import sector7 from "@/assets/service7.png";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const SECTORS = [
  sector1,
  sector2,
  sector3,
  sector4,
  sector5,
  sector6,
  sector7,
];

const cardVariants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.04,
    boxShadow: "0px 12px 32px rgba(0,0,0,0.35)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

function SectorCard({ sector, index }: { sector: typeof sector1; index: number }) {
  return (
    <Link href={"/"}>
      <motion.div
        className="rounded-[22px] overflow-hidden cursor-pointer"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Image
          src={sector}
          alt={`Sector ${index + 1}`}
          width={2000}
          height={370}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </Link>
  );
}

export default function Sectores() {
  return (
    <section className="bg-sectors-bg">
      <div className="section-container flex flex-col gap-2">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-10 lg:px-4">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-primary font-bold text-base sm:text-lg">
              قطاعات نخدمها
            </h2>
            <p className="text-main-white font-bold text-base sm:text-xl">
              مشاريع حقيقية نفذناها في مجالات متعددة ، من التخطيط وحتى التنفيذ
              باحترافية عالية.
            </p>
          </div>
        </div>

        {/* Mobile: Swiper Carousel (hidden on md+) */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.3}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 2, centeredSlides: false },
            }}
          >
            {SECTORS.map((sector, index) => (
              <SwiperSlide key={index}>
                <SectorCard sector={sector} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid for lg (4 then 3 centered), Flex for md (hidden below md) */}
        <div className="hidden md:flex lg:grid lg:grid-cols-8 flex-wrap justify-center items-center gap-x-4 gap-y-6">
          {SECTORS.map((sector, index) => (
            <div
              key={index}
              className={`
                w-full md:w-[calc(50%-1rem)] lg:w-full
                lg:col-span-2
                ${index === 4 ? "lg:col-start-2" : ""}
              `}
            >
              <SectorCard sector={sector} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
