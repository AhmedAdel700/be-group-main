import Image from "next/image";
import badge from "@/assets/badge.png";
import teamImg from "@/assets/team.jpg"; 

export default function AboutHero() {
  return (
    <div className="w-full overflow-hidden">
      {/* Top Section */}
      <section className="bg-main-white pt-10 lg:pt-20 pb-40 mt-10 lg:pb-64 relative">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12">
          {/* Breadcrumb */}
          <div className="flex justify-start text-base font-bold mb-10 text-gray-500 gap-2">
            <span className="hover:text-primary transition-colors cursor-pointer">الرئيسية</span>
            <span className="font-medium">/</span>
            <span className="text-primary font-bold">من نحن</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
            {/* Title Section (Right side in RTL) */}
            <div className="flex-1 w-full order-2 lg:order-1 lg:pt-4">
              <h2 className="text-primary font-bold text-xl md:text-2xl mb-4">Be GROUP</h2>
              <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-main-black leading-[1.6]">
                مجموعة متكاملة تقدّم <span className="text-primary">حلولاً متكاملة</span> لدعم نمو الشركات<br className="hidden lg:block"/> والأفراد عبر قطاعات متعددة وخدمات مترابطة
              </h1>
            </div>

            {/* Badge (Left side in RTL) */}
            <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end order-1 lg:order-2">
              <Image 
                src={badge} 
                alt="ISO 9001 Certified" 
                className="w-35 md:w-45 lg:w-55 object-contain drop-shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sub-section (Overlap) */}
      <section className="bg-secondary-black w-full relative">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 relative z-20 -mt-32 lg:-mt-56 pb-16 lg:pb-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto lg:h-137.5">
            
            {/* Image (Right side in RTL) */}
            <div className="w-full lg:w-[65%] flex h-87.5 lg:h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <Image 
                  src={teamImg} 
                  priority 
                  alt="Be Group Team Presentation" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            {/* Cards (Left side in RTL) */}
            <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:gap-6 min-h-[400px] lg:h-full">
              {[
                "+12 سنوات الخبرة",
                "+237 مشروع منفذ",
                "+237 مشروع منفذ"
              ].map((text, idx) => (
                <div 
                  key={idx} 
                  className="bg-primary hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 text-white rounded-[20px] py-8 lg:py-0 text-center text-3xl lg:text-[34px] font-bold shadow-lg flex-1 flex items-center justify-center"
                >
                  {text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
