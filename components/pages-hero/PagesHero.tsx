import Image from "next/image";
import heroImg from "@/assets/hero.jpg";
import { Link } from "@/i18n/navigation";

export default function PagesHero() {
    return (
        <section className="relative w-full md:min-h-[400px] xl:h-[75vh] overflow-hidden">
            {/* Background Image */}
            <Image
                src={heroImg}
                alt="Page Hero Background"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/80"></div>

        <div className="section-container xl:!px-8 mt-12 lg:mt-0 relative z-10 h-full flex flex-col items-start justify-start">
          <div className="flex justify-start text-base font-normal mb-10 text-main-white gap-2">
            <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
              الرئيسية
            </Link>
            <span className="font-bold">/</span>
                <Link href={'/sectors'} className="hover:text-primary transition-colors cursor-pointer">قطاعات نخدمها</Link>
            <span className="font-bold">/</span>
            <span className="text-primary font-bold">اسم القطاع</span>
          </div>

        <div className="flex flex-col gap-2 text-start">
            <h3 className="text-[24px] leading-[160%] font-semibold text-primary">قطاع التدريب والتطوير </h3>
            <h1 className="text-base md:text-[24px] xl:text-[40px] leading-[160%] font-bold text-main-white">نحن نؤمن بأن رأس المال البشري هو المحرك الحقيقي للنمو. نقدم حلولاً تعليمية مبتكرة تواكب التطورات العالمية وتلبي تطلعات رؤية المملكة 2030.</h1>
        </div>

        <div className="xl:text-end w-full mt-10 xl:mt-auto">
            <p className="text-sm lg:text-base leading-[160%] font-medium text-main-white">نحن هنا لنصنع تأثيرًا حقيقيًا في عالم الأعمال، بفكرة جريئة تلو الأخرى.</p>
        </div>

        </div>
        </section>
    );
}
