"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { ChevronDown, MoveRight, MoveLeft, Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setShowMobileDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "قطاعات نخدمها", href: "/sectors", dropdown: true },
    { name: "تعرف علينا", href: "/about" },
    { name: "أعمالنا", href: "/work" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-transparent py-6">
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        
        <div className="flex items-center gap-12 lg:gap-22">
          <Link href="/" className="relative z-10 block shrink-0">
            <div className="relative w-[124px] h-[52px]">
              <Image 
                src="/assets/logo.svg" 
                alt="Logo" 
                fill 
                className="object-contain object-right"
                priority
              />
            </div>
          </Link>


          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      className={`text-base leading-[1.6] transition-all duration-300 flex items-center gap-1.5 
                        ${isActive 
                          ? 'text-primary font-bold' 
                          : 'text-main-white font-medium hover:text-primary'}
                      `}
                    >
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown 
                          size={18} 
                          className="transition-transform duration-300 group-hover:rotate-180" 
                        />
                      )}
                    </Link>

                    {link.dropdown && (
                      <div className="absolute top-full -left-6 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="bg-main-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4 min-w-[220px]">
                          <ul className="space-y-2">
                             <li>
                               <Link href="/sectors/tech" className="block px-4 py-2 text-main-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors font-medium">قطاع التكنولوجيا</Link>
                             </li>
                             <li>
                               <Link href="/sectors/real-estate" className="block px-4 py-2 text-main-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors font-medium">قطاع العقارات</Link>
                             </li>
                             <li>
                               <Link href="/sectors/marketing" className="block px-4 py-2 text-main-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors font-medium">قطاع التسويق</Link>
                             </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Desktop Contact CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="text-primary font-bold text-base leading-[1.6] border-b border-primary border-solid flex items-center gap-[10px] py-[5px] px-[10px] group transition-all duration-300 hover:gap-3"
          >
            تواصل معنا
            {locale === "ar" ? <MoveLeft size={24} className="transition-transform duration-300" /> : <MoveRight size={24} className="transition-transform duration-300" />}
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 text-main-white hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-main-black/95 backdrop-blur-xl pt-32 px-6 flex flex-col items-center overflow-y-auto"
          >
            <nav className="w-full max-w-sm text-center">
              <ul className="space-y-6">
                {navLinks.map((link) => {
                  const isActive = link.href === "/" 
                    ? pathname === "/" 
                    : pathname?.startsWith(link.href);

                  return (
                    <motion.li key={link.href} variants={itemVariants}>
                      {link.dropdown ? (
                        <div>
                          <button 
                            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                            className={`text-2xl font-bold leading-relaxed w-full flex items-center justify-center gap-2
                              ${isActive ? 'text-primary' : 'text-main-white'}
                            `}
                          >
                          {link.name}
                          <ChevronDown 
                            size={24} 
                            className={`transition-transform duration-300 ${showMobileDropdown ? 'rotate-180 text-primary' : ''}`} 
                          />
                        </button>
                        <AnimatePresence>
                          {showMobileDropdown && (
                            <motion.ul 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-4 space-y-4 overflow-hidden"
                            >
                              <li><Link onClick={() => setIsOpen(false)} href="/sectors/tech" className="text-xl text-main-white hover:text-primary transition-colors">قطاع التكنولوجيا</Link></li>
                              <li><Link onClick={() => setIsOpen(false)} href="/sectors/real-estate" className="text-xl text-main-white hover:text-primary transition-colors">قطاع العقارات</Link></li>
                              <li><Link onClick={() => setIsOpen(false)} href="/sectors/marketing" className="text-xl text-main-white hover:text-primary transition-colors">قطاع التسويق</Link></li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={link.href}
                        className={`text-2xl font-bold leading-relaxed block
                          ${pathname === link.href ? 'text-primary' : 'text-main-white hover:text-primary'}
                        `}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                );
                })}
              </ul>

              <motion.div 
                variants={itemVariants}
                className="mt-12 flex justify-center"
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                  className="text-primary font-bold text-xl leading-[1.6] border-b-2 border-primary border-solid flex items-center gap-3 py-2 px-4 transition-all duration-300"
                >
                  تواصل معنا
                  {locale === "ar" ? <MoveLeft size={28} /> : <MoveRight size={28} />}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
