"use client";

import { BookOpenText } from "lucide-react";

export default function OurStory() {
  const cards = [
    {
      title: "حلول متكاملة",
      description:
        "نقدم خدمات مترابطة تغطي احتياجات الأعمال من التخطيط وحتى التنفيذ.",
    },
    {
      title: "خبرة متعددة القطاعات",
      description: "فرق متخصصة بخبرة عملية في مجالات مختلفة تدعم قرارات أفضل",
    },
    {
      title: "نتائج يمكن الاعتماد عليها",
      description: "نركز على حلول قابلة للتنفيذ وتحقيق نتائج ملموسة لعملائنا.",
    },
  ];

  return (
    <section className="bg-main-white overflow-hidden">
      <div className="section-container flex flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="w-full lg:w-[45%] flex flex-col gap-4 text-start">
            <span className="text-primary font-bold text-2xl leading-[180%]">
              قصتنا
            </span>
            <h2 className="text-main-black text-3xl lg:text-[32px] font-bold leading-[180%] w-full lg:max-w-85">
              رحلة من الطموح إلى الإنجاز، نبنيها معاً بالثقة والاحترافية
            </h2>
          </div>
          <div className="w-full lg:w-[50%] flex lg:justify-end text-start">
            <p className="text-main-black text-base md:text-lg lg:text-xl leading-8 font-noraml">
              Be Group مجموعة أعمال تقدّم خدمات متكاملة في مجالات متعددة تشمل
              التدريب، الاستشارات الإدارية، المقاولات، تنظيم الفعاليات، والحلول
              الرقمية، بخبرة عملية وجودة تنفيذ تصنع قيمة حقيقية لعملائنا.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-main-white border border-[#ECECEC] shadow-[0px_2px_16px_2px_rgba(0,0,0,0.06)] rounded-lg py-10 px-6 flex flex-col text-start"
            >
              <div className="w-full flex justify-start mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-main-white shrink-0">
                  <BookOpenText size={24} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-base font-bold text-main-black mb-2 leading-6">
                {card.title}
              </h3>
              <p className="text-font-body text-base md:text-lg leading-[160%] [text-shadow:0_0_1px_currentColor]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
