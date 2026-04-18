"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import arrowIcon from "@/assets/arrowupIcon.svg";

const TRAINING_DATA = [
  {
    id: 1,
    image: image2,
    category: { ar: "برنامج تدريبي", en: "Training Program" },
    tags: [
      { ar: "عن بعد", en: "Remote" },
      { ar: "حضوري", en: "On-site" },
    ],
    title: { 
      ar: "تنمية مهارات فريق العمل (TVTC)", 
      en: "Team Skills Development (TVTC)" 
    },
    description: { 
      ar: "تركز هذه الدورة على تعزيز كفاءة فرق العمل من خلال تطوير مهارات التعاون، التواصل، حل المشكلات، وإدارة النزاعات. تهدف الدورة إلى بناء فرق عمل متماسكة وفعالة تستطيع تحقيق أهداف المؤسسة بكفاءة أعلى.",
      en: "This course focuses on enhancing the efficiency of work teams through developing skills in cooperation, communication, problem solving, and conflict management. The course aims to build cohesive and effective work teams that can achieve the organization's goals more efficiently."
    },
  },
  {
    id: 2,
    image: image1,
    category: { ar: "برنامج تدريبي", en: "Training Program" },
    tags: [
      { ar: "عن بعد", en: "Remote" },
      { ar: "حضوري", en: "On-site" },
    ],
    title: { 
      ar: "تنمية مهارات فريق العمل (TVTC)", 
      en: "Team Skills Development (TVTC)" 
    },
    description: { 
      ar: "تركز هذه الدورة على تعزيز كفاءة فرق العمل من خلال تطوير مهارات التعاون، التواصل، حل المشكلات، وإدارة النزاعات. تهدف الدورة إلى بناء فرق عمل متماسكة وفعالة تستطيع تحقيق أهداف المؤسسة بكفاءة أعلى.",
      en: "This course focuses on enhancing the efficiency of work teams through developing skills in cooperation, communication, problem solving, and conflict management. The course aims to build cohesive and effective work teams that can achieve the organization's goals more efficiently."
    },
  },
];

export default function News() {
  const locale = useLocale() as "ar" | "en";
  const isRtl = locale === "ar";

  const ItemContent = ({ item }: { item: typeof TRAINING_DATA[0] }) => (
    <div className="flex flex-col w-full text-start">
      <span className="text-main-black text-sm md:text-base lg:text-lg font-bold mb-3">
        {item.category[locale]}
      </span>
      
      <div className="flex flex-wrap gap-2.5 mb-6">
        {item.tags.map((tag, i) => (
          <span 
            key={i}
            className="bg-[#FFF8F4] text-primary text-xs md:text-sm lg:text-base font-medium px-4 py-1.5 rounded-full border border-primary/10"
          >
            {tag[locale]}
          </span>
        ))}
      </div>

      <h3 className="text-main-black text-2xl md:text-3xl lg:text-[40px] font-bold leading-[130%] mb-6">
        {item.title[locale]}
      </h3>

      {/* Paragraph and Button: Always P-tag first (start), Button second (end) */}
      <div className="flex items-end justify-between gap-6 lg:gap-14 flex-row">
        <p className="text-font-body text-base lg:text-lg lg:text-xl leading-[160%] flex-1">
          {item.description[locale]}
        </p>

        <div className="shrink-0 mb-1">
          <Link 
            href={`/training/${item.id}`}
            className="w-16 h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 bg-[#1A1A1A] rounded-2xl md:rounded-[24px] flex items-center justify-center transition-all duration-300"
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

  const ItemImage = ({ item }: { item: typeof TRAINING_DATA[0] }) => (
    <div className="relative aspect-square w-full max-w-[600px] rounded-[12px] overflow-hidden">
      <Image 
        src={item.image} 
        alt={item.title[locale]} 
        fill 
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="bg-main-white section-container overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      {/* Desktop Staggered Grid */}
      <div className="hidden md:grid grid-cols-2 gap-x-20 lg:gap-x-32">
        {/* Right Column (Start Column in RTL) */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* Header */}
          <div className="flex flex-col items-start text-start">
            <h2 className="text-primary text-xl md:text-2xl lg:text-[32px] font-bold mb-4">
              {locale === "ar" ? "أحدث خدماتنا التدريبية" : "Latest Training Services"}
            </h2>
            <p className="text-font-body text-base md:text-lg lg:text-xl leading-relaxed">
              {locale === "ar" 
                ? "نقدم برامج تدريبية متكاملة مصممة خصيصاً لسد الفجوات المهارية ورفع كفاءة الأداء في مختلف المستويات الإدارية والمهنية."
                : "We provide integrated training programs specifically designed to bridge skill gaps and increase performance efficiency at various managerial and professional levels."}
            </p>
          </div>

          {/* Item 1 Image (Right Side) */}
          <ItemImage item={TRAINING_DATA[0]} />

          {/* Item 2 Content (Right Side) */}
          <ItemContent item={TRAINING_DATA[1]} />
        </div>

        {/* Left Column (End Column in RTL) */}
        <div className="flex flex-col gap-24 lg:gap-32 md:mt-48 lg:mt-64">
          {/* Item 1 Content (Left Side) */}
          <ItemContent item={TRAINING_DATA[0]} />

          {/* Item 2 Image (Left Side) */}
          <ItemImage item={TRAINING_DATA[1]} />
        </div>
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-start text-start mb-4">
          <h2 className="text-primary text-xl font-bold mb-3">
            {locale === "ar" ? "أحدث خدماتنا التدريبية" : "Latest Training Services"}
          </h2>
          <p className="text-font-body text-base leading-relaxed">
            {locale === "ar" 
              ? "نقدم برامج تدريبية متكاملة مصممة خصيصاً لسد الفجوات المهارية ورفع كفاءة الأداء في مختلف المستويات الإدارية والمهنية."
              : "We provide integrated training programs specifically designed to bridge skill gaps and increase performance efficiency at various managerial and professional levels."}
          </p>
        </div>

        {/* Mobile Items */}
        {TRAINING_DATA.map((item) => (
          <div key={item.id} className="flex flex-col gap-8">
            <ItemImage item={item} />
            <ItemContent item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}