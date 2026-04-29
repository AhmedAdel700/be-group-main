"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper.css";
import blogImage from "@/assets/blogImage.jpg";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";

type Locale = "ar" | "en";

interface RelatedBlog {
  id: number;
  image: Parameters<typeof Image>[0]["src"];
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  href: string;
}

const RELATED_BLOGS: RelatedBlog[] = [
  {
    id: 1,
    image: blogImage,
    title: {
      ar: "كيف تبني استراتيجية رقمية ناجحة لعملك؟",
      en: "How to Build a Successful Digital Strategy for Your Business?",
    },
    description: {
      ar: "في عالم يتسارع فيه التحول الرقمي، تحتاج الشركات إلى استراتيجية رقمية واضحة تحدد أهدافها وأدواتها وقنوات تواصلها مع العملاء بطريقة فعّالة.",
      en: "In a world where digital transformation is accelerating, businesses need a clear digital strategy that defines their goals, tools, and customer communication channels effectively.",
    },
    href: "/blogs/1",
  },
  {
    id: 2,
    image: image1,
    title: {
      ar: "أهمية الاستشارات الإدارية في تطوير المؤسسات",
      en: "The Importance of Management Consulting in Institutional Development",
    },
    description: {
      ar: "تلعب الاستشارات الإدارية دورًا محوريًا في مساعدة المؤسسات على تحديد نقاط القوة والضعف ووضع خطط تطوير شاملة تضمن الاستدامة والنمو.",
      en: "Management consulting plays a pivotal role in helping organizations identify strengths and weaknesses and develop comprehensive improvement plans.",
    },
    href: "/blogs/2",
  },
  {
    id: 3,
    image: slide1,
    title: {
      ar: "تطوير الكوادر البشرية: الاستثمار الأهم في عصرنا",
      en: "Human Capital Development: The Most Important Investment of Our Era",
    },
    description: {
      ar: "لا يمكن لأي مؤسسة أن تحقق نجاحًا مستدامًا دون الاستثمار في تطوير كوادرها البشرية، إذ إن الموارد البشرية المؤهلة هي الدافع الحقيقي للإنجاز.",
      en: "No organization can achieve sustainable success without investing in human capital development, as qualified human resources are the true driver of achievement.",
    },
    href: "/blogs/3",
  },
  {
    id: 4,
    image: image2,
    title: {
      ar: "إدارة المشاريع الاحترافية: مفاتيح النجاح والتميز",
      en: "Professional Project Management: Keys to Success and Excellence",
    },
    description: {
      ar: "تعتمد إدارة المشاريع الناجحة على منهجية متكاملة تشمل التخطيط الدقيق، وتوزيع الأدوار، والمتابعة المستمرة لضمان الوصول إلى النتائج المرجوة.",
      en: "Successful project management relies on a comprehensive methodology that includes careful planning, role distribution, and continuous follow-up.",
    },
    href: "/blogs/4",
  },
  {
    id: 5,
    image: slide2,
    title: {
      ar: "رؤية 2030 وأثرها على بيئة الأعمال السعودية",
      en: "Vision 2030 and Its Impact on the Saudi Business Environment",
    },
    description: {
      ar: "تُعدّ رؤية المملكة 2030 محركًا رئيسيًا للتحول الاقتصادي، إذ تفتح آفاقًا واسعة أمام القطاع الخاص وتُرسي بيئة أعمال تنافسية ومتطورةالنتائج المرجوة.",
      en: "Saudi Vision 2030 is a key driver of economic transformation, opening wide horizons for the private sector and establishing a competitive business environment.",
    },
    href: "/blogs/5",
  },
  {
    id: 6,
    image: slide3,
    title: {
      ar: "التحول الرقمي في قطاع الموارد البشرية",
      en: "Digital Transformation in the Human Resources Sector",
    },
    description: {
      ar: "يشهد قطاع الموارد البشرية تحولًا رقميًا متسارعًا يعتمد على تقنيات الذكاء الاصطناعي وتحليل البيانات لتحسين قرارات التوظيف وتطوير الكفاءات.",
      en: "The human resources sector is witnessing rapid digital transformation relying on artificial intelligence and data analytics to improve hiring decisions.",
    },
    href: "/blogs/6",
  },
];

function BlogCard({
  image,
  title,
  description,
  href,
  locale,
}: RelatedBlog & { locale: Locale }) {
  const isRtl = locale === "ar";

  return (
    <article className="flex flex-col rounded-xl overflow-hidden bg-main-white border border-black/15 shadow-sm hover:border-primary transition-colors duration-300 h-full">
      <div className="relative w-full aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt={title[locale]}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div
        className={`flex flex-col flex-1 gap-3 p-6 ${isRtl ? "text-right" : "text-left"}`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <h2 className="text-main-black text-lg font-bold leading-[160%] line-clamp-2">
          {title[locale]}
        </h2>

        <p className="text-font-body text-sm font-medium leading-[180%] line-clamp-3 flex-1">
          {description[locale]}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group w-fit hover:text-primary-hover transition-colors duration-300"
        >
          <h3 className="text-base">
            {locale === "ar" ? "اقرأ المزيد" : "Read More"}
          </h3>
          {locale === "ar" ? <ArrowLeft size={22} /> : <ArrowRight size={22} />}
        </Link>
      </div>
    </article>
  );
}

export default function RelatedBlogs() {
  const locale = useLocale() as Locale;
  const isRtl = locale === "ar";

  return (
    <section
      className="bg-main-white mt-8 lg:mt-16"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mb-8">
        <h2 className="text-main-black font-bold text-xl md:text-2xl leading-[160%]">
          {locale === "ar" ? "مقالات ذات صلة" : "Related Articles"}
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        dir={isRtl ? "rtl" : "ltr"}
        key={locale}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {RELATED_BLOGS.map((blog) => (
          <SwiperSlide key={blog.id} className="h-auto">
            <BlogCard {...blog} locale={locale} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}