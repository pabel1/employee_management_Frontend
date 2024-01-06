import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import FormModal from "../../Components/Modal/FormModal";
import UserTable from "../../Components/Table/UserTable";
import { useGetAllUsersQuery } from "../../feature/user/userApiSlice";
const Users = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [page, setPage] = useState(1);
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllUsersQuery({ page }, { refetchOnMountOrArgChange: true }) || {};

  // if (!isLoading && !isSuccess && !error && users) {
  //   console.log(users);
  //   content = <> </>;
  // }

  return (
    <div className="container mx-auto px-2 ">
      <div className="container flex justify-between mt-10 mb-6 items-center">
        <h2 className="text-2xl font-semiBold">Users</h2>
        <div className="buttons flex items-center gap-4">
          <button className="text-gray-700 border border-gray-700 rounded-lg px-4 py-2 flex justify-center items-center gap-2">
            <LuUploadCloud />
            Import
          </button>
          <button
            className="bg-[#6941C6] text-white rounded-lg px-4 py-2 flex justify-center items-center gap-2"
            onClick={() => {
              setShowAddUser(true);
            }}
          >
            <FiPlus />
            Add User
          </button>
        </div>
      </div>
      <div className="mb-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  {users && (
                    <UserTable data={users} page={page} setPage={setPage} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal
        setShowAddUser={setShowAddUser}
        showAddUser={showAddUser}
        type={"adduser"}
      />
    </div>
  );
};

export default Users;
