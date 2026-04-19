import Image from "next/image";
import contactImage from "@/assets/contactImage.png";
import Logo from "@/assets/logo.svg";
import { Link } from "@/i18n/navigation";
import arrowIcon from "@/assets/arrowupIcon.svg";
import { useLocale } from "next-intl";

export default function LetsContact() {
  const locale = useLocale();
  return (
    <section className="section-container">
      <div className="relative w-full h-full md:h-125 xl:h-150 rounded-xl overflow-hidden p-4 md:p-6 xl:p-15">
        <Image src={contactImage} alt="Contact" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 h-full flex flex-col justify-between">
          <Image
            src={Logo}
            alt="Logo"
            width={140}
            height={100}
            className="w-35 h-14 lg:h-20 object-contain"
          />

          <div className="flex flex-col-reverse md:flex-row justify-between item-center lg:items-end gap-3 lg:gap-10">
            {/* Right Side Style: Heading (Appears on right in RTL) */}
            <div className="md:max-w-md lg:max-w-3xl text-center lg:text-start">
              <h2 className="text-main-white text-xl md:text-4xl text-center lg:text-start lg:text-[40px] font-bold leading-[160%] xl:w-[70%]">
                دعنا نبدأ معًا لا تتردد في التواصل معنا
              </h2>
            </div>

            {/* Left Side Style: Description + Button (Appears on left in RTL) */}
            <div className="flex flex-col gap-8 md:max-w-md xl:max-w-xl text-start">
              <p className="text-main-white text-base md:text-xl font-medium leading-6.5">
                أرسل لنا رسالة، وشاركنا رؤيتك ولنحققها معًا. سواء كنت بحاجة إلى
                إعادة تصميم علامتك التجارية، أو نهج جديد لتجربة المستخدم، أو
                مجرد فكرة رائعة - نحن هنا من أجلك.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-main-white px-8 py-4 text-base leading-[160%] rounded-xl font-bold self-end flex items-center justify-center gap-4 h-13.5 w-full lg:w-fit"
              >
                <span>تواصل معنا</span>
                <Image
                  src={arrowIcon}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className={`${
                    locale === "en" ? "transform scale-x-[-1]" : ""
                  }`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
