"use client";

import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale } from "next-intl";
import { ArrowLeft, ArrowRight, ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import beGroupAvatar from "@/assets/blog-details-banner.jpg";
import MainButton from "../common/MainButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sidebarContactSchema = z.object({
  firstName: z.string().min(3, "الاسم الأول مطلوب"),
  serviceType: z.string().min(1, "يرجى اختيار نوع الخدمة"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صالح"),
  message: z.string().min(30, "الرسالة يجب أن تتكون من 30 حرفًا على الأقل"),
});

type SidebarContactFormData = z.infer<typeof sidebarContactSchema>;

const SERVICE_OPTIONS = [
  { value: "digital", label: "الحلول الرقمية" },
  { value: "training", label: "التدريب" },
  { value: "consulting", label: "الاستشارات الإدارية" },
];

export default function ContactSidebar() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!stickyRef.current || !containerRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: stickyRef.current,
        pin: true,
        start: "top 96px",
        end: () => {
          const stickyHeight = stickyRef.current?.offsetHeight || 0;
          return `bottom ${96 + stickyHeight}px`;
        },
        endTrigger: containerRef.current,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      return () => trigger.kill();
    }, containerRef);

    return () => mm.revert();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SidebarContactFormData>({
    resolver: zodResolver(sidebarContactSchema),
    defaultValues: { firstName: "", serviceType: "", email: "", message: "" },
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = (data: SidebarContactFormData) => {
    console.log("Sidebar Contact Form Submitted:", data);
    setIsSuccess(true);
    reset();
    setSelectedService("");
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <aside ref={containerRef} className="w-full lg:w-103 shrink-0">
      <div ref={stickyRef} className="flex flex-col gap-4">
        <div>
          <h3 className="text-primary font-bold text-lg leading-[160%] tracking-normal mb-1">
            {isAr ? "تواصل معنا" : "Contact Us"}
          </h3>
          <p className="text-base font-normal leading-7.5 text-labels">
            {isAr
              ? "إذا كان لديك استفسار عن هذا الموضوع أو لديك استفسار يمكنك التواصل معنا مباشرة"
              : "If you have an inquiry about this topic or any other inquiry, you can contact us directly"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-main-white rounded-xl py-10 px-6 flex flex-col gap-4 shadow-xl border border-bg-tags">
          {/* Header */}
          <div className="flex items-center justify-start pb-4 border-b border-[#E5E7EB] gap-2.5">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src={beGroupAvatar}
                alt="Be Group"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <circle cx="7" cy="7" r="7" fill="#22C55E" />
                  <path
                    d="M4 7L6 9L10 5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#032D60] font-extrabold text-base leading-6 text-center">
                  Be Group
                </span>
              </div>

              <span className="text-[#6D7588] font-normal text-[14px] leading-[1.8]">
                Built to Support Growth
              </span>
            </div>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 font-medium px-4 py-3 rounded-lg text-sm text-start">
              {isAr
                ? "تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا."
                : "Your message has been sent successfully!"}
            </div>
          )}

          {/* Form */}
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-main-black leading-[160%]">
                {isAr ? "الاسم الأول" : "First Name"}
              </label>

              <input
                suppressHydrationWarning
                type="text"
                placeholder={
                  isAr ? "اكتب الاسم الأول هنا" : "Enter your first name"
                }
                {...register("firstName")}
                className={`w-full h-12 bg-transparent border rounded-md px-4 text-main-black text-sm font-normal placeholder:text-[#B0B0B0] focus:outline-none transition-all ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-[#EBEBEB] focus:border-primary"
                }`}
              />

              {errors.firstName && (
                <span className="text-red-500 text-xs px-1">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3" ref={dropdownRef}>
              <label className="text-sm font-semibold text-main-black leading-[160%]">
                {isAr ? "أختر نوع الخدمة" : "Service Type"}
              </label>

              <div className="relative">
                <div
                  tabIndex={0}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                  }}
                  className={`w-full h-12 bg-transparent border rounded-md px-4 text-main-black text-sm font-normal placeholder:text-[#B0B0B0] flex items-center justify-between cursor-pointer transition-all focus:outline-none ${
                    errors.serviceType
                      ? "border-red-500"
                      : isDropdownOpen
                        ? "border-primary ring-1 ring-primary"
                        : "border-[#E5E7EB] focus:border-primary"
                  }`}
                >
                  <span
                    className={`text-sm ${selectedService ? "text-main-black" : "text-[#B0B0B0]"}`}
                  >
                    {selectedService
                      ? SERVICE_OPTIONS.find((o) => o.value === selectedService)
                          ?.label
                      : isAr
                        ? "اختر الخدمة"
                        : "Service Type"}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition ${
                      isDropdownOpen
                        ? "rotate-180 text-primary"
                        : "text-gray-400"
                    }`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white border border-[#E5E7EB] rounded-lg shadow-md z-50 overflow-hidden flex flex-col py-1">
                    {SERVICE_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => {
                          setSelectedService(option.value);
                          setValue("serviceType", option.value, {
                            shouldValidate: true,
                          });
                          setIsDropdownOpen(false);
                        }}
                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 ${
                          selectedService === option.value
                            ? "text-primary bg-primary/5"
                            : "text-main-black"
                        }`}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {errors.serviceType && (
                <span className="text-red-500 text-xs px-1">
                  {errors.serviceType.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-main-black leading-[160%]">
                {isAr ? "البريد الإلكتروني *" : "Email *"}
              </label>

              <div className="relative">
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="example@example.com"
                  {...register("email")}
                  className={`w-full h-12 bg-transparent border rounded-md px-8 text-main-black text-sm font-normal placeholder:text-[#B0B0B0] focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-500"
                      : "border-[#E5E7EB] focus:border-primary"
                  }`}
                />

                <div className="absolute top-1/2 -translate-y-1/2 inset-s-3 text-gray-400 pointer-events-none">
                  <Mail size={16} />
                </div>
              </div>

              {errors.email && (
                <span className="text-red-500 text-xs px-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-main-black leading-[160%]">
                {isAr ? "اكتب رسالتك *" : "Your Message *"}
              </label>

              <textarea
                suppressHydrationWarning
                rows={4}
                placeholder={
                  isAr ? "اكتب رسالتك هنا" : "Write your message here"
                }
                {...register("message")}
                className={`w-full h-36 mb-6 bg-transparent border rounded-md p-4 text-main-black text-sm font-normal placeholder:text-[#B0B0B0] focus:outline-none resize-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-[#EBEBEB] focus:border-primary"
                }`}
              />

              {errors.message && (
                <span className="text-red-500 text-xs px-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Button */}
            <MainButton
              type="submit"
              buttontype="primary"
              disabled={isSubmitting}
              iconEnd={
                isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />
              }
              className={`h-12 w-full justify-center rounded-sm font-medium text-[18px] leading-6 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting
                ? isAr
                  ? "جاري الإرسال..."
                  : "Sending..."
                : isAr
                  ? "إرسال"
                  : "Send"}
            </MainButton>
          </form>
        </div>
      </div>
    </aside>
  );
}