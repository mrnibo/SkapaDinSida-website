import AboutClient from "@/components/About/AboutClient";
import StatsClient from "@/components/stats/StatsClient";

export default function PageAbout() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 justify-center">
        <AboutClient />
        <StatsClient />
      </div>
    </>
  );
}
