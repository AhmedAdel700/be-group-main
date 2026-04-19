import mainImage from "@/assets/main-casestudy.png";
import Image2 from "@/assets/Casestudy.png";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import arrowIcon from "@/assets/arrowupIcon.svg";
import { useLocale } from "next-intl";

export default function CaseStudy() {
    const locale = useLocale();
  return (
    <section className="container mx-auto pt-10 lg:pt-25 px-4 sm:px-6 xl:px-12 bg-main-white overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 order-2 w-full lg:w-auto pt-1.5">
          <div className="w-full lg:w-2/3 ">
            <div className="flex flex-col gap-4 text-start max-w-lg order-1">
              <h2 className="text-primary font-bold text-lg leading-[160%]">
                popular projects case study
              </h2>
            </div>
            <div className="relative lg:h-77.5 my-2.5 lg:my-0">
              <Image
                src={Image2}
                width={4000}
                height={4000}
                alt="casestudy"
                className="lg:h-77.5 w-full lg:w-60 relative lg:absolute lg:-top-[28.8px] lg:inset-e-0 rounded-xl"
              />
            </div>

            <h3 className="text-lg lg:text-[45px] mb-1 w-full lg:w-[90%] font-medium tracking-[-4%]">
              نبني الأعمال على رؤية استراتيجية مدروسة تقود إلى تأثير حقيقي .
            </h3>
            <p className="w-full lg:w-[70%] text-sm lg:text-base" >
              لقد عززنا المبيعات من خلال متجر إلكتروني أسرع، وزدنا معدل استخدام
              التطبيق بنسبة 60٪، وبنينا علامة تجارية جريئة ساعدت شركة ناشئة على
              التميز — كل ذلك بفضل التصميم الذكي.
            </p>
            <Link
              href="/contact"
              className="bg-main-black text-main-white px-8 py-4 text-base leading-[160%] rounded-xl font-bold self-end flex items-center justify-center gap-4 h-13.5 w-full lg:w-fit mt-5"
            >
              <span>أقرا المزيد </span>
              <Image src={arrowIcon} alt="Arrow" width={20} height={20}  className={`${
                locale === "en" ? "transform scale-x-[-1]" : ""
              }`}/>
            </Link>
          </div>
          <div className="w-full lg:w-1/3">
            <Image
              src={mainImage}
              width={4000}
              height={4000}
              alt="Main Case Study"
              className="w-full lg:h-150 object-cover rounded-xl"
            />
          </div>
        </div>
    </section>
  );
}
