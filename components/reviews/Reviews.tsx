"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data
const REVIEWS = [
  {
    id: 1,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 5,
    date: "8 مارس 2025",
    name: "عنوان او اسم العميل",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
  },
];

export default function Reviews() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Header and Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          {/* Swiper Prev Button (Right Arrow in RTL) */}
          <button 
            className="hidden md:flex items-center justify-center swiper-btn-prev w-12 h-12 rounded-full text-[#4b5563] hover:text-black hover:bg-gray-100 transition-all cursor-pointer z-10"
            aria-label="Previous Review"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
          
          <h2 className="text-2xl md:text-[32px] font-bold text-center text-gray-900 leading-tight">
            آراء وتجارب حقيقية تثبت أننا الاختيار الصحيح
          </h2>
          
          {/* Swiper Next Button (Left Arrow in RTL) */}
          <button 
            className="hidden md:flex items-center justify-center swiper-btn-next w-12 h-12 rounded-full text-[#4b5563] hover:text-black hover:bg-gray-100 transition-all cursor-pointer z-10"
            aria-label="Next Review"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
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
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
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
                <div className="bg-[#fcfcfc] rounded-2xl p-6 md:p-8 h-full flex flex-col justify-start border border-gray-100 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-500 mb-1 text-xs md:text-sm">{review.date}</p>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{review.name}</h3>
                    </div>
                  </div>
                  <p className="text-[#6c7b89] leading-[1.8] text-sm md:text-base font-medium">
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fallback Mobile Navigation (Optional, pagination usually sufficient) */}
          <div className="flex justify-center items-center gap-6 mt-4 md:hidden">
            <button className="swiper-btn-prev p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
               <ChevronRight size={24} />
            </button>
            <button className="swiper-btn-next p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
               <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
