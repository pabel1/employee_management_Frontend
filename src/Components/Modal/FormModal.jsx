import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useCreateAssignShiftMutation } from "../../feature/AssignShift/assignShiftApiSlice";
import { useGetAllEmployeeQuery } from "../../feature/Employee/EmployeeApiSlice";
import { useGetAllShiftQuery } from "../../feature/Shift/shiftApiSlice";
const FormModal = ({ showAddUser, setShowAddUser, type, data }) => {
  const { access_token } = useSelector((state) => state?.auth);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [selectedDate, setSelectedDate] = useState(null);
  const queryData = {
    page,
    limit,
  };
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllEmployeeQuery({ queryData, access_token }) || {};

  const {
    data: shifts,
    isLoading: shiftIsLoading,
    isSuccess: shiftIsSuccess,
    isError: shiftIsError,
  } = useGetAllShiftQuery({ queryData, access_token }) || {};

  const [createAssignShift] = useCreateAssignShiftMutation() || {};
  let userOptions = null;
  let shiftOptions = null;
  if (!isLoading && isSuccess) {
    console.log(users);
    const { data, meta } = users || {};
    userOptions = (
      <>
        (
        {data &&
          data?.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        )
      </>
    );
  }

  if (!isLoading && shiftIsSuccess) {
    const { data, meta } = shifts || {};

    shiftOptions = (
      <>
        (
        {data &&
          data?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.shiftName}
            </option>
          ))}
        )
      </>
    );
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    setShowAddUser(false);
  };

  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      const { shift, user } = formData;

      let bodyData = {
        shiftID: shift,
        assignEmployee: user,
        date: selectedDate,
      };
      const response = await createAssignShift({
        bodyData,
        access_token,
      });
      console.log(response);
      const { data } = response?.data || {};

      if (data) {
        closeModal();
        toast.success("Shift Assign Successfull! Try again");
      } else {
        toast.error(
          response?.error?.data?.message || "Shift Assign Failed! Try again"
        );
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={showAddUser ? "block" : "hidden"}>
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-transparent opacity-75 backdrop-blur-[1px]"></div>
      </div>

      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:justify-center h-[700px] items-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="p-5">
            <div className="header flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                {type === "Assign Shift" ? "Assign Shift" : "Assign Shift"}
              </h2>
              <div className="">
                <button
                  onClick={closeModal}
                  className="bg-gray-50 rounded-full"
                >
                  <span className="text-2xl" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
            </div>
            <div className="body mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-4">
                  <div className={`flex flex-col gap-y-1 my-2 text-sm`}>
                    <label htmlFor="">Shift</label>
                    <div
                      className={` text-gray-500 flex items-center border gap-2 bg-white rounded-md px-3 py-2  cursor-not-allowed
              }`}
                    >
                      <select
                        type="text"
                        name="gender"
                        className="outline-none border-none w-full  bg-transparent text-gray-500"
                        {...register("shift", { required: true })}
                      >
                        <option value="">Choose Shift</option>
                        {shiftOptions}
                      </select>
                    </div>
                  </div>
                  <div className={`flex flex-col gap-y-1 my-2 text-sm`}>
                    <label htmlFor="">User</label>
                    <div
                      className={` text-gray-500 flex items-center border gap-2 bg-white rounded-md px-3 py-2  cursor-not-allowed
              }`}
                    >
                      <select
                        type="text"
                        name="user"
                        className="outline-none border-none w-full  bg-transparent text-gray-500"
                        {...register("user", { required: true })}
                      >
                        <option value="">Choose User</option>
                        {userOptions}
                      </select>
                    </div>
                  </div>
                  <div className={`flex flex-col gap-y-1 my-2 text-sm`}>
                    <label htmlFor="">Shift Date</label>
                    <div
                      className={` text-gray-500 flex items-center border gap-2 bg-white rounded-md px-3 py-2`}
                    >
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select date"
                        className="outline-none border-none w-full bg-transparent text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit flex justify-end">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white rounded-md px-3 py-2 mt-4"
                  >
                    {"Assign Shift"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
