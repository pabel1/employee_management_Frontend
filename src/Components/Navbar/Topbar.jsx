import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import female from "../../assets/images/female.png";
import male from "../../assets/images/male.png";
import other from "../../assets/images/other.png";
const Topbar = ({ toggle, setToggle }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const { user } = useSelector((state) => state?.auth);

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  const handleMenuOpne = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleMenuOptionClick = (option) => {
    // const clickedOn = option.target.innerText;
    // if (clickedOn === "Delete") {
    //   setIsDeleteMopen(true);
    //   setOpenMenu(null);
    // }
    // if (clickedOn === "Edit") {
    //   navigate("/trending/update-trend", { state: { data: data[1] } });
    //   setOpenMenu(null);
    // }
    // setOpenMenu(null);
  };

  const onChangeHandler = (e) => {
    // dispatch(getGlobalSearchStr(e.target.value));
  };

  const location = useLocation();

  return (
    <div
      className="bg-white flex justify-between items-center shadow py-3 px-6 sticky top-0"
      style={{ zIndex: 99 }}
    >
      <div className="w-full flex justify-between items-center gap-4">
        <div className="transition-all duration-300 cursor-pointer rounded-full flex items-center gap-4">
          <div onClick={() => setToggle(!toggle)} className=" block">
            <HiMenuAlt1 />
          </div>
          <div className="lg:w-[360px] w-64 lg:flex mr-8 md:flex hidden items-center relative">
            <input
              type="text"
              className="w-full outline-none border border-gray-300 rounded-lg pr-3 pl-[34px] py-2"
              placeholder="Search"
              onChange={(e) => onChangeHandler(e)}
            />

            <FiSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-3" />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div
            onClick={handleMenuOpne}
            className="rounded-md flex items-center justify-between gap-2 px-4 lg:mr-0 md:mr-0 -mr-8 py-1 relative cursor-pointer"
          >
            <img
              className="w-10 h-10 object-cover rounded-full  border-[3px] border-blue-200 hover:border-blue-300 transition duration-300"
              src={
                user?.photo?.url ||
                (user?.gender === "Male"
                  ? male
                  : user?.gender === "Female"
                  ? female
                  : other)
              }
              alt={user?.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
