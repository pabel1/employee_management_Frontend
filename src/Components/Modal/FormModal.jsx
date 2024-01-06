import React from "react";
import { useForm } from "react-hook-form";
import {
  useAddUserMutation,
  useUpdateUserMutation,
} from "../../feature/user/userApiSlice";

const FormModal = ({ showAddUser, setShowAddUser, type, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addUser, { isLoading: addUserIsloading }] = useAddUserMutation();
  const [updateUser, { isLoading: updateUserIsloading }] =
    useUpdateUserMutation();
  const closeModal = () => {
    setShowAddUser(false);
  };

  const onSubmit = async (formData) => {
    try {
      if (type === "adduser") {
        const res = await addUser(formData);
        console.log(res);
      }
      if (type === "updateuser") {
        const res = await updateUser(formData);
        console.log(res, "update");
      }
      closeModal();
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
                {type === "adduser" ? "Add User" : "Update user"}
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
                  <div className="">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter  Name"
                      id="name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-red-500">Name is required</p>
                    )}
                  </div>
                  <div className="">
                    <label htmlFor="job">Job</label>
                    <input
                      type="text"
                      name="job"
                      placeholder="Enter Job"
                      id="job"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      {...register("job", { required: true })}
                    />
                    {errors.job && (
                      <p className="text-red-500">Job is required</p>
                    )}
                  </div>
                </div>
                <div className="submit flex justify-end">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white rounded-md px-3 py-2 mt-4"
                  >
                    {type === "adduser" ? "Add User" : "Update User"}
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
