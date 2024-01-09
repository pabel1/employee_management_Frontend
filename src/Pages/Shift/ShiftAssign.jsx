import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actionBtn } from "../../../Utility/ClassName";
import EmployeeProfileCard from "../../Components/Card/EmployeeProfileCard";
import { useGetAssignShiftDetailsQuery } from "../../feature/AssignShift/assignShiftApiSlice";

const ShiftAssign = () => {
  const { access_token } = useSelector((state) => state?.auth);
  const { shiftID } = useParams();

  const {
    data: assignShift,
    isLoading,
    isSuccess,
    isError,
  } = useGetAssignShiftDetailsQuery({
    access_token,
    shiftID,
  }) || {};

  let content = null;
  if (!isLoading && isSuccess && !isError && assignShift) {
    console.log(assignShift);
    const { result } = assignShift?.data || {};
    console.log(result);

    content = result?.map((item, i) => (
      <>
        <EmployeeProfileCard
          key={i}
          data={item?.Employee}
          shift={item?.Shift}
        />
      </>
    ));
  }
  return (
    <div>
      <div className=" flex items-center justify-end ">
        <Link
          to={`/employee/add-employee`}
          className={`py-2 my-3 ${actionBtn} w-fit px-5 self-end `}
        >
          + Assign Shift
        </Link>
      </div>

      <div className=" container grid grid-cols-4 gap-4 items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default ShiftAssign;
