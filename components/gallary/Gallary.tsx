"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import arrowIcon from "@/assets/arrowupIcon.svg";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";

const categories = [
  "Be consultation",
  "Be management",
  "Be Training",
  "Be Digital",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GALLERY_DATA: Record<string, any[]> = {
  "Be Digital": [
    {
      id: 1,
      image: slide1,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "BRANDING SYSTEM", en: "BRANDING SYSTEM" },
      description: {
        ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
        en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
      },
    },
    {
      id: 2,
      image: slide2,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
      description: {
        ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
        en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
      },
    },
    {
      id: 3,
      image: slide3,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "BRANDING SYSTEM", en: "BRANDING SYSTEM" },
      description: {
        ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
        en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
      },
    },
    {
      id: 4,
      image: slide4,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
      description: {
        ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
        en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
      },
    },
    {
      id: 17,
      image: slide1,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "BRANDING SYSTEM", en: "BRANDING SYSTEM" },
      description: {
        ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
        en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
      },
    },
    {
      id: 18,
      image: slide2,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
      description: {
        ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
        en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
      },
    },
  ],
  "Be consultation": [
    {
      id: 5,
      image: slide1,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "CONSULTATION SERVICES", en: "CONSULTATION SERVICES" },
      description: {
        ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
        en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
      },
    },
    {
      id: 6,
      image: slide2,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "STRATEGIC PLANNING", en: "STRATEGIC PLANNING" },
      description: {
        ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
        en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
      },
    },
    {
        id: 7,
        image: slide3,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "BRANDING SYSTEM", en: "BRANDING SYSTEM" },
        description: {
          ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
          en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
        },
      },
      {
        id: 8,
        image: slide4,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
        description: {
          ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
          en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
        },
      },
      {
        id: 19,
        image: slide1,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "CONSULTATION SERVICES", en: "CONSULTATION SERVICES" },
        description: {
          ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
          en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
        },
      },
      {
        id: 20,
        image: slide2,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "STRATEGIC PLANNING", en: "STRATEGIC PLANNING" },
        description: {
          ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
          en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
        },
      },
  ],
  "Be management": [
    {
      id: 9,
      image: slide1,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "MANAGEMENT SYSTEM", en: "MANAGEMENT SYSTEM" },
      description: {
        ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
        en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
      },
    },
    {
        id: 10,
        image: slide2,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
        description: {
          ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
          en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
        },
      },
      {
        id: 11,
        image: slide3,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "BRANDING SYSTEM", en: "BRANDING SYSTEM" },
        description: {
          ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
          en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
        },
      },
      {
        id: 12,
        image: slide4,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
        description: {
          ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
          en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
        },
      },
      {
        id: 21,
        image: slide1,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "MANAGEMENT SYSTEM", en: "MANAGEMENT SYSTEM" },
        description: {
          ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
          en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
        },
      },
      {
          id: 22,
          image: slide2,
          category: { ar: "تصنيف المشروع", en: "Project Classification" },
          title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
          description: {
            ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
            en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
          },
        },
  ],
  "Be Training": [
    {
      id: 13,
      image: slide3,
      category: { ar: "تصنيف المشروع", en: "Project Classification" },
      title: { ar: "TRAINING ACADEMY", en: "TRAINING ACADEMY" },
      description: {
        ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
        en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
      },
    },
    {
        id: 14,
        image: slide4,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
        description: {
          ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
          en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
        },
      },
      {
        id: 15,
        image: slide1,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "BRANDING SYSTEM", en: "BRANDING SYSTEM" },
        description: {
          ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
          en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
        },
      },
      {
        id: 16,
        image: slide2,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
        description: {
          ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
          en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
        },
      },
      {
        id: 23,
        image: slide3,
        category: { ar: "تصنيف المشروع", en: "Project Classification" },
        title: { ar: "TRAINING ACADEMY", en: "TRAINING ACADEMY" },
        description: {
          ar: "هوية جريئة مصممة لتعكس الوضوح والثقة والتأثير – مصممة لجعل علامتك التجارية مميزة.",
          en: "A bold identity designed to reflect clarity, confidence and impact – designed to make your brand stand out.",
        },
      },
      {
          id: 24,
          image: slide4,
          category: { ar: "تصنيف المشروع", en: "Project Classification" },
          title: { ar: "SLEEK COMMERCE", en: "SLEEK COMMERCE" },
          description: {
            ar: "تجديد سريع وأنيق للتجارة الإلكترونية مصمم لتحسين تدفق التسوق وزيادة المبيعات.",
            en: "A fast and elegant e-commerce revamp designed to improve shopping flow and increase sales.",
          },
        },
  ],
};

