"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";
import storyImage from "@/assets/blogImage.jpg";
import { Link } from "@/i18n/navigation";
import MainButton from "@/components/common/MainButton";

const STORIES = [
  {
    id: 1,
    category: "المقاولات",
    title: "تنفيذ مجمع تجاري بمساحة 50,000 متر مربع",
    description:
      "أكملنا تصميم وبناء مجمع تجاري حديث في الرياض بأعلى معايير الجودة والاستدامة البيئية.",
    image: storyImage,
    borderColor: "#FF6B00",
  },
  {
    id: 2,
    category: "التدريب",
    title: "تأهيل 500 موظف في برنامج القيادة التنفيذية",
    description:
      "نفذنا برنامجاً تدريبياً متكاملاً لشركة رائدة في القطاع المالي، شمل 500 قيادي تنفيذي على مدار 6 أشهر.",
    image: storyImage,
    borderColor: "#8B5CF6",
  },
  {
    id: 3,
    category: "الحلول الرقمية",
    title: "منصة رقمية تخدم أكثر من 100,000 مستخدم",
    description:
      "طورنا منصة متكاملة لإدارة الخدمات الحكومية بتقنيات حديثة وواجهة مستخدم سهلة.",
    image: storyImage,
    borderColor: "#06CECB",
  },
  {
    id: 4,
    category: "التدريب",
    title: "تأهيل 500 موظف في برنامج القيادة التنفيذية",
    description:
      "نفذنا برنامجاً تدريبياً متكاملاً لشركة رائدة في القطاع المالي، شمل 500 قيادي تنفيذي على مدار 6 أشهر.",
    image: storyImage,
    borderColor: "#3B82F6",
  },
  {
    id: 5,
    category: "المقاولات",
    title: "تنفيذ مجمع تجاري بمساحة 50,000 متر مربع",
    description:
      "أكملنا تصميم وبناء مجمع تجاري حديث في الرياض بأعلى معايير الجودة والاستدامة البيئية.",
    image: storyImage,
    borderColor: "#FF6B00",
  },
];

export default function Stories() {
  const locale = useLocale();
  const swiperRef = useRef<SwiperType | null>(null);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  return (
    <section className="bg-main-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-6 xl:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2 lg:mb-8 px-4">
          {/* Titles */}
          <div className="w-full lg:max-w-120">
            <h4 className="text-primary text-lg font-bold leading-[160%] mb-3">
              {locale === "ar" ? "قصص نجاحنا" : "Our Success Stories"}
            </h4>
            <h2 className="text-main-black font-bold text-base sm:text-xl leading-[160%]">
              {locale === "ar"
                ? "مشاريع حقيقية نفذناها في مجالات متعددة ، من التخطيط وحتى التنفيذ باحترافية عالية."
                : "Real projects we implemented in various fields, from planning to execution with high professionalism."}
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <MainButton
              buttontype="prev"
              onClick={goPrev}
              className="w-12 h-12 md:w-12.5 md:h-12.5"
            />
            <MainButton
              buttontype="next"
              onClick={goNext}
              className="w-12 h-12 md:w-12.5 md:h-12.5"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {STORIES.map((story) => (
              <SwiperSlide key={story.id} className="h-auto py-6 px-2.5">
                <div
                  className="bg-main-white px-4 pt-4 pb-6 rounded-2xl border border-gray-100 border-t-4 h-130 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
                  style={{ borderTopColor: story.borderColor }}
                >
                  {/* Card inner content */}
                  <div>
                    <div className="relative w-full aspect-4/3 overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        width={600}
                        height={189}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 gap-4">
                    <div className="flex justify-start">
                      <span className="bg-bg-tags text-font-body text-sm font-medium px-3 py-1 rounded-full leading-[180%]">
                        {story.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-main-black leading-[160%]">
                      {story.title}
                    </h3>
                    <p className="text-font-body text-base leading-6.5 flex-1 font-normal">
                      {story.description}
                    </p>

                    <Link
                      href={"/"}
                      className="flex items-center gap-2 text-main-black font-medium text-base group w-fit"
                    >
                      <span>
                        {locale === "ar"
                          ? "اقرأ القصة كاملة"
                          : "Read full story"}
                      </span>
                      {locale === "ar" ? (
                        <ArrowLeft
                          size={18}
                          className="transition-transform group-hover:-translate-x-1"
                        />
                      ) : (
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
