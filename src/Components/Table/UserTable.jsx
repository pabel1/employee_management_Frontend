import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoCheckboxOutline } from "react-icons/io5";
import { LuPen } from "react-icons/lu";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineIndeterminateCheckBox,
} from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "../Modal/DeleteModalToast";
import FormModal from "../Modal/FormModal";
const UserTable = ({ data, page, setPage }) => {
  const [show, setShow] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userData, setUserData] = useState();
  const [allChecked, setAllChecked] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);
  console.log(data);

  const handleAllChecked = () => {
    if (allChecked) {
      setAllChecked(false);
      setCheckedUsers([]);
    } else {
      setCheckedUsers([]);
    }
  };
  const handleCheck = (id) => {
    if (checkedUsers.includes(id)) {
      setCheckedUsers(checkedUsers.filter((user) => user !== id));

      if (checkedUsers.length === 1) {
        setAllChecked(false);
      }
    } else {
      setCheckedUsers([...checkedUsers, id]);
    }
  };
  return (
    <>
      <table className=" w-full divide-y divide-gray-200 table-fixed ">
        <thead className="bg-gray-100 px-4">
          <tr className="w-full">
            <th scope="" className="py-4 pl-4 w-[5%]  ">
              <div className="flex items-center">
                <div
                  onClick={() => handleAllChecked()}
                  className=" rounded-md bg-[#F9FAFB]   flex justify-center items-center select-none"
                >
                  {checkedUsers.length > 0 ? (
                    <MdOutlineIndeterminateCheckBox className="text-[#7F56D9] text-2xl rounded-2xl" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="text-[#7F56D9] text-2xl rounded-2xl" />
                  )}
                </div>
              </div>
            </th>
            <th
              scope=""
              className="py-3  text-base font-medium tracking-wider text-left text-gray-500 w-[35%]"
            >
              <span className=" flex items-center gap-1">
                User Info
                <AiOutlineArrowDown className=" text-lg" />
              </span>
            </th>
            <th
              scope=""
              className="py-3 text-base font-medium tracking-wider text-left text-gray-500 w-[35%]"
            >
              About
            </th>
            <th
              scope=""
              className="py-3   text-base font-medium tracking-wider text-left text-gray-500 w-[15%]"
            >
              Status
            </th>
            <th scope="" className="p-4 w-[10%]">
              <span className=""></span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y px-4 divide-gray-200 dark:divide-gray-700 text-left">
          {data?.data?.map((user, i) => (
            <tr key={i} className="">
              <td className="p-4 w-[5%]">
                <div className="flex items-center">
                  <div
                    onClick={() => handleCheck(user.id)}
                    className=" rounded-md bg-[#F9FAFB]  flex justify-center items-center select-none"
                  >
                    {checkedUsers.includes(user.id) ? (
                      <IoCheckboxOutline className="text-[#7F56D9] text-2xl rounded-lg" />
                    ) : (
                      <MdOutlineCheckBoxOutlineBlank className="text-[#7F56D9] text-2xl  rounded-lg" />
                    )}
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.avatar}
                    alt="profile"
                  />
                  <div className="text-gray-500">
                    <h2 className="text-gray-900 font-semiBold">
                      {user?.first_name + " " + user?.last_name}
                    </h2>
                    <p className="text-xs font-normal">{user?.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-500 w-[35%]">
                <p className="text-gray-900 font-normal">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="text-xs font-normal">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[15%]">
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-normal rounded-full bg-green-100 text-green-800">
                  Random sticker level
                </span>
              </td>
              <td className="">
                <div className="flex gap-5 justify-center">
                  <RiDeleteBinLine
                    className="text-gray-600 cursor-pointer text-lg"
                    onClick={() => {
                      setShow(true);
                      setUserId(user?.id);
                    }}
                  />
                  <LuPen
                    className="text-gray-600 cursor-pointer text-lg"
                    onClick={() => {
                      setShowAddUser(true);
                      setUserData(user);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td
              colSpan={5}
              className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]"
            >
              <div className="flex items-center gap-2 justify-between">
                <button
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                  className={`font-normal border border-gray-200 px-3 py-2 rounded-lg ${
                    page === 1 && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Previous
                </button>
                <h2 className="font-normal">
                  page {data?.page} of {data?.total_pages}
                </h2>
                <button
                  onClick={() => {
                    if (page < data?.total_pages) {
                      setPage(page + 1);
                    }
                  }}
                  className={`font-normal border border-gray-200 px-3 py-2 rounded-lg ${
                    page === data?.total_pages &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
        {/* ) : null} */}
      </table>
      <FormModal
        setShowAddUser={setShowAddUser}
        showAddUser={showAddUser}
        type={"updateUser"}
        data={userData}
      />
      <DeleteModal show={show} setShow={setShow} userId={userId} />
    </>
  );
};

export default UserTable;
