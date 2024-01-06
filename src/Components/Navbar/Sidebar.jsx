import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { hasPermissionRecursive } from "../../../Utility/hasPermissionRecursive";
import logo from "../../assets/images/030---Paper-Stack.png";
import { userLoggedOut } from "../../feature/auth/authSlice";
import { navData } from "../data/data";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ toggle, setToggle }) => {
  const { user } = useSelector((state) => state?.auth);
  console.log(user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActiveNavLink = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const canAccessLink = (item) => {
    return hasPermissionRecursive(item, user?.role);
  };

  return (
    <div className="min-h-screen relative bg-white border-r border-gray-300 overflow-x-hidden">
      <div
        onClick={() => setToggle(!toggle)}
        className="h-7 w-7 bg-slate-200 hover:bg-slate-300 text-slate-700 hover:slate-800 rounded-full lg:hidden grid place-items-center absolute top-5 right-4 cursor-pointer"
      >
        <BiChevronLeft className="text-2xl" />
      </div>
      <div className="py-4 flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src={logo} className="w-12 rounded-sm" alt="" />
        </Link>
        <div>
          <h1 className="text-sm font-medium text-gray-500 text-center">
            Employee Management
          </h1>
          <p className="text-xs font-normal text-gray-600 text-center">
            {user?.email}
          </p>
        </div>
      </div>

      <div className="mt-2 mx-4">
        {navData?.map(({ stackName, data }, index) => (
          <div className="my-5" key={index}>
            <h2 className="text-gray-400 mb-2 uppercase font-bold text-xs ml-2">
              {stackName}
            </h2>
            {data?.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                isActive={location.pathname.includes(item.title.toLowerCase())}
                onClick={() => toggleDropdown(item.title)}
                hasPermission={() => canAccessLink(item)}
                openDropdown={openDropdown === item.title}
                setToggle={setToggle}
              />
            ))}
          </div>
        ))}

        <div className="absolute bottom-0 w-full group pb-8">
          <button
            onClick={handleLogout}
            className="py-2 w-[80%] bg-red-500 hover:bg-red-600 text-white rounded-md flex justify-center transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
