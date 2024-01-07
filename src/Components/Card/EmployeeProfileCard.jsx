import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dummy from "../../assets/images/dummyprofile.webp";
const EmployeeProfileCard = ({ data }) => {
  const navigate = useNavigate();
  const { photo, name, email, userStatus, _id } = data || {};
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
        <div>
          {/* <AdminEmployeeProfileOptionsDropdown profileData={profileData} /> */}
        </div>
      </div>
      <div>
        <>
          <div className="flex justify-center items-center shadow-med">
            <div className="border-primaryColor border-2 p-1.5 -mb-8 rounded-full w-32 h-32 overflow-hidden bg-white">
              <img
                className="w-full h-full rounded-full object-cover"
                src={photo?.url ? photo?.url : dummy}
                alt=""
              />
            </div>
          </div>

          <div className="bg-[#8791E91A] p-5 rounded-xl">
            <div className="text-center mt-6">
              <p className="text-primaryColor text-lg font-medium">{name}</p>
              <p className="text-gray-600 text-sm">{email}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={() => navigate(`/employee/edit-employee/${_id}`)}
                className="group text-sm flex items-center border border-[#8791E94D] bg-white py-1.5 justify-center rounded-md font-medium"
              >
                <span className="ml-1 text-gray-500 group-hover:text-primaryColor">
                  Edit
                </span>
              </button>
              <button
                onClick={() => {
                  // Construct the Gmail link
                }}
                className="group text-sm flex items-center border border-[#8791E94D] bg-white py-1.f justify-center rounded-md font-medium"
              >
                <span className="ml-1 text-gray-500 group-hover:text-primaryColor">
                  Delete
                </span>
              </button>
            </div>
            <div className="flex flex-col w-full gap-y-2 mt-4">
              <Link
                to={`/employee/${_id}`}
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
