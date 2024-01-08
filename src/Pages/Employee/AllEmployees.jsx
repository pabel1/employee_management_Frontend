import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionBtn } from "../../../Utility/ClassName";
import EmployeeProfileCard from "../../Components/Card/EmployeeProfileCard";
import DeleteModal from "../../Components/Modal/DeleteModalToast";
import { useGetAllEmployeeQuery } from "../../feature/Employee/EmployeeApiSlice";

const AllEmployees = () => {
  const { access_token } = useSelector((state) => state?.auth);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const queryData = {
    // searchStr,
    // name,
    // _id,
    // email,
    // phone,
    // userStatus,
    page,
    limit,
  };
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllEmployeeQuery({ queryData, access_token }) || {};

  let content = null;
  if (!isLoading && isSuccess && !isError && users) {
    console.log(users);
    const { data, meta } = users || {};
    content = data?.map((item, i) => (
      <>
        <EmployeeProfileCard key={i} data={item} />
      </>
    ));
  }
  return (
    <div className=" ">
      <div className=" flex items-center justify-end ">
        <Link
          to={`/employee/add-employee`}
          className={`py-2 my-3 ${actionBtn} w-fit px-5 self-end `}
        >
          + Add Employee
        </Link>
      </div>

      <div className=" container grid grid-cols-4 gap-4 items-center justify-center">
        {content}
      </div>

      <DeleteModal />
    </div>
  );
};

export default AllEmployees;
