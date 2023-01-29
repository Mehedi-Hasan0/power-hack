import React from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/Computer login-bro.png";
import Header from "../../shared/Header/Header";

const Login = () => {
  // pending to impliment the logic of signin only ui done now
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  //   const [loginError, setLoginError] = useState("");
  //   const location = useLocation();
  //   const navigate = useNavigate();

  //   const from = location.state?.from?.pathname || "/";

  return (
    <>
      <Header />
      <div className=" flex md:flex-row flex-col justify-center items-center font-[poppins] max-w-6xl mx-auto my-5 py-10 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0 bg-white md:rounded-3xl shadow-lg">
        <div className="md:w-96 w-80 md:mr-14">
          <img className="inline" src={img} alt="" />
        </div>
        <div className=" p-8 md:shadow-lg shadow-none md:max-w-96 max-w-80 rounded-xl">
          <h3 className=" text-xl text-black text-center">Login</h3>
          <form>
            <div className=" form-control w-full max-w-xs text-black">
              <label className="label">
                <span className=" label-text text-neutral">Email</span>
              </label>
              <input
                type="text"
                //   {...register("email", { required: "Email is required" })}
                className="input input-bordered mb-2"
              />
              {/* {errors.email && (
              <p className="text-red-400 text-xs">{errors.email?.message}</p>
            )} */}
            </div>
            <div className=" form-control w-full max-w-xs text-black">
              <label className="label">
                <span className=" label-text text-neutral">Password</span>
              </label>
              <input
                type="password"
                //   {...register("password", {
                //     required: "Password is required",
                //     minLength: {
                //       value: 6,
                //       message: "Password must be 6 characters or longer",
                //     },
                //   })}
                className="input input-bordered"
              />
              <label className="label">
                <small className=" text-neutral mb-2">Forgot Password?</small>
              </label>
              {/* {errors.password && (
              <p className="text-red-400 text-xs mb-5">
                {errors.password?.message}
              </p>
            )} */}
            </div>
            <div>
              {/* {loginError && (
              <p className="text-red-400 text-xs mb-3">
                {loginError.slice(22, -2)}
              </p>
            )} */}
            </div>
            <input
              type="submit"
              className="btn btn-primary text-white w-full"
              value="login"
            />
          </form>
          <p className=" text-xs text-center mt-3 text-neutral">
            New to Power-Hack?{" "}
            <Link
              className=" text-dark text-sm hover:text-primary hover:font-medium underline"
              to="/signup"
            >
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
