import ContactUsBookCallClient from "@/components/ContactUs/ContactUsBookCallClient";
import Header from "@/components/Header";
import HeroClient from "@/components/Hero/HeroClient";
import OfferClient from "@/components/Offer/OfferClient";
import ProcessClient from "@/components/Process/ProcessClient";
import ServiceShowcase from "@/components/Service/ServiceClient";
import ShowcaseClient from "@/components/Showcase/ShowcaseClient";
import BlurFade from "@/components/ui/blur-fade";
import GridPattern from "@/components/ui/grid-pattern";
import { TitleSection } from "@/components/ui/titles";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroClient />

        <div className="bg-gray-200 dark:bg-neutral-800 py-20">
          <div className="container mx-auto px-4 flex flex-col gap-8">
            <TitleSection text="Our Services" className="py-4 px-4" />
            <ServiceShowcase />
          </div>
        </div>
        <BlurFade delay={0.25} inView>
          <ShowcaseClient />
        </BlurFade>
        <div className="bg-gray-200 dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <ProcessClient />
          </div>
        </div>

        <div className="py-24 relative">
          <BlurFade delay={0.25} inView>
            <ContactUsBookCallClient />
          </BlurFade>
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
        </div>
      </main>

      <OfferClient />
    </>
  );
}
