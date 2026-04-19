import PagesHero from "@/components/pages-hero/PagesHero";
import Gallary from "@/components/gallary/Gallary";
import LetsContact from "@/components/lets-contact/LetsContact";
import CaseStudy from "@/components/case-study/CaseStudy";

export default function OurWork() {
  return (
    <main>
      <PagesHero page="work" />
      <Gallary />
      <CaseStudy />
      <LetsContact />
    </main>
  );
}