const ItemContent = ({
  item,
  locale,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  locale: "ar" | "en";
}) => (
  <div
    className={`flex flex-col w-full text-start gap-4 lg:gap-6 ${item.id === 1 ? "" : ""}`}
  >
    <span className="text-primary text-base lg:text-xl font-medium">
      {item.category[locale]}
    </span>

    <h3 className="text-main-black text-xl lg:text-[32px] font-bold leading-tight uppercase">
      {item.title[locale]}
    </h3>

    <div className="flex items-start justify-between gap-4 lg:gap-10">
      <p className="text-font-body text-base lg:text-xl leading-relaxed flex-1">
        {item.description[locale]}
      </p>

      <div className="shrink-0 pt-1">
        <Link
          href={`/projects/${item.id}`}
          className="w-26 h-13.5 bg-main-black rounded-xl flex items-center justify-center transition-all duration-300"
        >
          <Image
            src={arrowIcon}
            alt="Arrow"
            width={28}
            height={28}
            className={`transition-transform duration-300 ${locale === "en" ? "scale-x-[-1]" : ""}`}
          />
        </Link>
      </div>
    </div>
  </div>
);

const ItemImage = ({
  item,
  locale,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  locale: "ar" | "en";
}) => (
  <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-sm 2xl:min-h-160">
    <Image
      src={item.image}
      alt={item.title[locale]}
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
);

export default function Gallary() {
  const [activeCategory, setActiveCategory] = useState("Be consultation");
  const locale = useLocale() as "ar" | "en";
  const isRtl = locale === "ar";

  const currentData = GALLERY_DATA[activeCategory] || GALLERY_DATA["Be Digital"];

  return (
    <section 
      className="bg-main-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto pt-14 px-4 sm:px-6 xl:px-12">
        
        {/* ── Filter Tabs (from PreviousProjects) ── */}
        <div className="relative mb-14">
          <div
            className="flex flex-nowrap md:flex-wrap items-center justify-start gap-3 md:gap-4 p-2 bg-bg-filter rounded-[40px] overflow-x-auto no-scrollbar scroll-smooth"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
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
                key={`${cat}-${idx}`}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative rounded-3xl text-sm md:text-base font-bold transition-all duration-300 shrink-0 md:flex-none cursor-pointer whitespace-nowrap px-6 lg:px-0 w-fit lg:w-55 h-11 md:h-12 z-10",
                  activeCategory === cat
                    ? "text-primary"
                    : "text-main-black hover:text-primary",
                )}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTabGallary"
                    className="absolute inset-0 bg-main-white rounded-3xl h-full leading-[100%] shadow-[0px_3px_1px_rgba(0,0,0,0.04),0px_3px_8px_rgba(0,0,0,0.12)] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Staggered Grid (from News) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:grid grid-cols-2 gap-x-20 lg:gap-x-32"
          >
            {/* Right Column (Start Column in RTL) */}
            <div className="flex flex-col gap-12">
              {currentData.map((item, index) => (
                index % 2 === 0 ? (
                  <ItemImage key={`img-r-${item.id}`} item={item} locale={locale} />
                ) : (
                  <ItemContent key={`content-r-${item.id}`} item={item} locale={locale} />
                )
              ))}
            </div>

            {/* Left Column (End Column in RTL) */}
            <div className="flex flex-col gap-12  md:mt-16">
              {currentData.map((item, index) => (
                index % 2 === 0 ? (
                  <ItemContent key={`content-l-${item.id}`} item={item} locale={locale} />
                ) : (
                  <ItemImage key={`img-l-${item.id}`} item={item} locale={locale} />
                )
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Stack Layout */}
        <div className="md:hidden flex flex-col gap-16">
          {currentData.map((item) => (
            <div key={item.id} className="flex flex-col gap-8">
              <ItemImage item={item} locale={locale} />
              <ItemContent item={item} locale={locale} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
