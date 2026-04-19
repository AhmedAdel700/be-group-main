"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale } from "next-intl";
import MainButton from "../common/MainButton";

const finalContactSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب ويجب أن يكون حرفين على الأقل"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صالح"),
  company: z.string().min(2, "اسم الشركة مطلوب"),
  sector: z.string().min(1, "يرجى اختيار القطاع"),
  message: z.string().min(10, "الرسالة يجب أن تتكون من 10 حروف على الأقل"),
});

type ContactFormData = z.infer<typeof finalContactSchema>;

const InstagramIcon = ({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: XIcon, href: "https://twitter.com/bgroup_sa" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/company/bgroup-sa/" },
  { icon: InstagramIcon, href: "https://www.instagram.com/bgroup_sa" },
];

export default function ContactUsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(finalContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      sector: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted Successfully:", data);
    setIsSuccess(true);
    reset();
    setSelectedOption("");
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const options = [
    { value: "tech", label: "الحلول الرقمية" },
    { value: "training", label: "التدريب" },
    { value: "management", label: "الاستشارات الإدارية" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 xl:px-12 bg-main-white pt-10 mb-6 lg:mb-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14">
        <aside className="flex items-start flex-col gap-8 border-b lg:border-b-0 lg:border-e border-[#d1d1d16c] w-full lg:w-[30%] xl:w-[25%] pb-10 lg:pb-0 lg:pe-10">
          <h4 className="text-xl text-primary font-semibold tracking-[-2%]">
            يمكنك تتبع اخبارنا من هنا...{" "}
          </h4>
          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="bg-primary p-3.75 rounded-xl h-15 w-15 flex items-center justify-center transition-opacity hover:opacity-90"
              >
                <Icon size={30} className="text-main-white" />
              </Link>
            ))}
          </div>
        </aside>
        <aside className="flex flex-col gap-6 md:gap-10 xl:gap-16 w-full lg:w-[70%] xl:w-[75%] mb-10">
          <div>
            <h4 className="text-primary font-semibold text-xl tracking-[-2%] mb-4 md:mb-6">
              تواصل معنا
            </h4>
            <p className="text-main-black tracking-[-4%] text-2xl lg:text-[32px] font-medium w-full lg:w-[70%]">
              اترك بياناتك وسيتواصل معك أحد أعضاء فريقنا في أقرب وقت.
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-8 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 font-medium px-4 py-4 rounded-xl mb-2 transition-all">
                تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.
              </div>
            )}

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
              {/* Name */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-main-black leading-[160%] ps-1">
                  الاسم
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder="أكتب الاسم هنا.."
                  {...register("name")}
                  className={`w-full h-14 bg-transparent border rounded-xl px-4 text-main-black text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-secondary-black/10 focus:border-primary"
                  }`}
                />
                {errors.name && <span className="text-red-500 text-sm px-2 text-start">{errors.name.message}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-main-black leading-[160%] ps-1">
                  البريد الإلكتروني
                </label>
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="أكتب البريد الإلكتروني"
                  {...register("email")}
                  className={`w-full h-14 bg-transparent border rounded-xl px-4 text-main-black text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all ${
                    errors.email ? "border-red-500 focus:border-red-500" : "border-secondary-black/10 focus:border-primary"
                  }`}
                />
                {errors.email && <span className="text-red-500 text-sm px-2 text-start">{errors.email.message}</span>}
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-main-black leading-[160%]">
                  اسم الشركة
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder="أكتب اسم الشركة"
                  {...register("company")}
                  className={`w-full h-14 bg-transparent border rounded-xl px-4 text-main-black text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all ${
                    errors.company ? "border-red-500 focus:border-red-500" : "border-secondary-black/10 focus:border-primary"
                  }`}
                />
                {errors.company && <span className="text-red-500 text-sm px-2 text-start">{errors.company.message}</span>}
              </div>

              {/* Sector Dropdown */}
              <div className="flex flex-col gap-3" ref={selectRef}>
                <label className="text-base font-semibold text-main-black leading-[160%] ps-1">
                  اسم القطاع
                </label>
                <div className="relative group">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full h-14 bg-transparent border rounded-xl px-4 flex items-center justify-between cursor-pointer transition-all ${
                      errors.sector ? "border-red-500" : isOpen ? "border-primary ring-1 ring-primary/20" : "border-secondary-black/10 hover:border-primary/40"
                    }`}
                  >
                    <span className={`text-base leading-6.5 font-normal ${selectedOption ? "text-main-black" : "text-labels"}`}>
                      {selectedOption ? options.find((o) => o.value === selectedOption)?.label : "اختر القطاع المراد الاستفسار عنه"}
                    </span>
                    <div className={`transition-all duration-300 ${isOpen ? "rotate-180 text-primary" : "text-main-black/30 group-hover:text-primary"}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-secondary-black/10 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col py-2">
                      {options.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => {
                            setSelectedOption(option.value);
                            setValue("sector", option.value, { shouldValidate: true });
                            setIsOpen(false);
                          }}
                          className={`px-4 py-3 text-base leading-6.5 font-normal cursor-pointer transition-colors hover:bg-gray-50/80 ${
                            selectedOption === option.value ? "text-primary bg-primary/5 font-medium" : "text-main-black"
                          }`}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.sector && <span className="text-red-500 text-sm px-2 text-start">{errors.sector.message}</span>}
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-3 w-full">
              <label className="text-base font-semibold text-main-black leading-[160%] ps-1">
                اكتب رسالتك
              </label>
              <textarea
                suppressHydrationWarning
                rows={5}
                placeholder="أكتب استفسار او رسالتك المراد الاستفسار عنها"
                {...register("message")}
                className={`w-full bg-transparent border rounded-xl px-4 py-4 text-main-black text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-secondary-black/10 focus:border-primary"
                }`}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm px-2 text-start">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <MainButton
                type="submit"
                buttontype="black"
                disabled={isSubmitting}
                iconEnd={locale === "ar" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                className={`h-14 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "جاري الإرسال..." : "أرسل رسالتك"}
              </MainButton>
            </div>
          </form>
        </aside>
      </div>
    </section>
  );
}
