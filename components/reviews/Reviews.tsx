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
        <div className="relative w-full min-h-87.5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
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
              el: ".reviews-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            className="reviews-swiper"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                {({ isActive }) => (
                  <div
                    className={`rounded-lg px-8 transition-all duration-500 w-full flex flex-col justify-center
                      ${isActive 
                        ? "bg-main-white h-57.5 scale-105 z-10 border border-black/5" 
                        : "bg-bg-filter h-52.5 scale-100 opacity-50 border border-black/5"
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <Image
                        src={review.image}
                        alt={review.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0"
                        width={64}
                        height={64}
                      />
                      <div className="flex flex-col">
                        <p className="text-labels text-xs font-medium mb-1">
                          {review.date}
                        </p>
                        <h3 className="text-main-black text-sm md:text-base font-bold mb-2">
                          {review.name}
                        </h3>
                        <p className="text-font-body text-xs md:text-sm leading-relaxed line-clamp-4">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* External Pagination */}
        <div className="reviews-pagination flex justify-center -my-2" />
      </div>
    </section>
  );
}
