import Image from "next/image";
import heroImg from "@/assets/hero.jpg";
import { Link } from "@/i18n/navigation";
import beBG from "@/assets/beBG.svg";

interface PagesHeroProps {
  page?: "sector" | "contact" | "work";
}

const heroContent = {
  sector: {
    title: "قطاع التدريب والتطوير",
    description:
      "نحن نؤمن بأن رأس المال البشري هو المحرك الحقيقي للنمو. نقدم حلولاً تعليمية مبتكرة تواكب التطورات العالمية وتلبي تطلعات رؤية المملكة 2030.",
  },
  contact: {
    title: "Be GROUP",
    description:
      'يسعدنا تواصلك معنا ، فريقنا متواجد عبر <span class="highlight">مواقعنا المختلفة</span> للإجابة عن استفساراتك ودعم أعمالك.',
  },
  work: {
    title: "أعمالنا",
    description: "استكشف مشاريعنا وإنجازاتنا في مختلف القطاعات.",
  },
};

const breadcrumbs = {
  sector: {
    path1: "قطاعات نخدمها",
    path2: "قطاع التدريب والتطوير",
    href: "/sectors",
  },
  contact: "تواصل معنا",
  work: "أعمالنا",
};

export default function PagesHero({ page = "sector" }: PagesHeroProps) {
  const content = heroContent[page] || heroContent.sector;

  return (
    <section className="relative w-full md:min-h-100 xl:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Page Hero Background"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/80"></div>

      <Image
        src={beBG}
        alt="Background Pattern"
        priority
        className="pointer-events-none absolute mt-8 lg:mt-0 inset-0 w-full h-full object-contain md:inset-[unset] md:left-0 md:-bottom-6 md:w-100 md:h-100 lg:bottom-0 xl:w-150 xl:h-150 xl:bottom-0 2xl:bottom-10 xl:left-0"
      />

      <div className="section-container xl:px-8! mt-12 relative z-10 h-full flex flex-col items-start justify-start">
        {/* Breadcrumb */}
        <div className="flex justify-start text-base font-normal mb-10 text-main-white gap-2">
          <Link
            href="/"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            الرئيسية
          </Link>
          <span className="font-bold">/</span>
          {typeof breadcrumbs[page] === "string" ? (
            <>
              <span className="text-primary font-bold">
                {breadcrumbs[page]}
              </span>
            </>
          ) : (
            <>
              <Link
                href={breadcrumbs[page].href}
                className="text-main-white font-normal hover:text-primary transition-colors cursor-pointer"
              >
                {breadcrumbs[page].path1}
              </Link>
              <span className="font-bold">/</span>
              <span className="text-primary font-bold">
                {breadcrumbs[page].path2}
              </span>
            </>
          )}
        </div>

        {/* Dynamic Content */}
        <div className="flex flex-col gap-2 text-start">
          <h3
            className={`text-[24px] leading-[160%] font-semibold text-primary`}
          >
            {content.title}
          </h3>

          <h1
            className={`text-base md:text-[24px] xl:text-[40px] leading-[160%] font-bold text-main-white ${page === "contact" ? "max-w-5xl" : "w-full"}`}
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
        </div>

        {/* Footer text */}
        <div className="xl:text-end w-full mt-10 xl:mt-auto">
          <p className="text-sm lg:text-base leading-[160%] font-medium text-main-white">
            نحن هنا لنصنع تأثيرًا حقيقيًا في عالم الأعمال، بفكرة جريئة تلو
            الأخرى.
          </p>
        </div>
      </div>
    </section>
  );
}
