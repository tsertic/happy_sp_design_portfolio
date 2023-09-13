import { KnowledgeCardsGrid } from "@/components/individual/KnowledgeCardsGrid/KnowledgeCardsGrid";
import React from "react";

export const Hero = () => {
  return (
    <div className="container-wide">
      <div className=" w-full flex flex-col items-center text-center gap-[16px] md:gap-[27px] xl:gap-[23px] mb-[32px] md:mb-[84px] xl:mb-[80px]">
        <h1 className="text-center text-headingLMobile md:text-headingLTablet xl:text-headingL">
          Design solutions made easy
        </h1>
        <p className=" w-full max-w-[285px] md:max-w-[573px] xl:max-w-[730px]">
          {" "}
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <KnowledgeCardsGrid />
    </div>
  );
};
