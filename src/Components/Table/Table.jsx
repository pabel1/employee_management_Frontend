import moment from "moment";
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { LuPen } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Table = ({ data, meta, page, setPage, tableHeading }) => {
  const { user } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userData, setUserData] = useState();
  const [allChecked, setAllChecked] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);

  return (
    <>
      <table className="w-full divide-y divide-gray-200 table-fixed px-3">
        <thead className="bg-gray-100 px-4">
          <tr className="w-full">
            {tableHeading &&
              tableHeading.map((item, i) => (
                <th
                  scope=""
                  className="py-3 text-base font-medium tracking-wider text-left text-gray-500 w-[35%]"
                  key={i}
                >
                  <span className="flex items-center gap-1">
                    {item}
                    <AiOutlineArrowDown className="text-lg" />
                  </span>
                </th>
              ))}
            <th scope="" className="p-4 w-[10%]">
              <span className=""></span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y px-4 divide-gray-200 dark:divide-gray-700 text-left">
          {data?.map((item, i) => (
            <tr key={i} className="">
              {tableHeading.map((heading, index) => (
                <td
                  key={index}
                  className={`py-4 px-6 text-sm font-medium ${
                    index === 0 ? "text-gray-900" : "text-gray-500"
                  } whitespace-nowrap w-[35%]`}
                >
                  {index === 0 ? (
                    <div className="text-gray-500">
                      <h2 className="text-gray-900 font-semiBold">
                        {item["shiftName"]}
                      </h2>
                    </div>
                  ) : index === 1 ? (
                    <div className=" text-center">
                      <p className="text-gray-900 font-normal">
                        {item?.startTime}
                      </p>
                      to
                      <p className="text-xs font-normal">{item?.endTime}</p>
                    </div>
                  ) : index === 2 ? (
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-normal rounded-full bg-green-100 text-green-800">
                      {moment(item?.date).format("MMM D, YYYY")}
                    </span>
                  ) : index === 3 ? (
                    <button
                      className={`px-3 py-1 inline-flex text-xl leading-5 font-normal rounded-full bg-green-100 ${
                        user?.role === "Employee"
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() => navigate(`/assign-shift/${item._id}`)}
                      disabled={user?.role === "Employee"}
                    >
                      <IoEyeOutline />
                    </button>
                  ) : null}
                </td>
              ))}
              <td className="">
                <div className="flex gap-5 justify-center">
                  <RiDeleteBinLine
                    className="text-gray-600 cursor-pointer text-lg"
                    onClick={() => {
                      setShow(true);
                      // setUserId(user?.id);
                    }}
                  />
                  <LuPen
                    className="text-gray-600 cursor-pointer text-lg"
                    onClick={() => {
                      setShowAddUser(true);
                      // setUserData(user);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {meta && (
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
                    page {page} of {Math.ceil(meta.total / meta.limit)}
                  </h2>
                  <button
                    onClick={() => {
                      if (page < Math.ceil(meta.total / meta.limit)) {
                        setPage(page + 1);
                      }
                    }}
                    className={`font-normal border border-gray-200 px-3 py-2 rounded-lg ${
                      page === Math.ceil(meta.total / meta.limit) &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  );
};

export default Table;
