"use client";

import Image from "next/image";
import cairoImg from "@/assets/cairo.jpg";
import newyorkImg from "@/assets/newyork.jpg";
import { Phone, Mail, MapPin, SendHorizontal } from "lucide-react";
import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const LOCATIONS = [
    {
        city: "نيويورك، أمريكا",
        branch: "المقر الرئيسي",
        phone: "+945 861 321 33",
        email: "info@kasvol.com",
        address: "حي النخيل، طريق الملك فهد، برج بي جروب",
        image: newyorkImg,
    },
    {
        city: "القاهرة، مصر",
        branch: "المقر الرئيسي",
        phone: "+945 861 321 33",
        email: "info@kasvol.com",
        address: "حي النخيل، طريق الملك فهد، برج بي جروب",
        image: cairoImg,
    },
    {
        city: "نيويورك، أمريكا",
        branch: "المقر الرئيسي",
        phone: "+945 861 321 33",
        email: "info@kasvol.com",
        address: "حي النخيل، طريق الملك فهد، برج بي جروب",
        image: newyorkImg,
    },
    {
        city: "نيويورك، أمريكا",
        branch: "المقر الرئيسي",
        phone: "+945 861 321 33",
        email: "info@kasvol.com",
        address: "حي النخيل، طريق الملك فهد",
        image: newyorkImg,
    },
];

const LocationCard = ({ loc, locale }: { loc: any; locale: string }) => (
    <div className="border-[#E5E5E5] border-[0.8px] rounded-[24px] lg:rounded-[40px] bg-main-white flex flex-col sm:flex-row overflow-hidden h-full min-h-auto lg:min-h-92.5">
        {/* Image Content */}
        <div className="w-full sm:w-[30%] relative h-48 sm:h-auto sm:min-h-full shrink-0">
            <Image
                src={loc.image}
                alt={loc.city}
                fill
                className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 lg:p-6 text-main-white items-start text-start">
                <h3 className="text-base lg:text-lg leading-tight lg:leading-7.5 font-bold">
                    {loc.city}
                </h3>
                <p className="text-xs lg:text-sm text-[#D4AF37] font-bold text-start leading-tight">
                    {loc.branch}
                </p>
            </div>
        </div>

        <div className="flex-1 p-5 lg:py-10 lg:px-6 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4 lg:gap-5 w-full">
                {/* Phone */}
                <div className="flex items-center gap-3 lg:gap-5.5 justify-start text-start">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="size-5 lg:size-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-main-black text-base lg:text-lg leading-[160%] font-medium">
                            رقم الهاتف
                        </span>
                        <span
                            dir="ltr"
                            className="text-labels text-sm lg:text-base leading-tight lg:leading-8.5 font-normal"
                        >
                            {loc.phone}
                        </span>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 lg:gap-5.5 justify-start text-start">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="size-5 lg:size-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-main-black text-base lg:text-lg leading-[160%] font-medium">
                            البريد الإلكتروني
                        </span>
                        <span className="text-labels text-sm lg:text-base leading-tight lg:leading-8.5 font-normal">
                            {loc.email}
                        </span>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 lg:gap-5.5 justify-start text-start">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="size-5 lg:size-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-main-black text-base lg:text-lg leading-[160%] font-medium">
                            الموقع
                        </span>
                        <span className="text-labels text-sm lg:text-base leading-tight lg:leading-8.5 font-normal">
                            {loc.address}
                        </span>
                    </div>
                </div>
            </div>

            {/* View Map Link */}
            <div className="mt-6 lg:mt-auto flex justify-start ps-2">
                <button className="flex items-center gap-2 lg:gap-3 text-primary font-bold text-base lg:text-lg hover:opacity-80 transition-opacity cursor-pointer group">
                    <span>عرض الموقع الجغرافي</span>
                    <SendHorizontal className={`size-4 lg:size-5 text-primary ${locale === "en" ? "rotate-180" : ""}`} />
                </button>
            </div>
        </div>
    </div>
);

export default function OurLocations() {
    const locale = useLocale();
    return (
        <section>
            <div className="container mx-auto py-12 lg:py-18 px-4 sm:px-6 xl:px-12 flex flex-col gap-10 lg:gap-13.5">
                <div className="flex flex-col gap-2 w-full text-start items-start">
                    <h2 className="text-primary font-bold text-xl lg:text-2xl leading-[160%]">
                        تواجدنا العالمي
                    </h2>
                    <p className="text-[#333333] font-normal text-base lg:text-lg leading-relaxed lg:leading-[29.25px]">
                        تنتشر مكاتبنا في أهم المراكز الاقتصادية حول العالم، لنربط الخبرات
                        السعودية بالفرص العالمية ونقدم حلولاً تتجاوز الحدود الجغرافية.
                    </p>
                </div>

                <div className="block lg:hidden">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            480: { slidesPerView: 1.25 },
                            640: { slidesPerView: 1},
                        }}
                    >
                        {LOCATIONS.map((loc, index) => (
                            <SwiperSlide key={index} className="h-auto! py-4">
                                <LocationCard loc={loc} locale={locale} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop: Grid (hidden below lg) */}
                <div className="hidden lg:grid grid-cols-2 gap-12">
                    {LOCATIONS.map((loc, index) => (
                        <LocationCard key={index} loc={loc} locale={locale} />
                    ))}
                </div>
            </div>
        </section>
    );
}
