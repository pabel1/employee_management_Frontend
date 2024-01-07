import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/030---Paper-Stack.png";
import { useLoginUserMutation } from "../../feature/auth/authApiSlice";
import { userLoggedIn } from "../../feature/auth/authSlice";
import Button from "./Button";
import Input from "./Input";

const AuthForm = ({
  title,
  buttonText,
  onSubmit,
  linkText,
  link,
  linkTo,
  formType,
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation() || {};

  const handleForm = async (data) => {
    try {
      if (formType === "login") {
        const result = await loginUser({
          bodyData: data,
        });
        const { accessToken: token, user } = result?.data?.data || {};
        if (token) {
          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: token,
              user: user,
            })
          );
          navigate("/");
          toast.success("login Success!");
        } else {
          toast.error(result?.error?.data?.error || "login failed!");
        }
      }
    } catch (error) {
      // Handle login error
      toast.error("login failed!");
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="w-[400px] border p-10 rounded-lg shadow-md">
        <div className="">
          <div className="flex gap-1 items-center">
            <img className="h-6 w-10" src={logo} alt="logo" />
            <h2 className="font-bold text-xl text-[#4E5D78]">
              Employee Management
            </h2>
          </div>
          <p className="mt-4 font-semibold">{title}</p>
        </div>
        <form
          className="form mt-10 grid grid-cols-1 gap-5"
          onSubmit={handleSubmit(handleForm)}
        >
          <div className="">
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
          <div className="mt-3">
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
          </div>

          <div className="">
            <Button
              type="submit"
              customClass="bg-purple-600 text-white rounded-lg p-2 w-full"
              text={buttonText}
            />
            <p className="mt-3 text-gray-400 px-1">
              {linkText}{" "}
              <Link to={link} className="text-[#377DFF]">
                {linkTo}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
