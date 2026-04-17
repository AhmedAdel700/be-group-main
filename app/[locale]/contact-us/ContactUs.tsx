import ContactUsSection from "@/components/contact-us-section/ContactUsSection";
import OurLocations from "@/components/our-locations/OurLocations";
import PagesHero from "@/components/pages-hero/PagesHero";

export default function ContactUs() {
  return (
    <main className="bg-[#FAFAFA] h-full pb-6 lg:pb-10">
      <PagesHero page="contact"/>
      <OurLocations />
      <ContactUsSection />
    </main>
  );
}
