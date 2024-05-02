import React from "react";
import logo from "../../assets/images/logo.svg";
import home from "../../assets/icons/home.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import settings from "../../assets/icons/settings.svg";
import bell from "../../assets/icons/bell.svg";
import NavIcons from "./NavIcons";

const navLinks = [
  {
    label: "Home",
    path: "/",
    icon: home,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: settings,
  },
];

interface sidebarProps {
  path?: any;
}

const Sidebar: React.FC<sidebarProps> = ({ path }) => {
  return (
    <aside className="w-20 min-h-screen max-h-screen bg-transparent flex flex-col justify-between py-4">
      <div className="self-center flex justify-center items-center h-10 w-10">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="flex flex-col items-center h-max w-full justify-between gap-6">
        {navLinks?.map((link, index) => (
          <NavIcons path={link.path} activePath={path} key={link.path} />
        ))}
      </div>

      <div className="self-center flex justify-center items-center h-6 w-6 cursor-pointer">
        <img src={bell} alt="bell-icon" />
      </div>
    </aside>
  );
};

export default Sidebar;
