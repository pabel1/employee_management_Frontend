import toast from "react-hot-toast";
import { useDeleteUserMutation } from "../../feature/user/userApiSlice";

const DeleteModal = ({ show, setShow, userId }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser({ id });
      setShow(false);
      console.log(res);
      if (res === null) {
        toast.success("User deleted successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={show ? "block" : "hidden"}>
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-transparent opacity-75 backdrop-blur-[1px]"></div>
      </div>

      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="p-5">
            <div className="header flex justify-between items-center">
              <h2 className="text-lg font-semibold">Delete User</h2>
              <button
                onClick={() => setShow(false)}
                className="bg-gray-50 rounded-full"
              >
                <span className="text-2xl" aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="body mt-8">
              <div className="text-center sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Delete User
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    Are you sure you want to delete This user? All of your data
                    will be permanently removed. This action cannot be undo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              {isLoading ? (
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Deleting...
                </button>
              ) : (
                <button
                  onClick={() => handleDelete(userId)}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Delete
                </button>
              )}
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                onClick={() => setShow(false)}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
