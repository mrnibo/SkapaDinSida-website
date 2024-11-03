import ContactUsBookCallClient from "@/components/ContactUs/ContactUsBookCallClient";
import Header from "@/components/Header";
import HeroClient from "@/components/Hero/HeroClient";
import ProcessClient from "@/components/Process/ProcessClient";
import ServiceShowcase from "@/components/Service/ServiceClient";
import ShowcaseClient from "@/components/Showcase/ShowcaseClient";
import { TitleSection } from "@/components/ui/titles";

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
        <ShowcaseClient />
        <div className="bg-gray-200 dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <ProcessClient />
          </div>
        </div>

        <div className="py-24">
          <ContactUsBookCallClient />
        </div>
      </main>
    </>
  );
}
