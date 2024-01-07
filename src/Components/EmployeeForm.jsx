import React from "react";
import dummy from "../assets/images/dummyprofile.webp";
import Form from "./Auth/Form";
const EmployeeForm = () => {
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
                className=" rounded-full flex items-center justify-between border-dashed border-2"
              >
                <img
                  style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                  }}
                  className="mx-auto my-auto"
                  src={
                    //   data.photo
                    //     ? data.photo
                    //     : data.gender === "Female"
                    //     ? selectedImage
                    //     : selectedImageMale
                    dummy
                  }
                  alt=""
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
          <Form buttonText={"Add User"} formType={"addUser"} />
        </div>
      </section>
    </div>
  );
};

export default EmployeeForm;
