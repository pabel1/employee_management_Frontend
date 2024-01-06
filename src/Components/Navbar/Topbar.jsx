import { useEffect, useState } from "react";
import { CiBellOn, CiSearch, CiSettings } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import userImg from "../../assets/images/Avatar.png";
const Topbar = () => {
  const [active, setActive] = useState("/users");

  const location = useLocation();

  useEffect(() => {
    setActive(location?.pathname);
  }, [location.pathname]);
  return (
    <nav className="">
      <div className="container w-full  mx-auto px-4">
        <div className="flex justify-between">
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex gap-3 items-center">
              <Link to={"/"}>
                <CiSearch className="cursor-pointer text-xl" />
              </Link>
              <Link to={"/"}>
                <CiSettings className="cursor-pointer text-xl" />
              </Link>
              <Link to={"/"}>
                <CiBellOn className="cursor-pointer text-xl" />
              </Link>

              <div className="">
                <img
                  className="w-8 h-8 rounded-full  cursor-pointer"
                  src={userImg}
                  alt=""
                />
                <div
                  className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                  id="dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <button className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden text-white">
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-gray-200 text-white"
        >
          Home
        </Link>
        <Link to="/users" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Users
        </Link>
        <Link
          to="/projects"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Projects
        </Link>
        <Link to="/tasks" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Tasks
        </Link>
        <Link
          to="/reporting"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Reporting
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
