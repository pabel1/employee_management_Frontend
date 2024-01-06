import React from "react";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import Sidebar from "../Components/Navbar/Sidebar";
import Topbar from "../Components/Navbar/Topbar";
const Main = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="flex">
      <div
        className={`${toggle ? "left-0" : "left-[-100%]"} 
      transition-all duration-[1s] md:left-0 w-[70%] z-[100] md:w-[20%]
      fixed top-0 bottom-0 overflow-y-auto scroll-smooth 
      scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white 
      scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        <Sidebar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="w-full md:w-[80%] md:ml-[20%] h-full">
        <Topbar toggle={toggle} setToggle={setToggle} />
        <div className="lg:p-8 md:p-4 p-2">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
