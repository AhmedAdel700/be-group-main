import Hero from "@/components/hero/Hero";
import PreviousProjects from "@/components/previous projects/PreviousProjects";
import Reviews from "@/components/reviews/Reviews";
import Partners from "@/components/partners/Partners";
import ContactSection from "@/components/contact-section/ContactSection";
import Stories from "@/components/stories/Stories";

export default function page() {
  return (
    <main>
      <Hero />
      <PreviousProjects />
      <Stories />
      <Reviews />
      <Partners />
      <ContactSection />
    </main>
  );
}