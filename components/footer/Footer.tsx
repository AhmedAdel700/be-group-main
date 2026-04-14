import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Link } from "@/i18n/navigation";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-primary">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="text-primary">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="text-primary">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {

  const socialMediaLinks = [
    { href: "https://twitter.com/bgroup_sa", icon: <TwitterIcon />, label: "Twitter" },
    { href: "https://www.facebook.com/bgroup.sa", icon: <FacebookIcon />, label: "Facebook" },
    { href: "https://www.linkedin.com/company/bgroup-sa/", icon: <LinkedInIcon />, label: "LinkedIn" },
  ];


  return (
    <footer className="bg-main-black text-main-white px-4 sm:px-8 xl:px-20 pt-20 flex flex-col gap-14">
      {/* Footer Wrapper */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-20">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <Image src={logo} alt="Brand Logo" width={124} height={52} />
          <p className="text-base leading-6.5 font-normal text-main-white">
            مجموعة سعودية متكاملة تقدم حلولاً احترافية في 5 قطاعات حيوية تخدم
            رؤية 2030
          </p>
          <div className="flex items-center gap-2.5">
            {socialMediaLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                className="w-8 h-8 flex items-center justify-center bg-[#30343C] cursor-pointer transition-opacity hover:opacity-80"
                aria-label={label}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[17px] font-bold text-white mb-5 pb-2.5 border-b-2 border-[#333]">
            روابط سريعة
          </h3>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                قطاعاتنا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                المشاريع
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                الوظائف
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                المدونة
              </a>
            </li>
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h3 className="text-[17px] font-bold text-white mb-5 pb-2.5 border-b-2 border-[#333]">
            القطاعات
          </h3>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                التدريب
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                المقاولات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                الفعاليات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                الاستشارات الإدارية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#b0b0b0] no-underline text-sm transition-colors hover:text-[#e8a03c]"
              >
                الحلول الرقمية
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[17px] font-bold text-[#e8a03c] mb-5 pb-2.5 border-b-2 border-[#333]">
            أتصل بنا
          </h3>
          <div className="flex items-start gap-2.5 mb-4 text-[#b0b0b0] text-[13.5px] leading-[1.7]">
            <span className="text-[#e8a03c] shrink-0 mt-0.5">
              <MapPin size={18} />
            </span>
            <span>الرياض - شارع وادي هجر – حي الملقا - 13524</span>
          </div>
          <div className="flex items-start gap-2.5 mb-4 text-[#b0b0b0] text-[13.5px] leading-[1.7]">
            <span className="text-[#e8a03c] shrink-0 mt-0.5">
              <Phone size={18} />
            </span>
            <span dir="ltr">+966 920022079</span>
          </div>
          <div className="flex items-start gap-2.5 mb-4 text-[#b0b0b0] text-[13.5px] leading-[1.7]">
            <span className="text-[#e8a03c] shrink-0 mt-0.5">
              <Mail size={18} />
            </span>
            <span dir="ltr">info@bgroup.sa</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2d2d2d]">
        <div className="max-w-300 mx-auto px-8 py-4.5 flex flex-wrap justify-between items-center gap-2.5">
          <span className="text-[12.5px] text-[#808080]">
            © 2026 بي جروب. جميع الحقوق محفوظة
          </span>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[12.5px] text-[#808080] no-underline transition-colors hover:text-[#e8a03c]"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-[12.5px] text-[#808080] no-underline transition-colors hover:text-[#e8a03c]"
            >
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
