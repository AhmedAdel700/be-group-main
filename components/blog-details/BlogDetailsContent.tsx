"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Clock, Calendar } from "lucide-react";
import blogImage from "@/assets/blog-details-banner.jpg";
import ScrollReveal from "@/components/ScrollReveal";

type Locale = "ar" | "en";

interface ContentSection {
  heading?: Record<Locale, string>;
  paragraphs?: Record<Locale, string>[];
  listItems?: Record<Locale, string>[];
}

const CONTENT_DATA = {
  image: blogImage,
  title: {
    ar: "",
    en: "",
  },
  readTime: "10 min read",
  date: "12 sep 2021",
  sections: [
    {
      heading: {
        ar: "الأهداف المتوقع تحقيقها من دبلوم تقنيات المحاسبة الحديثة",
        en: "Expected Goals from the Modern Accounting Technologies Diploma",
      },
      paragraphs: [
        {
          ar: "إذا كنت تبحث عن أفضل دورات المحاسبة الحديثة، فإن دبلوم تقنيات المحاسبة الحديثة يسعى إلى تحقيق مجموعة من الأهداف الاستراتيجية، منها:",
          en: "If you are looking for the best modern accounting courses, the Modern Accounting Technologies Diploma aims to achieve a set of strategic objectives, including:",
        },
      ],
      listItems: [
        { ar: "التعرف على أحدث تقنيات المحاسبة الرقمية والذكاء الاصطناعي في المجال.", en: "Learning the latest digital accounting and AI technologies in the field." },
        { ar: "الإلمام الشامل بالأنظمة المحاسبية المعمول بها في المملكة العربية السعودية.", en: "Comprehensive understanding of accounting systems in Saudi Arabia." },
        { ar: "الالتزام الصارم بالمعايير الأخلاقية للمهنة المحاسبية.", en: "Strict adherence to the ethical standards of the accounting profession." },
        { ar: "ضمان أعلى مستويات الدقة والموثوقية في الأداء المحاسبي.", en: "Ensuring the highest levels of accuracy and reliability in accounting performance." },
        { ar: "تنفيذ العمليات المحاسبية بكفاءة باستخدام أحدث التطبيقات التقنية.", en: "Executing accounting operations efficiently using the latest technical applications." },
        { ar: "إعداد التقارير المالية الإلكترونية بمعايير إجراء عالية.", en: "Preparing electronic financial reports to high procedural standards." },
        { ar: "تحليل البيانات المالية باستخدام أدوات تحليل ذكية.", en: "Analyzing financial data using smart analytical tools." },
        { ar: "إدارة الأنظمة المحاسبية الإلكترونية المتكاملة.", en: "Managing integrated electronic accounting systems." },
        { ar: "تطبيق المعايير الدولية للمبادئ المحاسبية والمعايير الدولية.", en: "Applying international accounting principles and standards." },
        { ar: "إتقان التعامل مع الشركيات المحاسبية المتطورة.", en: "Mastering advanced accounting partnerships." },
      ],
    } as ContentSection,
    {
      heading: {
        ar: "مزايا دبلوم تقنيات المحاسبة الحديثة",
        en: "Advantages of the Modern Accounting Technologies Diploma",
      },
      paragraphs: [
        {
          ar: "يتيح هذا الدبلوم عدة مميزات تنافسية أبرزها:",
          en: "This diploma offers several competitive advantages, most notably:",
        },
      ],
      listItems: [
        { ar: "الاطلاع على أحدث التوجهات والممارسات في مجال تقنيات المحاسبة.", en: "Access to the latest trends and practices in accounting technologies." },
        { ar: "تطبيق رؤية عملية صممت بشكل مخصص لتنمية المهارات والإنجازات في المجال.", en: "Applying a practical vision specifically designed to develop skills and achievements." },
        { ar: "تأهيل الخريجين للحصول على شهادة معتمدة من صندوق تنمية الموارد البشرية (هدف).", en: "Qualifying graduates to obtain a certificate accredited by HRDF (Hadaf)." },
        { ar: "توافق المناهج مع التصنيف السعودي للمؤهلات والمهارات.", en: "Curriculum alignment with the Saudi Classification of Qualifications and Skills." },
        { ar: "وجود نخبة من أعضاء هيئة التدريس ذوي الخبرة العملية والأكاديمية المتميزة.", en: "An elite faculty with distinguished practical and academic experience." },
        { ar: "إتاحة الفرصة للحصول على مزية إضافية متميزة في تقنيات المحاسبة.", en: "Providing the opportunity to gain a distinctive additional advantage in accounting technologies." },
      ],
    } as ContentSection,
  ],
};

export default function BlogDetailsContent() {
  const locale = useLocale() as Locale;
  const { image, title, readTime, date, sections } = CONTENT_DATA;

  return (
    <div className="flex flex-col gap-6 w-full">
      <ScrollReveal>
        <div className="relative w-full h-[317px] rounded-[8px] border border-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={title[locale]}
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex items-center gap-6 text-sm text-[#666666]">
          <div className="flex items-center gap-1.5">
            <Calendar size={22} className="text-[#D26A30] font-extrabold text-base" />
            <span className="text-[#D26A30] font-bold text-base" dir="ltr">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={22} className="text-[#D26A30] font-extrabold text-base" />
            <span className="text-[#D26A30] font-bold text-base" dir="ltr">
              {readTime}
            </span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
      <article
        className="flex flex-col gap-8 w-full"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
            {section.heading && (
              <h2 className="text-[#141212] text-xl md:text-2xl font-semibold leading-[180%] tracking-normal text-start mb-4">
  {section.heading[locale]}
</h2>
            )}

            {section.paragraphs?.map((para, pIdx) => (
              <p
  key={pIdx}
  className="text-[#4D4D4D] text-lg font-normal leading-[34px] tracking-normal text-start"
>
  {para[locale]}
</p>
            ))}

            {section.listItems && section.listItems.length > 0 && (
              <ul className="flex flex-col mt-1 list-disc pr-5 text-[#4D4D4D] text-lg font-normal leading-[34px] tracking-normal text-start">
                {section.listItems.map((item, lIdx) => (
                    <li key={lIdx}>
                    {item[locale]}
                    </li>
                ))}
                </ul>
            )}
          </div>
        ))}
      </article>
      </ScrollReveal>
    </div>
  );
}