"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import partner1 from '@/assets/partner1.svg';
import partner2 from '@/assets/partner2.svg';
import partner3 from '@/assets/partner3.svg';
import partner4 from '@/assets/partner4.svg';
import partner5 from '@/assets/partner5.svg';
import partner6 from '@/assets/partner6.svg';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const partners = [
  { id: 1, src: partner1 },
  { id: 2, src: partner2 },
  { id: 3, src: partner3 },
  { id: 4, src: partner4 },
  { id: 5, src: partner5 },
  { id: 6, src: partner6 },
];

export default function Partners() {
  const locale = useLocale();
  return (
    <section className="bg-main-black/95 py-10 h-47 overflow-hidden" dir={locale === 'en' ? 'rtl' : 'ltr'}>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-[#FEFEFE] lg:text-lg leading-[150%] text-center font-normal mb-3.5">
          تحظى Be GROUP بثقة أكثر من 55,000 شركة حول العالم
        </p>

        <div className="w-full relative container mx-auto px-6 lg:px-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView="auto"
            loop={true}
            speed={10000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="w-full partners-swiper"
          >
            {/* We duplicate the array mapping slightly intentionally to ensure smooth looping without gaps if screen is huge, though Swiper 'loop' handles most of it */}
            {[...partners, ...partners].map((partner, index) => (
              <SwiperSlide
                key={`${partner.id}-${index}`}
                className="w-auto! flex items-center justify-center"
              >
                <div className="flex items-center">
                  <Link href={"/"} target="_blank">
                    <Image
                      src={partner.src}
                      alt={`Partner ${partner.id}`}
                      width={200}
                      height={200}
                      className="transition-transform grayscale hover:grayscale-0 shrink-0 w-32 h-11 object-contain hover:scale-[1.1] duration-300"
                    />
                  </Link>
                  {/* Vertical Separator */}
                  <div className="h-6 w-px bg-[#FEFEFE] ms-6 me-6 sm:ms-12 sm:me-12"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}