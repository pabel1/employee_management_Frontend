import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmployeeProfileCard from "../../Components/Card/EmployeeProfileCard";
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
    <div className=" container grid grid-cols-4 gap-4 items-center justify-center">
      {content}
    </div>
  );
};

export default AllEmployees;
