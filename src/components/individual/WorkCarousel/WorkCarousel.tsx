"use client";
import { RoundArrowButton } from "@/components/UI/RoundArrowButton";
import { WorkCard } from "@/components/cards/WorkCard";
import { workCardsData } from "@/constants";
import { motion } from "framer-motion";
import React, { useState, KeyboardEvent } from "react";
import { useSwipeable } from "react-swipeable";
// @ts-ignore -no types for this library
import useKeypress from "react-use-keypress";

export const WorkCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleMoveRight = () => {
    if (currentSlide < workCardsData.length - 2)
      setCurrentSlide(currentSlide + 1);
  };
  const handleMoveLeft = () => {
    if (currentSlide >= 0) setCurrentSlide(currentSlide - 1);
  };
  //moving carousel with keys
  useKeypress(["ArrowLeft", "ArrowRight"], (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      handleMoveLeft();
    } else {
      handleMoveRight();
    }
  });
  // for useSvipeable library config and actions
  const handlerSwipe = useSwipeable({
    trackMouse: true,

    onSwipeStart: (e) => {
      if (e.dir === "Right") {
        handleMoveLeft();
      }
      if (e.dir === "Left") {
        handleMoveRight();
      }
    },
  });
  return (
    <div className="flex flex-col gap-[32px] md:gap-[56px] items-center  overflow-hidden ">
      <motion.div
        {...handlerSwipe}
        initial={{}}
        className="overflow-hidden  relative h-[180px] md:h-[360px] w-[840px] md:w-[1680px] cursor-pointer  "
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
      <div className="flex gap-[16px]">
        <RoundArrowButton direction="left" onClickAction={handleMoveLeft} />
        <RoundArrowButton direction="right" onClickAction={handleMoveRight} />
      </div>
    </div>
  );
};
function setActiveKey(key: any) {
  throw new Error("Function not implemented.");
}
