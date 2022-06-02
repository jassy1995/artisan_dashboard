import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/sidebar";

function Index() {
  return (
    <>
      <div className="MainDiv">
        <Navbar />
        <SideBar />
        <div className="md:ml-64">
          <div className="bg-light-blue-500 px-3 md:px-8 h-5"></div>
          <div className="px-3 md:px-8 -mt-24">
            <div className="container mx-auto max-w-full">
              <div className="grid grid-cols-1 xl:grid-cols-5 "></div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Index;
