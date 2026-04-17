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

  const quickLinks = [
    { name: "من نحن", href: "#" },
    { name: "قطاعاتنا", href: "#" },
    { name: "المشاريع", href: "#" },
    { name: "الوظائف", href: "#" },
    { name: "المدونة", href: "#" },
  ];

  const sectors = [
    { name: "التدريب", href: "#" },
    { name: "المقاولات", href: "#" },
    { name: "الفعاليات", href: "#" },
    { name: "الاستشارات الإدارية", href: "#" },
    { name: "الحلول الرقمية", href: "#" },
  ];

  const contactInfo = [
    { 
      icon: <MapPin size={20} />, 
      text: "الرياض - شارع وادي هجر – حي الملقا - 13524", 
      dir: "rtl",
      href: "https://www.google.com/maps/search/?api=1&query=الرياض+-+شارع+وادي+هجر+–+حي+الملقا+-+13524"
    },
    { 
      icon: <Phone size={20} className="scale-x-[-1]" />, 
      text: "+966 920022079", 
      dir: "ltr",
      href: "tel:+966920022079"
    },
    { 
      icon: <Mail size={20} />,
      text: "info@bgroup.sa", 
      dir: "ltr",
      href: "mailto:info@bgroup.sa"
    },
  ];

  const bottomLinks = [
    { name: "سياسة الخصوصية", href: "#" },
    { name: "الشروط والأحكام", href: "#" },
  ];

  return (
    <footer className="bg-main-black text-main-white px-6 sm:px-8 xl:px-20 pb-2 pt-10 lg:pt-20 flex flex-col gap-14">
      {/* Footer Wrapper */}
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between gap-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-9 w-full lg:w-[26%]">
          <Image src={logo} alt="Brand Logo" width={124} height={52} />
          <p className="text-base leading-6.5 font-normal text-main-white -mt-3">
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

        {/* Group Quick Links and Sectors for mobile row */}
        <div className="flex flex-row gap-12 justify-between lg:contents">
          {/* Quick Links */}
          <div className="flex flex-col gap-6 ">
            <h3 className="text-xl font-bold text-main-white">روابط سريعة</h3>
            <ul className="flex flex-col gap-3 list-none">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-main-white text-base leading-6 transition-colors hover:text-primary font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-main-white">القطاعات</h3>
            <ul className="flex flex-col gap-3 list-none">
              {sectors.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-main-white text-base leading-6 transition-colors hover:text-primary font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6 lg:w-[25%]">
          <h3 className="text-xl font-bold text-primary">أتصل بنا</h3>
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, idx) => (
              <Link
                key={idx}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-start gap-2.5 text-main-white text-base leading-6 font-normal transition-colors hover:text-primary"
              >
                <span className="text-primary shrink-0 mt-0.5">
                  {info.icon}
                </span>
                <span dir={info.dir}>{info.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E2939] sm:h-17.5 flex w-full py-6 sm:py-2">
        <div className="w-full container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-2.5 text-center sm:text-start">
          <span className="text-sm text-[#99A1AF] font-normal leading-5">
            © 2026 بي جروب. جميع الحقوق محفوظة
          </span>
          <div className="flex justify-center gap-5 font-normal leading-5">
            {bottomLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#99A1AF] transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
