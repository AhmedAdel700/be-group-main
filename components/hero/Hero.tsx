import MainButton from "@/components/common/MainButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="section-container flex flex-wrap items-center justify-center gap-5">
            <MainButton 
                buttontype="primary"
                iconStart={<ArrowLeft />}
            >
                Primary Action
            </MainButton>

            <MainButton 
                buttontype="secondary"
                iconEnd={<ArrowRight />}
            >
                Secondary Action
            </MainButton>

            <MainButton buttontype="black">
                Black Button
            </MainButton>
        </section>
    );
}