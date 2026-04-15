import Image from "next/image";
import begoupBG from "@/assets/begoupBG.svg";
import { useLocale } from "next-intl";
import MainButton from "../common/MainButton";
import { MoveLeft, MoveRight } from "lucide-react";
export default function Solutions() {
  const locale = useLocale();
  return (
    <section className="bg-secondary-black py-14 lg:py-0 lg:h-140 flex flex-col items-center justify-center relative overflow-hidden">
      <Image
        src={begoupBG}
        alt="Solutions"
        width={4000}
        className={`object-cover absolute bottom-0 max-w-[95%] lg:max-w-[85%] max-h-[95%] lg:max-h-[85%] ${locale === "ar" ? "inset-e-0" : "inset-s-0"}`}
      />
      <div className="section-container w-full h-full relative flex flex-col gap-8 lg:gap-8 items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-6 lg:gap-10">
          <h2 className="text-main-white text-3xl md:text-4xl lg:text-[48px] lg:leading-12 font-bold text-center">
            هل تحتاج إلى حلول في أحد قطاعاتنا؟
          </h2>
          <p className="font-normal text-base md:text-lg lg:text-xl text-main-white leading-relaxed lg:leading-[32.5px] lg:max-w-3xl text-center">
            فريقنا المتخصص جاهز لمساعدتك في اختيار الحلول المناسبة وتقديم
            استشارة مجانية لفهم احتياجاتك وتقديم أفضل الخيارات
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 w-full sm:w-auto">
          <div className="w-full sm:w-auto [&>*]:w-full">
            <MainButton
              buttontype="primary"
              iconEnd={locale === "ar" ? <MoveLeft /> : <MoveRight />}
            >
              أرسل استفسارك
            </MainButton>
          </div>
          <div className="w-full sm:w-auto [&>*]:w-full">
            <MainButton
              buttontype="secondary"
              iconEnd={locale === "ar" ? <MoveLeft /> : <MoveRight />}
            >
              استكشف منتجاتنا
            </MainButton>
          </div>
        </div>
      </div>
    </section>
  );
}
