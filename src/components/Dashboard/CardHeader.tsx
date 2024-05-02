import React from "react";
import more from "../../assets/icons/more.svg";

interface CardHeaderProps {
  name?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ name }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <p className="font-SFP-R">{name}</p>
      </div>
      <div className="h-max w-max cursor-pointer">
        <img src={more.toString()} alt="more-options" />
      </div>
    </div>
  );
};

export default CardHeader;
