"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MainButton from "@/components/common/MainButton";
import { cn } from "@/lib/utils";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";
import Image from "next/image";
import arrowupIcon from "@/assets/arrowupIcon.svg";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const projectsData: Record<string, any[]> = {
  "Be Digital": [
    {
      id: 1,
      title: "مشروع رقمي 1",
      summary: "تفاصيل المشروع الرقمي الأول هنا بوصف مختصر وجذاب.",
      image: slide1,
    },
    {
      id: 2,
      title: "مشروع رقمي 2",
      summary: "تفاصيل المشروع الرقمي الثاني هنا بوصف مختصر وجذاب.",
      image: slide2,
    },
    {
      id: 3,
      title: "مشروع رقمي 3",
      summary: "تفاصيل المشروع الرقمي الثالث هنا بوصف مختصر وجذاب.",
      image: slide3,
    },
    {
      id: 4,
      title: "مشروع رقمي 4",
      summary: "تفاصيل المشروع الرقمي الرابع هنا بوصف مختصر وجذاب.",
      image: slide4,
    },
    {
      id: 17,
      title: "مشروع رقمي 5",
      summary: "تفاصيل المشروع الرقمي الخامس هنا بوصف مختصر وجذاب.",
      image: slide1,
    },
    {
      id: 18,
      title: "مشروع رقمي 6",
      summary: "تفاصيل المشروع الرقمي السادس هنا بوصف مختصر وجذاب.",
      image: slide2,
    },
    {
      id: 19,
      title: "مشروع رقمي 7",
      summary: "تفاصيل المشروع الرقمي السابع هنا بوصف مختصر وجذاب.",
      image: slide3,
    },
    {
      id: 20,
      title: "مشروع رقمي 8",
      summary: "تفاصيل المشروع الرقمي الثامن هنا بوصف مختصر وجذاب.",
      image: slide4,
    },
  ],
  "Be consultation": [
    {
      id: 5,
      title: "استشارة 1",
      summary: "خدماتنا الاستشارية تساعدك على النمو والنجاح المستدام.",
      image: slide1,
    },
    {
      id: 6,
      title: "استشارة 2",
      summary: "خدماتنا الاستشارية تساعدك على النمو والنجاح المستدام.",
      image: slide2,
    },
    {
      id: 7,
      title: "استشارة 3",
      summary: "خدماتنا الاستشارية تساعدك على النمو والنجاح المستدام.",
      image: slide3,
    },
    {
      id: 8,
      title: "استشارة 4",
      summary: "خدماتنا الاستشارية تساعدك على النمو والنجاح المستدام.",
      image: slide4,
    },
    {
      id: 21,
      title: "استشارة 5",
      summary: "خدماتنا الاستشارية تساعدك على النمو والنجاح المستدام.",
      image: slide1,
    },
  ],
  "Be management": [
    {
      id: 9,
      title: "إدارة 1",
      summary: "حلول لإدارة المشاريع بكفاءة واحترافية عالية جداً.",
      image: slide2,
    },
    {
      id: 10,
      title: "إدارة 2",
      summary: "حلول لإدارة المشاريع بكفاءة واحترافية عالية جداً.",
      image: slide3,
    },
    {
      id: 11,
      title: "إدارة 3",
      summary: "حلول لإدارة المشاريع بكفاءة واحترافية عالية جداً.",
      image: slide4,
    },
    {
      id: 12,
      title: "إدارة 4",
      summary: "حلول لإدارة المشاريع بكفاءة واحترافية عالية جداً.",
      image: slide1,
    },
  ],
  "Be Training": [
    {
      id: 13,
      title: "تدريب 1",
      summary: "برامج تدريبية متخصصة لتطوير مهارات فريق عملك.",
      image: slide2,
    },
    {
      id: 14,
      title: "تدريب 2",
      summary: "برامج تدريبية متخصصة لتطوير مهارات فريق عملك.",
      image: slide3,
    },
    {
      id: 15,
      title: "تدريب 3",
      summary: "برامج تدريبية متخصصة لتطوير مهارات فريق عملك.",
      image: slide4,
    },
    {
      id: 16,
      title: "تدريب 4",
      summary: "برامج تدريبية متخصصة لتطوير مهارات فريق عملك.",
      image: slide1,
    },
  ],
};

