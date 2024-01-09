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
  if (!isLoading && isSuccess && !isError && assignShift) {
    const { result } = assignShift?.data || {};
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

  const handleAssignShift = () => {
    setShowAddUser(true);
  };
  return (
    <div>
      <div className=" flex items-center justify-end ">
        <button
          onClick={() => handleAssignShift()}
          className={`py-2 my-3 ${actionBtn} w-fit px-5 self-end `}
        >
          + Assign Shift
        </button>
      </div>

      <div className=" container grid grid-cols-4 gap-4 items-center justify-center">
        {content}
      </div>
      <FormModal showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
    </div>
  );
};

export default ShiftAssign;
