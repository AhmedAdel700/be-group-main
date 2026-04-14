import ContactSection from "@/components/contact-section/ContactSection";
import Hero from "@/components/hero/Hero";
import Partners from "@/components/partners/Partners";
import PreviousProjects from "@/components/previous projects/PreviousProjects";

export default function page() {
  return (
    <main>
      <Hero />
      <PreviousProjects />
      <Partners />
      <ContactSection />
    </main>
  );
}