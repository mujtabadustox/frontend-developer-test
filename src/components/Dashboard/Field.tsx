import React from "react";
import Divider from "../divider/Divider";

interface FieldProps {
  keyValue: string;
  value: string;
}

const Field: React.FC<FieldProps> = ({ keyValue, value }) => {
  return (
    <div className="w-full flex justify-between items-center bg-[#131417] p-2 rounded-xl text-xs md:text-sm font-SFP-R">
      <div className="min-w-[5rem] md:min-w-[6rem]">
        <p>{keyValue}</p>
      </div>
      <div className="flex items-center gap-2">
        <Divider />
        <p className="text-[#FFFFFF]/40 break-words line-clamp-1 max-w-[4rem] md:max-w-[6rem]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Field;
