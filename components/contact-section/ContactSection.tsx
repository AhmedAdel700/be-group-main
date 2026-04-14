"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, PhoneCall, ArrowLeft, ChevronDown, ArrowRight } from "lucide-react";
import MainButton from "../common/MainButton";
import { useLocale } from "next-intl";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const finalContactSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب ويجب أن يكون حرفين على الأقل"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صالح"),
  company: z.string().min(2, "اسم الشركة مطلوب"),
  sector: z.string().min(1, "يرجى اختيار القطاع"),
  message: z.string().min(10, "الرسالة يجب أن تتكون من 10 حروف على الأقل"),
});

type ContactFormData = z.infer<typeof finalContactSchema>;


export default function ContactSection() {
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
    
    // Hide success message after 5 seconds
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
    <section className="section-container bg-main-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header and Contact Info Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-10">
          {/* Section Title (Right side in RTL) */}
          <div className="flex flex-col gap-4 text-start max-w-lg order-1">
            <h2 className="text-primary font-bold text-lg leading-[160%]">
              تواصل معنا
            </h2>
            <h3 className="text-main-black font-bold text-base lg:text-xl leading-[160%]">
              دعنا نبدأ معًا لا تتردد في التواصل معنا اذا كان لديك استفسار، أو
              ترغب ببساطة في التواصل
            </h3>
          </div>

          {/* Contact Detail Cards (Left side in RTL) */}
          <div className="flex flex-row items-center gap-4 sm:gap-8 order-2 w-full lg:w-auto pt-1.5 overflow-x-auto no-scrollbar">
            {/* Phone Card */}
            <a href="tel:+62123456789" className="flex items-center gap-2.5 sm:gap-4 shrink-0 group cursor-pointer">
              <div className="w-11 h-11 sm:w-15 sm:h-15 bg-primary text-main-white flex items-center justify-center rounded-xl shrink-0 shadow-[0_8px_30px_rgb(222,114,53,0.15)] transition-transform duration-300 group-hover:-translate-y-1">
                <PhoneCall strokeWidth={1.1} className="w-5 h-5 sm:w-[30px] sm:h-[30px]" />
              </div>
              <div className="text-start">
                <p className="text-[13px] sm:text-base text-main-black group-hover:text-primary transition-colors font-bold leading-[160%]">
                  رقم الهاتف
                </p>
                <p className="text-[13px] sm:text-base text-labels font-normal" dir="ltr">
                  +62 123 456 789
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a href="mailto:begroup@gmail.as" className="flex items-center gap-2.5 sm:gap-4 shrink-0 group cursor-pointer">
              <div className="w-11 h-11 sm:w-15 sm:h-15 bg-primary text-main-white flex items-center justify-center rounded-xl shrink-0 shadow-[0_8px_30px_rgb(222,114,53,0.15)] transition-transform duration-300 group-hover:-translate-y-1">
                <Mail strokeWidth={1.1} className="w-5 h-5 sm:w-[30px] sm:h-[30px]" />
              </div>
              <div className="text-start">
                <p className="text-[13px] sm:text-base text-main-black group-hover:text-primary transition-colors font-bold leading-[160%]">
                  الايميل
                </p>
                <p className="text-[13px] sm:text-base text-labels font-normal">
                  begroup@gmail.as
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
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
                className={`w-full h-14 bg-transparent border rounded-xl px-4 text-primary text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all ${
                  errors.name ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-secondary-black/10 focus:border-primary focus:ring-1 focus:ring-primary/20"
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
                className={`w-full h-14 bg-transparent border rounded-xl px-4 text-primary text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all ${
                  errors.email ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-secondary-black/10 focus:border-primary focus:ring-1 focus:ring-primary/20"
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
                className={`w-full h-14 bg-transparent border rounded-xl px-4 text-primary text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all ${
                  errors.company ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-secondary-black/10 focus:border-primary focus:ring-1 focus:ring-primary/20"
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
                {/* Trigger */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-full h-14 bg-transparent border rounded-xl px-4 flex items-center justify-between cursor-pointer transition-all ${
                    errors.sector 
                      ? "border-red-500" 
                      : isOpen
                        ? "border-primary ring-1 ring-primary/20 shadow-sm"
                        : "border-secondary-black/10 group-hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`text-base leading-6.5 font-normal ${selectedOption ? "text-primary" : "text-labels"}`}
                  >
                    {selectedOption
                      ? options.find((o) => o.value === selectedOption)?.label
                      : "اختر القطاع المراد الاستفسار عنه"}
                  </span>
                  <div
                    className={`transition-all duration-300 ${isOpen ? "rotate-180 text-primary" : "text-main-black/30 group-hover:text-primary"}`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {/* Dropdown Menu */}
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
                          selectedOption === option.value
                            ? "text-primary bg-primary/5 font-medium"
                            : "text-main-black"
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
              className={`w-full bg-transparent border rounded-xl px-4 py-4 text-primary text-base leading-6.5 font-normal placeholder:text-labels focus:outline-none transition-all resize-none ${
                errors.message ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-secondary-black/10 focus:border-primary focus:ring-1 focus:ring-primary/20"
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
              iconEnd={
                locale === "ar" ? (
                  <ArrowLeft size={20} />
                ) : (
                  <ArrowRight size={20} />
                )
              }
              className={`h-14 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "جاري الإرسال..." : "أرسل رسالتك"}
            </MainButton>
          </div>
        </form>
      </div>
    </section>
  );
}
