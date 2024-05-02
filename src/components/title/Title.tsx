import React from "react";
import refresh from "../../assets/icons/refresh.svg";

interface titleProps {
  title?: string;
}

const Title: React.FC<titleProps> = ({ title }) => {
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-[#FFFFFF] text-[2rem] font-SFP-M">{title}</h1>
      <div className="h-max w-max p-2 bg-gray-3 cursor-pointer rounded-full shadow-lg">
        <div className="h-6 w-6">
          <img src={refresh.toString()} alt="refresh-icon" />
        </div>
      </div>
    </div>
  );
};

export default Title;