const categories = [
  "Be Digital",
  "Be consultation",
  "Be management",
  "Be Training",
];

const SMOOTH = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6,
} as const;

const ITEMS_PER_PAGE = 4; // cards per desktop accordion slide

export default function PreviousProjects() {
  // page-local state: which Swiper page is active, and which card within it
  const [activePage, setActivePage] = useState(0);
  const [activeCardInPage, setActiveCardInPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Be Digital");
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const locale = useLocale();

  const projects = projectsData[activeCategory] ?? projectsData["Be Digital"];
  const total = projects.length;

  // Build pages of ITEMS_PER_PAGE for the desktop accordion Swiper
  const pages: (typeof projects)[] = [];
  for (let i = 0; i < total; i += ITEMS_PER_PAGE) {
    pages.push(projects.slice(i, i + ITEMS_PER_PAGE));
  }

  // ── Hover helpers ────────────────────────────────────────────────────────
  // Only expand within the currently-visible page
  const handleHoverStart = (cardIdx: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(
      () => setActiveCardInPage(cardIdx),
      200,
    );
  };
  const handleHoverEnd = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const goNext = () => {
    desktopSwiperRef.current?.slideNext();
    mobileSwiperRef.current?.slideNext();
  };
  const goPrev = () => {
    desktopSwiperRef.current?.slidePrev();
    mobileSwiperRef.current?.slidePrev();
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActivePage(0);
    setActiveCardInPage(0);
    desktopSwiperRef.current?.slideTo(0);
    mobileSwiperRef.current?.slideTo(0);
  };

  return (
    <section className="section-container bg-main-white">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-10 lg:px-4">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h2 className="text-primary font-bold text-base sm:text-lg">
            أعمال سابقة
          </h2>
          <p className="text-main-black font-bold text-base sm:text-xl">
            مشاريع حقيقية نفذناها في مجالات متعددة ، من التخطيط وحتى التنفيذ
            باحترافية عالية.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2.5 w-full md:w-auto">
          <MainButton
            buttontype="prev"
            onClick={goPrev}
            className="flex-1 md:w-12.5 h-12 md:h-12.5"
          />
          <MainButton
            buttontype="next"
            onClick={goNext}
            className="flex-1 md:w-12.5 h-12 md:h-12.5"
          />
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="relative mb-11 md:mb-14">
        <div
          className="flex flex-nowrap md:flex-wrap items-center justify-start gap-3 md:gap-4 p-2 bg-bg-filter rounded-[40px] overflow-x-auto no-scrollbar scroll-smooth"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none !important;
            }
          `,
            }}
          />
          {categories.map((cat, idx) => (
            <button
              suppressHydrationWarning
              key={`${cat}-${idx}`}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "relative rounded-3xl text-sm md:text-base font-bold transition-all duration-300 shrink-0 md:flex-none cursor-pointer whitespace-nowrap px-6 lg:px-0 w-fit lg:w-55 h-11 md:h-12 z-10",
                activeCategory === cat
                  ? "text-primary"
                  : "text-main-black hover:text-primary",
              )}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-3xl shadow-[0px_3px_1px_rgba(0,0,0,0.04),0px_3px_8px_rgba(0,0,0,0.12)] -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP — Accordion Swiper
          Each SwiperSlide = a flex row of up to 4 accordion cards.
          Touch / drag is built-in; buttons navigate via swiperRef.
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <Swiper
          key={`desktop-${activeCategory}`}
          modules={[A11y]}
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          a11y={{ enabled: true }}
          onSwiper={(swiper) => {
            desktopSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            // On every slide change, reset active card to the first card of incoming page
            setActivePage(swiper.realIndex);
            setActiveCardInPage(0);
          }}
          className="w-full"
        >
          {pages.map((page, pageIndex) => (
            <SwiperSlide key={`page-${pageIndex}`}>
              {/* overflow-hidden prevents accordion cards from spilling outside the slide */}
              <div className="flex h-128.5 gap-2.5 w-full items-stretch overflow-hidden">
                {page.map((project, index) => {
                  // A card is expanded only if THIS page is the active page AND this card is selected
                  const isExpanded =
                    pageIndex === activePage && index === activeCardInPage;

                  return (
                    <motion.div
                      key={`${project.id}-${activeCategory}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        flex: isExpanded ? 4 : 1,
                      }}
                      onHoverStart={() => handleHoverStart(index)}
                      onHoverEnd={handleHoverEnd}
                      transition={{
                        flex: SMOOTH,
                        opacity: { duration: 0.4, ease: "easeOut" },
                        layout: SMOOTH,
                      }}
                      className={cn(
                        "relative h-full rounded-3xl overflow-hidden cursor-pointer group min-w-30 xl:min-w-50 2xl:min-w-55",
                        isExpanded ? "z-10" : "z-0",
                      )}
                    >
                      {/* Background Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={2000}
                        height={2000}
                        className={cn(
                          "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                          isExpanded
                            ? "scale-110"
                            : "scale-100 group-hover:scale-105",
                        )}
                      />

                      {/* Overlay */}
                      <div
                        className={cn(
                          "absolute inset-0 transition-opacity duration-700",
                          isExpanded
                            ? "bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-100"
                            : "bg-black/30 group-hover:bg-black/40 opacity-100",
                        )}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 xl:p-10 flex flex-col justify-end">
                        <div className="flex items-end justify-between w-full gap-4">
                          {/* Expanded: title + summary */}
                          <motion.div
                            initial={false}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                              y: isExpanded ? 0 : 12,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: isExpanded ? 0.35 : 0,
                            }}
                            className={cn(
                              "max-w-[85%] min-w-0",
                              !isExpanded && "pointer-events-none",
                            )}
                          >
                            <h3 className="text-main-white text-lg font-bold leading-[160%]">
                              {project.title}
                            </h3>
                            <p className="text-main-white text-base leading-6 line-clamp-2">
                              {project.summary}
                            </p>
                          </motion.div>

                          {/* Expanded: arrow icon */}
                          <motion.div
                            animate={{
                              scale: isExpanded ? 1 : 0,
                              rotate: isExpanded ? 0 : -45,
                              opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.45,
                              ease: [0.34, 1.56, 0.64, 1],
                              delay: isExpanded ? 0.15 : 0,
                            }}
                            className="w-12.5 h-12.5 bg-primary rounded-full flex items-center justify-center shrink-0"
                          >
                            <Link href={'/'} target="_blank">
                              <Image
                                src={arrowupIcon}
                                alt="Open Link"
                                width={20}
                                height={20}
                                className={`${locale === "en" ? "scale-x-[-1]" : ""}`}
                              />
                            </Link>
                          </motion.div>

                          {/* Collapsed: centred title */}
                          <motion.div
                            animate={{
                              opacity: isExpanded ? 0 : 1,
                              y: isExpanded ? 8 : 0,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="absolute bottom-6 xl:bottom-10 inset-x-0 px-3 text-center pointer-events-none"
                          >
                            <h3 className="text-main-white text-lg font-bold line-clamp-1">
                              {project.title}
                            </h3>
                            <p className="text-main-white text-base leading-6 line-clamp-2">
                              {project.summary}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE — Single-card Swiper (1.15 cards visible for peek effect)
          Touch / drag built-in; buttons navigate via mobileSwiperRef.
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden overflow-hidden">
        <Swiper
          key={`mobile-${activeCategory}`}
          modules={[A11y]}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          a11y={{ enabled: true }}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          style={{ padding: "0 8px" }}
        >
          {projects.map((project) => (
            <SwiperSlide key={`${project.id}-mobile`}>
              <div className="relative h-128.5 rounded-3xl overflow-hidden">
                {/* Background */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={2000}
                  height={2000}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-main-white text-lg leading-[160%] font-bold">
                        {project.title}
                      </h3>
                      <p className="text-main-white text-base leading-6 line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                    <Link
                      href={"/"}
                      target="_blank"
                      className="w-12.5 h-12.5 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg"
                    >
                      <Image
                        src={arrowupIcon}
                        alt="Open Link"
                        width={20}
                        height={20}
                        className={`${locale === "en" ? "scale-x-[-1]" : ""}`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
