import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import dummy from "../../assets/images/dummyprofile.webp";
import { setUserID } from "../../feature/Delete/deleteUserSlice";
import { showModal } from "../../feature/Modal/DeleteModalSlice";
const EmployeeProfileCard = ({ data, shift }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const navigate = useNavigate();
  console.log(shift);
  const { photo, name, email, userStatus, _id } = data || {};

  const handleEditORRemove = (shift, _id) => {
    if (!shift) {
      console.log("first");
      navigate(`/employee/edit-employee/${_id}`);
    }
  };
  return (
    <div className="border bg-white px-5 py-3 rounded-xl hover:shadow hover:border-primaryColor transition duration-300 text-white">
      <div className="flex justify-between items-center">
        <div
          className={`rounded text-xs font-bold py-1 px-3 
        ${
          userStatus === "Active"
            ? "bg-emerald-100 text-emerald-600"
            : "bg-orange-100 text-orange-600 "
        }`}
        >
          {userStatus}
        </div>
        <div></div>
      </div>
      <div>
        <>
          <div className="flex justify-center items-center shadow-med">
            <div className="border-primaryColor border-2 p-1.5 -mb-8 rounded-full w-24 h-24 overflow-hidden bg-white">
              <img
                className="w-full h-full rounded-full object-cover"
                src={photo?.url ? photo?.url : dummy}
                alt=""
              />
            </div>
          </div>

          <div className="bg-[#8791E91A] p-3 rounded-xl">
            <div className="text-center mt-6">
              <p className="text-primaryColor text-lg font-medium">{name}</p>
              <p className="text-gray-600 text-sm">{email}</p>
            </div>
            <div
              className={`grid  ${shift} ? " grid-cols-1" : " grid-cols-2" gap-2 mt-4 `}
            >
              <button
                onClick={() => handleEditORRemove(shift, _id)}
                className="group text-sm flex items-center border border-[#8791E94D] bg-white py-1.5 justify-center rounded-md font-medium"
              >
                <span className="ml-1 text-gray-500 group-hover:text-primaryColor">
                  {shift ? "Remove Shift" : "Edit"}
                </span>
              </button>

              <button
                onClick={() => {
                  dispatch(showModal());
                  dispatch(setUserID({ _id }));
                }}
                className={`group text-sm  items-center border border-[#8791E94D] bg-white py-1.f justify-center rounded-md font-medium ${
                  shift ? "hidden" : "flex"
                }`}
              >
                <span className="ml-1 text-gray-500 group-hover:text-primaryColor py-1.5">
                  Delete
                </span>
              </button>
            </div>
            <div className="flex flex-col w-full gap-y-2 mt-4">
              <Link
                to={`/employee/view-employee/${_id}`}
                className="text-center text-sm py-2 border border-primaryColor rounded-md font-medium bg-primaryColor hover:bg-transparent  hover:text-primaryColor transition duration-300"
              >
                View Profile
              </Link>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default EmployeeProfileCard;
