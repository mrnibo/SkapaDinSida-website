import ContactUsBookCallClient from "@/components/ContactUs/ContactUsBookCallClient";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroClient from "@/components/Hero/HeroClient";
import ProcessClient from "@/components/Process/ProcessClient";
import ServiceShowcase from "@/components/Service/ServiceClient";
import ShowcaseClient from "@/components/Showcase/ShowcaseClient";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroClient />
        <ServiceShowcase />
        <ShowcaseClient />
        <ProcessClient />
        <ContactUsBookCallClient />
      </main>
      <Footer />
    </>
  );
}
