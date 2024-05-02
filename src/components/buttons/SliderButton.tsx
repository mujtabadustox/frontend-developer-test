import React from "react";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

interface SliderButtonProps {
  onClick: () => void;
  type: string;
}

const SliderButton: React.FC<SliderButtonProps> = ({ onClick, type }) => {
  const imgSrc = type === "left" ? left.toString() : right.toString();

  return (
    <div
      className="h-max w-max p-3 bg-gray-3 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <div className="w-6 h-6">
        <img src={imgSrc} alt="arrow-icon" />
      </div>
    </div>
  );
};

export default SliderButton;
