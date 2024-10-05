import React from "react";
import Input from "../Components/Input";
import { features } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../services/auth";
import { authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  const { google, facebook, discord } = features;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submit = async (data) => {
    let session = await authService.userEmailLogin(data.email, data.password);
    if (session) {
      let userData = await authService.getUser();
      if (userData) dispatch(authLogin(userData));
      navigate("/");
    }
  };

  return (
    <main className="mt-[17vh] h-[83vh] flex justify-center items-center relative">
      <div className="bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 w-full h-full z-[-9]"></div>
      <img
        className="fixed w-full z-[-10] h-full top-0 left-0"
        src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="w-[90%] sm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[25%] bg-white rounded-lg p-7">
        <h1 className="font-semibold text-3xl">Login</h1>
        <form
          action=""
          onSubmit={handleSubmit(submit)}
          className="mt-3 flex flex-col"
        >
          <div className="flex gap-3 flex-col">
            <Input
              label={"Email"}
              icon={[
                <i className="fa-regular fa-envelope text-sm text-gray-500"></i>,
              ]}
              placeholder={"Enter email"}
              type={"text"}
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter Your email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm text-center">
                {errors.email.message}
              </p>
            )}
            <Input
              label={"Password"}
              icon={[
                <i className="fa-regular fa-envelope text-sm text-gray-500"></i>,
              ]}
              placeholder={"Enter password"}
              type={"password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "Enter a Password",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm text-center">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-amber-800 flex items-center justify-center gap-2 text-white py-2 mt-5 rounded-full disabled:text-gray-600 disabled:bg-gray-300"
          >
            {isSubmitting ? "Logging In" : "Login"}
            {isSubmitting && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin fill-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </button>
          <div className="flex items-center w-full justify-between mt-2">
            <span className="border-[1px] w-full"></span>
            <span className="px-2">or</span>
            <span className="border-[1px] w-full"></span>
          </div>

          <div className="flex mt-2 gap-2">
            <div className="px-4 py-2 border-[1px] w-full border-gray-300 rounded-lg">
              <img className="w-full h-7" src={google} alt="" />
            </div>
            <div className="px-4 py-2 border-[1px] w-full border-gray-300 rounded-lg">
              <img className="w-full h-7" src={facebook} alt="" />
            </div>
            <div className="px-4 py-2 border-[1px] w-full border-gray-300 rounded-lg">
              <img className="w-full h-7" src={discord} alt="" />
            </div>
          </div>

          <span className="font-semibold mt-4 text-sm">
            Already a Member?{" "}
            <Link to={"/signup"} className="text-amber-800">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </main>
  );
};

export default Login;
