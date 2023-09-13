import { WorkCarousel } from "@/components/individual/WorkCarousel/WorkCarousel";
import React from "react";

export const MyWork = () => {
  return (
    <div>
      <h3 className="text-center text-headingSMobile md:text-headingS mb-[56px]">
        My Work
      </h3>
      <WorkCarousel />
    </div>
  );
};
