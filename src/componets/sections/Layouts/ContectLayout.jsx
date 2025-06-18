import React from "react";
import { Contact } from "../../pages/Contact";
import { Outlet } from "react-router-dom";

export const ContectLayout = () => {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  );
};
