import React from "react";
import Navbar from "../navigatioin/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container w-[100%] h-[80vh] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <Outlet />
      </div>
    </>
  );
};
