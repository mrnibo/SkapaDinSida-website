import React from "react";
import ContactModal from "./ContactModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { imageAttributeCard } from "@/app/constants/Constants";
const Hero = () => {
  {
    /*cards and open modal  (must put data in constants and then call them here as props)*/
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col py-2 justify-end">
          <div className="flex flex-row  gap-4">
            <Card>
              <CardHeader>
                <CardTitle> card</CardTitle>
                <CardDescription> card</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={imageAttributeCard.src}
                  alt={imageAttributeCard.alt}
                  height={imageAttributeCard.height}
                  width={imageAttributeCard.width}
                />
              </CardContent>
            </Card>
          </div>
          <ContactModal />
        </div>
      </div>
    </>
  );
};

export default Hero;
