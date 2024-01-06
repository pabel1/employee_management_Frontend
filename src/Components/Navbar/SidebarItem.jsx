import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { dashboardMenu } from "../../../Utility/ClassName";

const SidebarItem = ({
  item,
  isActive,
  onClick,
  hasPermission,
  openDropdown,
  setToggle,
}) => {
  const isActiveNavLink = (path) => {
    return window.location.pathname === path;
  };

  return (
    <div className="group">
      {hasPermission() && item.children ? (
        <>
          <button
            onClick={() => onClick(item.title)}
            className={`
              ${dashboardMenu} ${
              isActive ? "text-primaryColor bg-emerald-100" : "text-gray-600"
            } group-hover:bg-slate-100 rounded-md`}
          >
            <item.icon className="text-base" />
            {item.title}
            <BiChevronRight
              className={`${
                openDropdown && "rotate-90"
              } text-lg transition-all duration-500 ml-auto`}
            />
          </button>
          <div
            className={`${
              openDropdown
                ? "max-h-40 mt-1 overflow-y-hidden transition-all duration-500"
                : "max-h-0 mt-1 overflow-hidden transition-all duration-500"
            }`}
          >
            {item.children.map(
              (childItem, childIndex) =>
                hasPermission(childItem) && (
                  <NavLink
                    key={childIndex}
                    to={childItem.link}
                    onClick={() => setToggle(false)}
                    className={`${
                      isActiveNavLink(childItem.link)
                        ? "text-primaryColor"
                        : "text-gray-500"
                    } hover:bg-emerald-50 items-center gap-2 py-1.5 text-sm pl-7 rounded-md  flex
                  `}
                  >
                    <childItem.icon className="text-sm" />
                    {childItem.title}
                  </NavLink>
                )
            )}
          </div>
        </>
      ) : (
        hasPermission() && (
          <NavLink
            title={item.title}
            to={item.link}
            onClick={() => onClick(false)}
            className={`${isActive ? "bg-emerald-100" : ""} ${dashboardMenu} ${
              isActive ? "text-primaryColor" : "text-gray-500"
            }  group-hover:bg-slate-100 rounded-md`}
          >
            <item.icon className="text-base" />
            {item.title}
          </NavLink>
        )
      )}
    </div>
  );
};

export default SidebarItem;
