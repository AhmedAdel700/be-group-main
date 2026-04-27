import PagesHero from "@/components/pages-hero/PagesHero";
import Partners from "@/components/partners/Partners";
import Numbers from "@/components/sectors/Numbers";
import SectorInfo from "@/components/sectors/SectorInfo";
import Solutions from "@/components/solutions/Solutions";
export default function AllSectors() {
  return (
    <>
      <PagesHero page="allsectors" className="xl:h-[626px]" />
      <Numbers />
      <SectorInfo />
      <Partners />
      <Solutions className="bg-white" />
    </>
  );
}
