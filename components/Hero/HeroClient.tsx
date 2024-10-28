import React from "react";
import HyperText from "@/components/ui/hyper-text";
import { Button } from "../ui/button";
import ContactModal from "./ContactModal";
const HeroClient = () => {
  return (
    <>
      <div className="flex  justify-center">
        {" "}
        <HyperText
          className="text-4xl font-bold text-black dark:text-white"
          text="SkapaDinSida "
        />{" "}
      </div>
      <div className="flex  justify-center">
        <HyperText
          className="text-2xl font-bold text-black dark:text-white"
          text="asdfasdfasdfasfdasdfasdfasdsdsdfsdfasdfasdfasdffasdasdfasdfasdfasdfasdfasdf "
        />
      </div>
      <div className="flex justify-center gap-4">
        <Button>Get Start</Button>
        <ContactModal />
      </div>
    </>
  );
};

export default HeroClient;
