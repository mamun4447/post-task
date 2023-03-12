import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const Main = () => {
  return (
    <div className="flex gap-4 w-full">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Main;
