import PagesHero from "@/components/pages-hero/PagesHero";
import Gallary from "@/components/gallary/Gallary";
import LetsContact from "@/components/lets-contact/LetsContact";

export default function OurWork() {
  return (
    <main>
      <PagesHero page="work" />
      <Gallary />
      <LetsContact />
    </main>
  );
}
