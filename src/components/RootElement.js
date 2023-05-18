import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const RootElement = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a192f] w-full">
        <div className="max-w-[1000px] mx-auto mb-20">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootElement;
