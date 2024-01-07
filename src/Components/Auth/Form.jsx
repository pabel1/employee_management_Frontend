import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import PasswordLevelChecker from "./PasswordLevelChecker";

const Form = ({ formType }) => {
  const [passwordLabel, setPasswordLabel] = useState("very weak");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  //   const handleForm = async (data) => {
  //     try {
  //       if (formType === "signup") {
  //         const formData = new FormData();

  //         for (const key in data) {
  //           formData.append(key, data[key]);
  //         }
  //         if (selectedImage) {
  //           formData.append("user_image", selectedImage);
  //         }
  //         const result = await signUpUser({ bodyData: formData });
  //         const { accessToken: token } = result?.data?.data || {};
  //         if (token) {
  //           navigate("/users");
  //           toast.success("SignUp Success!");
  //         } else {
  //           toast.error(result?.error?.data?.error || "SignUp failed!");
  //         }
  //       }
  //     } catch (error) {
  //       // Handle login error
  //       console.error("Login failed", error);
  //     }
  //   };

  //   const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     // Update the selectedImage state
  //     setSelectedImage(file);

  //     // Display the image preview
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result);
  //     };
  //     if (file) {
  //       reader.readAsDataURL(file);
  //     }
  //   };

  useEffect(() => {
    const passwordLength = watch("password")?.length || 0;

    if (passwordLength < 3) {
      setPasswordLabel("very weak");
    } else if (passwordLength < 5) {
      setPasswordLabel("weak");
    } else if (passwordLength < 6) {
      setPasswordLabel("medium");
    } else if (passwordLength < 8) {
      setPasswordLabel("strong");
    } else {
      setPasswordLabel("very strong");
    }
  }, [watch("password")]);
  return (
    <div className=" px-3">
      <form
        className="form mt-3 grid grid-cols-2 md:grid-cols-1 gap-3 items-center justify-center"
        // onSubmit={handleSubmit(handleForm)}
      >
        <div className="mt-2">
          <label htmlFor="email" className="text text-base my-4 font-medium">
            Name
          </label>

          <Input
            type="text"
            placeholder="Enter Name"
            error={errors?.name}
            customClassName="py-2 px-3 focus:ring-purple-200 focus:border-purple-400 "
            hookRef={{ ...register("name", { required: true }) }}
          />
          {errors?.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mt-2">
          <label htmlFor="email" className="text text-base my-4 font-medium">
            Email
          </label>

          <Input
            type="text"
            placeholder="Enter Email"
            error={errors?.email}
            customClassName="py-2 px-3 focus:ring-purple-200 focus:border-purple-400 "
            hookRef={{ ...register("email", { required: true }) }}
          />
          {errors?.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="phone" className="text text-base my-4 font-medium ">
            Phone
          </label>

          <Input
            type="text"
            placeholder="Enter Number"
            error={errors?.phone}
            customClassName="py-2 px-3 focus:ring-purple-200 focus:border-purple-400"
            hookRef={{ ...register("phone", { required: true }) }}
          />

          {errors?.phone && (
            <p className="text-[10px] text-red-500 -mt-2">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="text text-base my-4 font-medium "
          >
            Password
          </label>

          <Input
            type="password"
            placeholder="Enter Password"
            error={errors?.password}
            customClassName="py-2 px-3 focus:ring-purple-200 focus:border-purple-400"
            hookRef={{ ...register("password", { required: true }) }}
          />

          {errors?.password && (
            <p className="text-[10px] text-red-500 -mt-2">
              {errors.password.message}
            </p>
          )}
          {/* password level tracking */}
          {formType === "addUser" && watch("password") && (
            <PasswordLevelChecker passwordLabel={passwordLabel} />
          )}
        </div>

        <div className="w-fit ">
          <Button
            type="submit"
            customClass="bg-purple-600 text-white rounded-lg p-2 px-8 w-full"
            text={formType === "viewUser" ? "" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
