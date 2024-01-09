import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionBtn } from "../../../Utility/ClassName";
import EmployeeProfileCard from "../../Components/Card/EmployeeProfileCard";
import FormModal from "../../Components/Modal/FormModal";
import { useGetAssignShiftDetailsQuery } from "../../feature/AssignShift/assignShiftApiSlice";

const ShiftAssign = () => {
  const { access_token } = useSelector((state) => state?.auth);
  const { shiftID } = useParams();
  const [showAddUser, setShowAddUser] = useState(false);

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
  let shiftContent = null;
  if (!isLoading && isSuccess && !isError && assignShift) {
    console.log(assignShift);
    const { result } = assignShift?.data || {};
    content = result?.map((item, i) => (
      <>
        <EmployeeProfileCard
          key={i}
          data={item?.Employee}
          shift={item?.Shift}
          assignID={item?._id}
        />
      </>
    ));
    shiftContent = (
      <>
        <div>
          <h1 className=" text-2xl text-gray-500 font-medium ">
            {result[0]?.Shift?.shiftName} Shift
          </h1>
          <p className=" text-lg text-gray-500 font-medium ">
            {/* {moment(result[0]?.Shift?.date).format("MMM D, YYYY")} */}
            {result[0]?.Shift?.startTime} to {result[0]?.Shift?.endTime}
          </p>
        </div>
      </>
    );
  }

  const handleAssignShift = () => {
    setShowAddUser(true);
  };
  return (
    <div>
      <div className=" flex items-center justify-between ">
        <div className="  px-8  my-2 ">{shiftContent} </div>

        <button
          onClick={() => handleAssignShift()}
          className={`py-2 my-3 ${actionBtn} w-fit px-5 self-end `}
        >
          + Assign Shift
        </button>
      </div>

      <div className=" container grid grid-cols-4 gap-4 items-center justify-center mt-6">
        {content}
      </div>
      <FormModal showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
    </div>
  );
};

export default ShiftAssign;
