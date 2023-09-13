"use client";
import { WorkCard } from "@/components/cards/WorkCard";
import { workCardsData } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

export const WorkCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div>
      <motion.div
        initial={{ translateX: -200 }}
        className="w-full overflow-hidden flex flex-row gap-[30px] relative h-[540px] "
      >
        {workCardsData.map((card, index) => {
          return (
            <WorkCard
              cardData={card}
              key={card._id}
              position={currentSlide}
              index={index}
            />
          );
        })}
      </motion.div>
      <button onClick={() => setCurrentSlide(currentSlide + 1)}>+</button>
      <button onClick={() => setCurrentSlide(currentSlide - 1)}>-</button>
    </div>
  );
};
