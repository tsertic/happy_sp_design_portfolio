import { Button } from "@/components/UI/Button";
import Image from "next/image";
import React from "react";

export const AboutMe = () => {
  return (
    <div className="max-md:container-wide md:mr-[10px] xl:mr-auto xl:container-wide md:ml-[-44px] xl:ml-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[69px] xl:gap-[125px]">
      <div className="rounded-full w-full max-w-[300px] max-h-[300px] md:max-w-[364px] md:max-h-[364px]  xl:max-w-[445px] xl:max-h-[445px] overflow-hidden">
        <Image
          src="/images/image-amy.webp"
          width={445}
          height={445}
          alt="portrait of amy"
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col gap-[24px] justify-center items-center md:items-start max-md:text-center">
        <h2 className="text-headingMMobile md:text-headingS xl:text-headingM">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button
          colorSchema="secondary"
          href="mailto:happytest1323@gmail.com"
          ariaLabel="mail link for free consultation"
        >
          free consultation
        </Button>
      </div>
    </div>
  );
};
