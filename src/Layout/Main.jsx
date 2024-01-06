import React from "react";
import { Outlet } from "react-router-dom";

import Topbar from "../Components/Navbar/Topbar";
const Main = () => {
  return (
    <section className="">
      <Topbar />
      <Outlet />
    </section>
  );
};

export default Main;
