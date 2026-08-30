"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/lib/utils";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Navigation } from "swiper/modules";
import listImg from "@/assets/Subtract.svg";
import {
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  LayoutGrid,
  Lightbulb,
  Settings,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import MainButton from "@/components/common/MainButton";
import ScrollReveal from "@/components/ScrollReveal";

interface Project {
  id: number;
  title: string;
  summary: string;
  image: StaticImageData;
}

interface CategoryDetail {
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  servicesAr: string[];
  servicesEn: string[];
  icon: LucideIcon;
}

const projectsData: Record<string, Project[]> = {
  "Be Digital": [
    {
      id: 1,
      title: " استشارات تدريبية في التطوير المهني والتعليمي للمؤسسات",
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
      title: " استشارات تدريبية في التطوير المهني والتعليمي للمؤسسات",
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

const categoryDetails: Record<string, CategoryDetail> = {
  "Be Digital": {
    titleAr: "قطاع التحول الرقمي",
    titleEn: "Digital Transformation",
    subtitleAr: "حلول تقنية متطورة",
    subtitleEn: "Advanced Technical Solutions",
    descriptionAr:
      "نقدم حلولاً رقمية متكاملة تساعد المنشآت على التحول الرقمي الكامل، من خلال تطبيقات الذكاء الاصطناعي، وتحليل البيانات، وتطوير الأنظمة البرمجية المخصصة التي تضمن كفاءة الأداء وتحقيق الأهداف الاستراتيجية.",
    descriptionEn:
      "We provide integrated digital solutions that help organizations achieve full digital transformation through AI applications, data analysis, and custom software development.",
    servicesAr: [
      "حلول الذكاء الاصطناعي",
      "تطوير الأنظمة والمنصات",
      "تحليل البيانات الضخمة",
      "الأمن السيبراني",
      "البنية التحتية السحابية",
      "التحول الرقمي الشامل",
    ],
    servicesEn: [
      "AI Solutions",
      "Systems & Platforms Development",
      "Big Data Analysis",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Comprehensive Digital Transformation",
    ],
    icon: LayoutGrid,
  },
  "Be consultation": {
    titleAr: "قطاع الاستشارات",
    titleEn: "Consultation Sector",
    subtitleAr: "استشارات استراتيجية متخصصة",
    subtitleEn: "Specialized Strategic Consulting",
    descriptionAr:
      "نعمل كشركاء نجاح لعملائنا عبر تقديم استشارات استراتيجية وإدارية مبنية على منهجيات عالمية وخبرات محلية عميقة، لتمكين الجهات من مواجهة التحديات واقتناص الفرص وتحقيق نمو مستدام.",
    descriptionEn:
      "We work as success partners for our clients by providing strategic and management consulting based on global methodologies and deep local expertise.",
    servicesAr: [
      "الاستشارات الاستراتيجية",
      "إعادة الهيكلة التنظيمية",
      "تطوير السياسات والإجراءات",
      "دراسات الجدوى الاقتصادية",
      "إدارة التغيير المؤسسي",
      "تطوير مؤشرات الأداء",
    ],
    servicesEn: [
      "Strategic Consulting",
      "Organizational Restructuring",
      "Policy & Procedure Development",
      "Feasibility Studies",
      "Change Management",
      "KPI Development",
    ],
    icon: Lightbulb,
  },
  "Be management": {
    titleAr: "قطاع الإدارة",
    titleEn: "Management Sector",
    subtitleAr: "إدارة تشغيلية باحترافية",
    subtitleEn: "Professional Operational Management",
    descriptionAr:
      "نقدم خدمات إدارة المشاريع والعمليات التشغيلية بأعلى معايير الجودة والكفاءة، نضمن تنفيذ المشاريع وفق الخطط الزمنية والميزانيات المعتمدة مع التركيز على تحسين تجربة العميل وتحقيق التميز المؤسسي.",
    descriptionEn:
      "We provide project management and operational services with the highest standards of quality and efficiency, ensuring project execution according to plans.",
    servicesAr: [
      "مكاتب إدارة المشاريع PMO",
      "إدارة العمليات التشغيلية",
      "حوكمة الشركات والمنشآت",
      "إدارة المخاطر والالتزام",
      "تحسين سلاسل الإمداد",
      "إدارة المرافق والخدمات",
    ],
    servicesEn: [
      "PMO Setup & Management",
      "Operational Management",
      "Corporate Governance",
      "Risk & Compliance",
      "Supply Chain Optimization",
      "Facility Management",
    ],
    icon: Settings,
  },
  "Be Training": {
    titleAr: "قطاع التدريب",
    titleEn: "Training Sector",
    subtitleAr: "برامج تدريبية احترافية",
    subtitleEn: "Professional Training Programs",
    descriptionAr:
      "نقدم برامج تدريبية متكاملة ومعتمدة تهدف إلى تطوير الكفاءات وبناء المهارات اللازمة لسوق العمل. نعمل مع أفضل المدربين والخبراء لتقديم تجربة تدريبية متميزة تجمع بين النظرية والتطبيق العملي.",
    descriptionEn:
      "We provide integrated and certified training programs aimed at developing competencies and building the skills necessary for the labor market. We work with the best trainers.",
    servicesAr: [
      "البرامج التنفيذية",
      "الدورات التدريبية",
      "برامج اللغات",
      "استشارات التدريب",
      "الشهادات الاحترافية",
      "التمكين الشخصي والكوتشنج",
    ],
    servicesEn: [
      "Executive Programs",
      "Training Courses",
      "Language Programs",
      "Training Consulting",
      "Professional Certifications",
      "Personal Empowerment & Coaching",
    ],
    icon: GraduationCap,
  },
};

export default function SectorInfo() {
  // page-local state: which Swiper page is active, and which card within it
  const [activeCategory, setActiveCategory] = useState("Be Digital");
  const desktopSwiperRef = useRef<SwiperType | null>(null);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const locale = useLocale();

  const projects = projectsData[activeCategory] ?? projectsData["Be Digital"];
  const details =
    categoryDetails[activeCategory] || categoryDetails["Be Digital"];
  const services = locale === "ar" ? details.servicesAr : details.servicesEn;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    desktopSwiperRef.current?.slideTo(0);
    mobileSwiperRef.current?.slideTo(0);
  };

  return (
    <section
      className="bg-main-white py-20 section-container"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2 px-4">
        <div className="w-full lg:max-w-2/3">
          <h4 className="text-primary text-lg font-bold leading-[160%] mb-3">
            {locale === "ar" ? " قطاعتنا" : "Our sectors"}
          </h4>
          <h2 className="text-main-black font-bold text-base sm:text-xl leading-[160%]">
            {locale === "ar"
              ? "مجموعة متكاملة مدرجة تقود تطوير الأداء المؤسسي عبر حلول متكاملة في الاستشارات وبناء القدرات والتقنيات المدعومة بالذكاء الاصطناعي، لتمكين الجهات والأفراد من تحقيق أثر مستدام."
              : "An integrated, listed group leading the development of institutional performance through comprehensive solutions in consulting, capacity building, and AI-powered technologies—empowering organizations and individuals to achieve sustainable impact."}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="relative mt-6 mb-10">
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
                  className="absolute inset-0 bg-main-white rounded-3xl h-full leading-[100%] shadow-[0px_3px_1px_rgba(0,0,0,0.04),0px_3px_8px_rgba(0,0,0,0.12)] -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal stagger={0.1} delay={0.1} className="block md:flex gap-16 items-start min-h-145">
        <div className="w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Sector Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
                      {details.icon && (
                        <details.icon size={32} strokeWidth={1.5} />
                      )}
                    </div>
                    <div className="">
                      <h3 className="text-2xl md:text-3xl font-bold text-main-black mb-1">
                        {locale === "ar" ? details.titleAr : details.titleEn}
                      </h3>
                      <span className="text-primary font-bold text-lg">
                        {locale === "ar"
                          ? details.subtitleAr
                          : details.subtitleEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-main-black text-sm lg:text-lg leading-relaxed mb-5 w-full md:max-w-xl font-bold">
                {locale === "ar"
                  ? details.descriptionAr
                  : details.descriptionEn}
              </p>

              {/* Services List */}
              <div className="mb-2 md:mb-5">
                <h4 className="text-main-black font-bold text-xl mb-6 flex items-center gap-2">
                  {locale === "ar"
                    ? `خدماتنا في ${details.titleAr.split(" ").slice(-1)}:`
                    : `Our ${details.titleEn} Services:`}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-3 md:gap-x-8">
                  {services.map((service: string, idx: number) => (
                    <div key={idx} className="flex  items-center gap-1 md:gap-3">
                      <Image src={listImg} alt="logo" width={14} height={16} />
                      <span className="text-main-black/80 font-medium text-sm md:text-base">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/sectors/${projects?.[0]?.id || ""}`}
                className="w-full justify-center lg:justify-start lg:w-fit my-5 lg:my-0"
              >
                <MainButton
                  buttontype="black"
                  iconEnd={locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
                  className="bg-main-black w-full lg:w-auto"
                >
                  {locale === "ar" ? "أعرف المزيد" : "Learn More"}
                </MainButton>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Left Column: Swiper with Navigation */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 overflow-hidden">
          <div className="relative w-full h-125">
            <Swiper
              modules={[Navigation, A11y]}
              grabCursor
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              onSwiper={(swiper) => {
                desktopSwiperRef.current = swiper;
              }}
              className="w-full h-full rounded-3xl overflow-visible!"
            >
              {projects.map((project) => (
                <SwiperSlide
                  key={`${project.id}-desktop-swiper`}
                  className="flex items-center "
                >
                  {({ isActive }) => (
                    <Link href={`/sectors/${project.id}`}>
                      <div className="flex flex-col h-full w-full">
                        <div
                          className={cn(
                            "relative w-full rounded-3xl overflow-hidden group transition-all duration-500 ease-in-out",
                            isActive
                              ? "h-full shadow-lg"
                              : "h-[50%] opacity-70",
                          )}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div
                          className={cn(
                            "mt-4 transition-all duration-500 text-start",
                            isActive
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 pointer-events-none -translate-y-10",
                          )}
                        >
                          <p className="font-bold text-lg text-main-black leading-tight">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Arrows */}
          <div className="hidden md:flex items-center justify-end gap-2.5 w-full">
            <MainButton
              buttontype="prev"
              onClick={() => desktopSwiperRef.current?.slidePrev()}
              className="w-12.5 h-12.5"
            />
            <MainButton
              buttontype="next"
              onClick={() => desktopSwiperRef.current?.slideNext()}
              className="w-12.5 h-12.5"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
