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
      { ar: "حضوري", en: "On-site" },
      { ar: "عن بعد", en: "Remote" },
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
      { ar: "حضوري", en: "On-site" },
      { ar: "عن بعد", en: "Remote" },
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

type TrainingItem = (typeof TRAINING_DATA)[0];

const ItemContent = ({ 
  item, 
  locale 
}: { 
  item: TrainingItem; 
  locale: "ar" | "en" 
}) => (
  <div
    className={`flex flex-col w-full text-start gap-6 ${item.id === 1 ? "xl:border-t xl:border-[#CCCCCC] xl:pt-20" : ""}`}
  >
    <span className="text-main-black text-base md:text-lg lg:text-xl font-medium">
      {item.category[locale]}
    </span>

    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag, i) => (
        <span
          key={i}
          className="bg-[#FFEFE6] text-primary text-base font-normal leading-[180%] py-2 px-3 w-21 rounded-sm border border-[#FFE8DB]"
        >
          {tag[locale]}
        </span>
      ))}
    </div>

    <h3 className="text-main-black text-2xl lg:text-[32px] font-medium">
      {item.title[locale]}
    </h3>

    {/* Paragraph and Button: Always P-tag first (start), Button second (end) */}
    <div className="flex items-end justify-between gap-6 lg:gap-14 flex-row">
      <p className="text-font-body text-base lg:text-xl leading-6.5 flex-1">
        {item.description[locale]}
      </p>

      <div className="shrink-0">
        <Link
          href={`/training/${item.id}`}
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
  locale 
}: { 
  item: TrainingItem; 
  locale: "ar" | "en" 
}) => (
  <div className="relative aspect-square w-full max-w-170 rounded-xl overflow-hidden">
    <Image 
      src={item.image} 
      alt={item.title[locale]} 
      fill 
      className="object-cover"
    />
  </div>
);


export default function News() {
  const locale = useLocale() as "ar" | "en";
  const isRtl = locale === "ar";

  return (
    <section
      className="bg-main-white section-container overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Desktop Staggered Grid */}
      <div className="hidden md:grid grid-cols-2 gap-x-20 lg:gap-x-32">
        {/* Right Column (Start Column in RTL) */}
        <div className="flex flex-col gap-20">
          {/* Header */}
          <div className="flex flex-col items-start text-start">
            <h2 className="text-primary text-[24px] font-bold leading-[160%] mb-2">
              {locale === "ar"
                ? "أحدث خدماتنا التدريبية"
                : "Latest Training Services"}
            </h2>
            <p className="text-lg lg:text-xl leading-[160%] text-main-black">
              {locale === "ar"
                ? "نقدم برامج تدريبية متكاملة مصممة خصيصاً لسد الفجوات المهارية ورفع كفاءة الأداء في مختلف المستويات الإدارية والمهنية."
                : "We provide integrated training programs specifically designed to bridge skill gaps and increase performance efficiency at various managerial and professional levels."}
            </p>
          </div>

          {/* Item 1 Image (Right Side) */}
          <ItemImage item={TRAINING_DATA[0]} locale={locale} />

          {/* Item 2 Content (Right Side) */}
          <ItemContent item={TRAINING_DATA[1]} locale={locale} />
        </div>

        {/* Left Column (End Column in RTL) */}
        <div className="flex flex-col gap-16 md:mt-48">
          {/* Item 1 Content (Left Side) */}
          <ItemContent item={TRAINING_DATA[0]} locale={locale} />

          {/* Item 2 Image (Left Side) */}
          <ItemImage item={TRAINING_DATA[1]} locale={locale} />
        </div>
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-start text-start mb-4">
          <h2 className="text-primary text-xl font-bold mb-3">
            {locale === "ar"
              ? "أحدث خدماتنا التدريبية"
              : "Latest Training Services"}
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
            <ItemImage item={item} locale={locale} />
            <ItemContent item={item} locale={locale} />
          </div>
        ))}
      </div>
    </section>
  );
}