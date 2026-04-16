"use client";

import Image, { StaticImageData } from "next/image";
import teamImg from "@/assets/team.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useLocale } from "next-intl";

const TEAM = [
  {
    name: "أ. حسين حسني",
    role: "Middle East Sales Director",
    image: teamImg,
  },
  {
    name: "أ. حسين حسني",
    role: "Middle East Sales Director",
    image: teamImg,
  },
  {
    name: "أ. حسين حسني",
    role: "Middle East Sales Director",
    image: teamImg,
  },
  {
    name: "أ. حسين حسني",
    role: "مدير قطاع التطوير الرقمي",
    image: teamImg,
  },
  {
    name: "أ. حسين حسني",
    role: "Middle East Sales Director",
    image: teamImg,
  },
];

function TeamCard({
  member,
}: {
  member: { name: string; role: string; image: StaticImageData | string };
}) {
  return (
    <div className="bg-main-white rounded-2xl border border-1.5 border-[#E5E5E5] px-4.5 py-4 flex flex-col gap-2.5 group h-full">
      {/* Image */}
      <div className="relative w-full h-55 rounded-md overflow-hidden group-hover:scale-99 transition-transform">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 px-1 text-start flex-1">
        <h3 className="text-xl font-bold text-main-black leading-[140%]">
          {member.name}
        </h3>
        <p className="text-base leading-[140%] font-medium text-font-body">
          {member.role}
        </p>
      </div>

      {/* Button */}
      <button className="w-full py-2.5 cursor-pointer rounded-[250px] border border-primary text-primary font-bold text-[15px] bg-transparent transition-colors hover:bg-primary hover:text-white">
        الملف الشخصي
      </button>
    </div>
  );
}

export default function Team() {
  const locale = useLocale();
  return (
    <section className="bg-main-white">
      <div className="section-container flex flex-col gap-6">
        {/* Header */}
        <div
          className="flex flex-col gap-2 w-full items-end text-end lg:items-start lg:text-start"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <h2 className="text-primary font-bold text-lg md:text-xl leading-[160%]">
            فريق القيادة
          </h2>
          <p className="text-font-body font-bold text-lg md:text-xl leading-[160%]">
            نخبة من القيادات السعودية المتميزة تقود مسيرة النجاح
          </p>
        </div>

        <div dir={locale === "ar" ? "rtl" : "ltr"}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            slidesPerView={1.3}
            spaceBetween={10}
            centeredSlides={true}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
          >
            {TEAM.map((member, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
