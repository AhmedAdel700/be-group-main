"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import userImage from "@/assets/reviewImage.svg";
import { useLocale } from "next-intl";

const REVIEWS = [
  {
    id: 1,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: userImage,
  },
  {
    id: 2,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: userImage,
  },
  {
    id: 3,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: userImage,
  },
  {
    id: 4,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: userImage,
  },
  {
    id: 5,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: userImage,
  },
];

export default function Reviews() {
  const locale = useLocale();
  return (
    <section
      className="bg-main-white relative overflow-hidden"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="py-12.5 lg:py-25 px-4 md:px-0">
        {/* Header and Navigation */}
        <div className="flex flex-row items-center justify-around gap-2 mb-12 w-full xl:w-[65%] 2xl:w-[60%] mx-auto">
          <button
            className="flex items-center justify-center swiper-btn-prev w-10 h-10 md:w-12 md:h-12 rounded-full text-[#4b5563] hover:text-black hover:bg-gray-100 transition-all cursor-pointer z-10 shrink-0"
            aria-label="Previous Review"
          >
            {locale === "ar" ? (
              <ChevronRight
                size={40}
                strokeWidth={2.5}
                className="text-[#525252] w-6 h-6 md:w-10 md:h-10"
              />
            ) : (
              <ChevronLeft
                size={40}
                strokeWidth={2.5}
                className="text-[#525252] w-6 h-6 md:w-10 md:h-10"
              />
            )}
          </button>

          <h2 className="text-base md:text-[32px] font-bold text-center text-main-black leading-[160%]">
            آراء وتجارب حقيقية تثبت أننا الاختيار الصحيح
          </h2>

          <button
            className="flex items-center justify-center swiper-btn-next w-10 h-10 md:w-12 md:h-12 rounded-full text-[#4b5563] hover:text-black hover:bg-gray-100 transition-all cursor-pointer z-10 shrink-0"
            aria-label="Next Review"
          >
            {locale === "ar" ? (
              <ChevronLeft
                size={40}
                strokeWidth={2.5}
                className="text-[#525252] w-6 h-6 md:w-10 md:h-10"
              />
            ) : (
              <ChevronRight
                size={40}
                strokeWidth={2.5}
                className="text-[#525252] w-6 h-6 md:w-10 md:h-10"
              />
            )}
          </button>
        </div>

        {/* Swiper Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="reviews-swiper"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-bg-filter rounded-lg px-4 md:px-6 py-6 md:py-8 h-full xl:h-62.5 flex flex-col justify-start shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                  <div className="flex items-start gap-4 md:gap-6">
                    <Image
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 md:w-24 md:h-24 rounded-full object-cover shrink-0"
                      width={96}
                      height={96}
                    />
                    <div className="flex items-start gap-3 md:gap-6">
                      <div className="flex flex-col">
                        <p className="text-font-body leading-[160%] text-xs md:text-base font-medium mb-1 md:mb-3">
                          {review.date}
                        </p>
                        <h3 className="text-font-body leading-[160%] text-sm md:text-lg font-bold mb-1 md:mb-2">
                          {review.name}
                        </h3>

                        <p className="text-font-body leading-[160%] text-xs md:text-base font-medium">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fallback Mobile Navigation disabled */}
        </div>
      </div>
    </section>
  );
}
