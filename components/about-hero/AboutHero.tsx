import Image from "next/image";
import badge from "@/assets/badge.png";
import teamImg from "@/assets/hero.jpg";
import { Link } from "@/i18n/navigation";

export default function AboutHero() {
  const stats = [
    { label: "سنوات الخبرة", value: "+12" },
    { label: "مشاريع منفذ", value: "+237" },
    { label: "عملاء راضون", value: "+237" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="bg-main-white mt-10 mb-3 relative">
        <div className="section-container">
          <div className="flex justify-start text-base font-bold mb-10 text-gray-500 gap-2">
            <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
              الرئيسية
            </Link>
            <span className="font-medium">/</span>
            <span className="text-primary font-bold">من نحن</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20 h-auto lg:h-115">
            <div className="flex-1 w-full order-1 lg:order-1 lg:pt-4">
              <h2 className="text-primary font-bold text-xl md:text-2xl mb-4">Be GROUP</h2>
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-main-black leading-[1.6]">
                مجموعة متكاملة تقدّم <span className="text-primary">حلولاً متكاملة</span> لدعم نمو الشركات
                <br className="hidden lg:block" /> والأفراد عبر قطاعات متعددة وخدمات مترابطة
              </h1>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end order-2 lg:order-2 relative">
              <Image
                src={badge}
                width={2000}
                height={2000}
                alt="ISO 9001 Certified"
                className="w-34 h-34 object-contain drop-shadow-xl z-10"
              />
              <div className="black-circle w-34 h-34 bg-main-black rounded-full absolute inset-e-[-50%] hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-black w-full relative">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 relative z-20 mt-10 lg:-mt-32 xl:-mt-56">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto relative -top-5 lg:-top-20">
            
            <div className="w-full lg:w-[65%] flex">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-64 md:h-80 lg:h-90">
                <Image
                  src={teamImg}
                  priority
                  width={2000}
                  height={2000}
                  alt="Be Group Team Presentation"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full lg:w-[35%] flex flex-col gap-4 lg:h-90">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-primary hover:bg-primary-hover hover:-translate-y-1 gap-1 transition-all duration-300 text-white rounded-[20px] py-8 lg:py-0 text-center text-3xl lg:text-[20px] leading-[160%] font-bold flex-1 flex items-center justify-center h-24 lg:h-26.5"
                >
                  <span className="text-[34px]">{stat.value}</span> {stat.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}