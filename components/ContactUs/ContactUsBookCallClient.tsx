import React from "react";
import { TitleSection } from "../ui/titles";
import { Badge } from "../ui/badge";
import { IconCircleDot, IconPhoneIncoming } from "@tabler/icons-react";
import TeamCards from "../About/TeamCard/TeamCards";
import { Button } from "../ui/button";
import Link from "next/link";

const ContactUsBookCallClient = () => {
  return (
    <div className="bg-gray-200 dark:bg-neutral-900">
      <div className="container mx-auto p-24">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <Badge variant="default" className="flex gap-1">
            <IconCircleDot className="text-green-400" size={20} />
            Available for new project
          </Badge>
          <TitleSection text="Book a call" />

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

          <div className="">
            <Link href="/book-a-call">
              <Button
                variant="default"
                size="xl"
                className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-xl text-white text-lg flex justify-center items-center gap-2"
              >
                <IconPhoneIncoming /> Book a call with us
              </Button>
            </Link>
          </div>
          <TeamCards />
        </div>
      </div>
    </div>
  );
};

export default ContactUsBookCallClient;
