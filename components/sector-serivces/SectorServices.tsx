'use client';

import { BookOpen, Users, CircleCheckBig } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  traineesCount: string;
  items: string[];
}

const ServiceCard = ({ title, description, traineesCount, items }: ServiceCardProps) => {
  return (
    <div
      className="bg-main-white border-[0.8px] border-bg-tags rounded-[25px] px-4 py-10 flex flex-col h-full transition-all duration-300 hover:border-primary/20"
      style={{
        boxShadow:
          "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Top Row: Title, Description and Icon */}
      <div className="flex justify-start items-start mb-6 gap-4">
        <div className="w-16 h-16 bg-[#F9D2BD] rounded-lg flex items-center justify-center shrink-0">
          <BookOpen className="text-primary" size={28} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-bold text-main-black leading-8">
            {title}
          </h3>
          <p className="text-main-black text-sm leading-[22.75px] font-normal max-w-[90%]">
            {description}
          </p>
        </div>
      </div>

      {/* Trainees Count */}
      <div className="flex items-center gap-2 mb-6 text-primary ms-4">
        <Users size={18} />
        <span className="text-sm text-font-body font-medium">
          {traineesCount}
        </span>
      </div>

      {/* List Items */}
      <ul className="space-y-4 mt-auto">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CircleCheckBig
              className="text-primary"
              size={20}
              strokeWidth={2}
            />
            <span className="text-font-body text-sm font-medium leading-5">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SectorServices() {
  const services = [
    {
      title: "البرامج التنفيذية",
      description: "تدريب عملي على أحدث التقنيات والأدوات في مجالات البرمجة والتحليل والذكاء الاصطناعي.",
      traineesCount: "2,000+ متدرب",
      items: [
        "برامج إدارة الأعمال التنفيذية.",
        "برامج المحاسبة المهنية.",
        "برامج التأمين.",
        "ماجستير العلوم التنفيذي في التسويق الاستراتيجي.",
        "برامج إدارة الموارد البشرية.",
        "برامج الأمن السيبراني ونظم المعلومات الحاسوبية.",
      ]
    },
    {
      title: "برامج اللغات",
      description: "تدريب عملي على أحدث التقنيات والأدوات في مجالات البرمجة والتحليل والذكاء الاصطناعي.",
      traineesCount: "2,000+ متدرب",
      items: [
        "خدمة العملاء CBP-CS.",
        "المبيعات CBP-S.",
        "التسويق CBP-M.",
        "القيادة الإدارية CBP-LS.",
        "جمعية الموارد البشرية SHRM-CP.",
        "تكنولوجيا الحاسب الآلي CBP-CT.",
      ]
    },
    {
        title: "الدورات التدريبية",
        description: "تدريب عملي على أحدث التقنيات والأدوات في مجالات البرمجة والتحليل والذكاء الاصطناعي.",
        traineesCount: "2,000+ متدرب",
        items: [
          "برامج إدارة الأعمال التنفيذية.",
          "برامج المحاسبة المهنية.",
          "برامج التأمين.",
          "ماجستير العلوم التنفيذي في التسويق الاستراتيجي.",
          "برامج إدارة الموارد البشرية.",
          "برامج الأمن السيبراني ونظم المعلومات الحاسوبية.",
        ]
      },
    {
      title: "الشهادات الاحترافية",
      description: "تدريب عملي على أحدث التقنيات والأدوات في مجالات البرمجة والتحليل والذكاء الاصطناعي.",
      traineesCount: "2,000+ متدرب",
      items: [
        "خدمة العملاء CBP-CS.",
        "المبيعات CBP-S.",
        "التسويق CBP-M.",
        "القيادة الإدارية CBP-LS.",
        "جمعية الموارد البشرية SHRM-CP.",
        "تكنولوجيا الحاسب الآلي CBP-CT.",
      ]
    },
    {
      title: "الاستشارات التدريبية",
      description: "تدريب عملي على أحدث التقنيات والأدوات في مجالات البرمجة والتحليل والذكاء الاصطناعي.",
      traineesCount: "2,000+ متدرب",
      items: [
        "خدمة العملاء CBP-CS.",
        "المبيعات CBP-S.",
        "التسويق CBP-M.",
        "القيادة الإدارية CBP-LS.",
        "جمعية الموارد البشرية SHRM-CP.",
        "تكنولوجيا الحاسب الآلي CBP-CT.",
      ]
    },
    {
      title: "التمكين الشخصي والكوتشينج",
      description: "تدريب عملي على أحدث التقنيات والأدوات في مجالات البرمجة والتحليل والذكاء الاصطناعي.",
      traineesCount: "2,000+ متدرب",
      items: [
        "خدمة العملاء CBP-CS.",
        "المبيعات CBP-S.",
        "التسويق CBP-M.",
        "القيادة الإدارية CBP-LS.",
        "جمعية الموارد البشرية SHRM-CP.",
        "تكنولوجيا الحاسب الآلي CBP-CT.",
      ]
    },
  ];

  return (
    <section className="bg-[#FCFCFC]">
      {/* Header Section */}
        <div className="section-container">
        <div className="flex flex-col items-start text-start mb-6 lg:mb-14 px-4">
        <span className="text-primary font-bold text-lg block">
          خدماتنا التدريبية
        </span>
        <h2 className="text-base md:text-xl font-bold text-font-body leading-[160%] max-w-225">
          قدم برامج تدريبية متكاملة مصممة خصيصاً لسد الفجوات المهارية ورفع كفاءة الأداء في مختلف المستويات الإدارية والمهنية.
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 xl:px-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
        </div>
    </section>
  );
}
