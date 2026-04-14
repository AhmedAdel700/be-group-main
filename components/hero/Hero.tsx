"use client";

import Image from "next/image";
import heroImage from "@/assets/hero.jpg";
import { useLocale } from "next-intl";
import MainButton from "@/components/common/MainButton";
import { MoveLeft, MoveRight } from "lucide-react";
import herocard1 from "@/assets/herocard1.png";
import herocard2 from "@/assets/herocard2.png";
import herocard3 from "@/assets/herocard3.png";

export default function Hero() {
  const locale = useLocale();

  const ArrowIcon =
    locale === "ar" ? <MoveLeft size={24} /> : <MoveRight size={24} />;

  return (
    <section className="relative min-h-screen flex items-center pt-12 lg:pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-main-black via-transparent to-main-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-main-black/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 xl:px-15 flex flex-col z-10 w-full">
        <div className="text-start flex flex-col gap-4">
          <p className="text-primary leading-[1.6] text-sm sm:text-base font-bold">
            بى جروب كيان واحد متكامل نبني، نطوّر، وننمو بأعمالك
          </p>

          <h1
            className="
              font-semibold text-main-white
              text-[40px] leading-tight
              md:text-[58px]
              lg:text-[66px]
              xl:text-[72px]
              2xl:text-[80px]
              max-w-7xl
            "
          >
            أطلق العنان لعلامتك <span className="text-primary">التجارية</span>{" "}
            من خلال تجارب <span className="text-primary">مبتكرة .</span>
          </h1>
        </div>

        <div
          className="
            flex flex-col gap-8
            sm:gap-12
            md:gap-14
            xl:gap-16
            2xl:gap-20
            mt-8
            sm:-mt-8
            md:-mt-12
            xl:-mt-16
            2xl:-mt-20
          "
        >
          <div className="w-full flex justify-between items-end">
            <MainButton
              buttontype="primary"
              iconEnd={ArrowIcon}
              className="w-full lg:w-fit text-base"
            >
              قطاعات نخدمها
            </MainButton>

            <div
              className="sm:h-36 sm:w-0 lg:hidden"
            ></div>

            <div
              className="
                relative
                hidden lg:block
                w-28 h-48
                md:w-32 md:h-52 
                lg:w-36 lg:h-56
                xl:w-38 xl:h-58
                2xl:w-40 2xl:h-60
              "
            >
              <Image
                src={herocard1}
                alt="Hero Card 1"
                width={160}
                height={160}
                className="
                  absolute top-0 inset-e-0 object-cover rounded-xl border-4 border-secondary-black
                  w-24 h-24
                  md:w-28 md:h-28
                  lg:w-32 lg:h-32
                  xl:w-36 xl:h-36
                  2xl:w-40 2xl:h-40
                "
              />
              <Image
                src={herocard2}
                alt="Hero Card 2"
                width={160}
                height={160}
                className="
                  absolute object-cover rounded-xl border-4 border-secondary-black
                  top-8 inset-e-8
                  w-24 h-24
                  md:w-28 md:h-28
                  lg:w-32 lg:h-32
                  xl:w-36 xl:h-36
                  2xl:w-40 2xl:h-40
                "
              />
              <Image
                src={herocard3}
                alt="Hero Card 3"
                width={160}
                height={160}
                className="
                  absolute object-cover rounded-xl border-4 border-secondary-black
                  top-16 inset-e-16
                  w-24 h-24
                  md:w-28 md:h-28
                  lg:w-32 lg:h-32
                  xl:w-36 xl:h-36
                  2xl:w-40 2xl:h-40
                "
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end">
            <p className="leading-[1.6] font-bold text-base sm:text-lg xl:text-xl text-main-white whitespace-nowrap">
              أكثر من 2000 عميل راضٍ
            </p>

            <div
              className="
                flex flex-col gap-4
                sm:gap-6
                xl:gap-8
                w-full
                sm:max-w-xs
                md:max-w-sm
                lg:max-w-md
                max-w-full
              "
            >
              <p className="leading-[1.6] font-bold text-base xl:text-lg 2xl:text-xl text-main-white">
                نقدّم حلولًا شاملة في التدريب، المقاولات، تنظيم الفعاليات،
                الاستشارات الإدارية، والحلول الرقمية تحت مظلة واحدة.
              </p>

              <MainButton
                buttontype="secondary"
                iconEnd={ArrowIcon}
                className="text-base"
              >
                قطاعات نخدمها
              </MainButton>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 xl:w-125 xl:h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-48 h-48 sm:w-64 sm:h-64 xl:w-75 xl:h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none" /> */}
    </section>
  );
}
