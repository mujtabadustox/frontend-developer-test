import React from "react";
import eth from "../../assets/icons/eth.svg";
import avatar from "../../assets/images/avatar.svg";
import Divider from "../divider/Divider";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-0 gap-8 w-full justify-between items-center h-max font-SFP-R">
      <div className="bg-gray-3 min-w-[12rem] w-max h-max flex items-center gap-2 py-2 px-4 rounded-full shadow-lg">
        <img src={eth.toString()} alt="coin" />

        <p className="text-sm">ETH/USD</p>
        <div className="text-sm text-success flex">
          <p>1137.62</p>
          <p>+262%^</p>
        </div>
      </div>
      <div className="bg-gray-3 min-w-[12rem] w-max h-max flex items-center gap-2 py-2 px-4 rounded-full shadow-lg">
        <img src={avatar.toString()} alt="coin" />

        <p className="text-sm">zash</p>
        <Divider />
        <p className="text-sm">USER ID: 12342423</p>
      </div>
    </div>
  );
};

export default Header;
