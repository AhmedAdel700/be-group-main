import AboutHero from "@/components/about-hero/AboutHero";
import OurStory from "@/components/our-story/OurStory";
import Partners from "@/components/partners/Partners";
import Sectores from "@/components/sectors/Sectores";
import Solutions from "@/components/solutions/Solutions";
import Team from "@/components/team/Team";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Sectores />
      <Partners />
      <Team />
      <Solutions />
    </main>
  );
}
