import AboutClient from "@/components/About/AboutClient";
import TeamCards from "@/components/About/TeamCards";
import StatsClient from "@/components/stats/StatsClient";

export default function PageAbout() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center">
          <AboutClient />
          <StatsClient />
          <TeamCards />
        </div>
      </div>
    </>
  );
}
