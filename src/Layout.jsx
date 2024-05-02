import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import { Routes, Route, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="flex bg-background overflow-hidden h-screen">
      <div className="flex-shrink-0">
        <Sidebar path={location?.pathname} />
      </div>
      <div className="min-h-screen 2xl:max-h-screen bg-sidebar flex-grow overflow-auto rounded-tl-[1.75rem] rounded-bl-[1.75rem] shadow-md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
