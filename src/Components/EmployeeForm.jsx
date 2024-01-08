import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import dummy from "../assets/images/dummyprofile.webp";
import { setProfileImage } from "../feature/Image/ImageUplodeHelperSlice";
import Form from "./Auth/Form";
const EmployeeForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileImage = useSelector(
    (state) => state?.imageUploader?.profileImage
  );
  const [previewImage, setPreviewImage] = useState(profileImage || dummy);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      dispatch(setProfileImage(file));
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  let formType = "addUser"; // Default form type for Add Employee
  if (pathname === "/employee/add-employee") {
    formType = "addUser";
  } else if (pathname === `/employee/edit-employee/${id}`) {
    formType = "editUser";
  } else {
    formType = "viewUser";
  }
  return (
    <div className="grid grid-cols-3 space-x-6 py-4 bg-white px-3 rounded-lg mt-4">
      <section className=" col-span-1">
        <div className="w-full py-10 border-gray-100 border  mx-auto bg-white rounded-lg  shadow-md  relative">
          <div className="absolute top-4 right-4">
            <span className="text-green-600 bg-green-100 px-5 py-1 rounded-lg">
              {/* {data?.userStatus} */}
            </span>
          </div>
          <div className="items-center flex justify-center flex-col ">
            <div className="px-4 flex justify-center items-center ">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
                className="rounded-full flex items-center justify-between border-dashed border-2"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <img
                  style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                  }}
                  className="mx-auto my-auto"
                  src={previewImage}
                  alt=""
                  onClick={open}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-7  mt-10">
            <div>
              <h1 className="text-gray-600 font-semibold">Banned</h1>
              <h1 className="text-gray-500 text-sm mb-2">
                Apply Disable Account
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-2 p-5 shadow-md rounded-lg border-gray-100 border bg-white">
        <div>
          <Form formType={formType} />
        </div>
      </section>
    </div>
  );
};

export default EmployeeForm;
