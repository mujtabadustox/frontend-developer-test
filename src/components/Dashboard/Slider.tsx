import React from "react";
import SliderButton from "../buttons/SliderButton";

interface SliderProps {
  handleBack: () => void;
  handleNext: () => void;
}

const Slider: React.FC<SliderProps> = ({ handleBack, handleNext }) => {
  return (
    <div className="self-center flex bg-background justify-between w-60 h-max py-2 px-4 rounded-full">
      <SliderButton onClick={handleBack} type={"left"} />
      <SliderButton onClick={handleNext} type={"right"} />
    </div>
  );
};

export default Slider;
