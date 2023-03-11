import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Home from "../pages/Home";

const Main = () => {
  return (
    <div className="flex gap-4">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Main;
