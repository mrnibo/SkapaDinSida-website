import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

import React from "react";
{
  /*Links and onClick must add to avatars , links are defined in constants */
}
const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center py-4 gap-16 ">
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage
              src="/nibo.jpg"
              alt="@nibo"
              height={60}
              width={60}
              className="rounded-full"
            />

            <AvatarFallback>Mr.Nibo</AvatarFallback>
            <div>Mr.Nibo</div>
          </Avatar>
        </div>
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage
              src="/seagate.jpg"
              alt="@seagate"
              height={60}
              width={60}
              className="rounded-full"
            />

            <AvatarFallback>SeaGate</AvatarFallback>
            <div>SeaGate</div>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Footer;
