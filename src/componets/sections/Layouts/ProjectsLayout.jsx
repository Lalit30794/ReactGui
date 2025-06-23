import React from "react";
import { Outlet } from "react-router-dom";

export const ProjectsLayout = () => {
  return (
    <>
      <div className="w-[90%] h-[100vh]  flex flex-col justify-center items-center text-left  mx-auto rounded-xl">
        <Outlet />
      </div>
    </>
  );
};
