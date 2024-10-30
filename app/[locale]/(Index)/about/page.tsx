import TeamCards from "@/components/About/TeamCard/TeamCards";
import StatsClient from "@/components/About/Stats/StatsClient";
import AboutClient from "@/components/About/AboutClient";

export default function PageAbout() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center">
          <AboutClient />
        </div>
      </div>
    </>
  );
}
