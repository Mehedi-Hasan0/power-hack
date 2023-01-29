import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/Sign up-cuate.png";
import Header from "../../shared/Header/Header";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signUpError, setSignUpError] = useState("");
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className=" flex md:flex-row flex-col justify-center items-center font-[poppins] max-w-6xl mx-auto my-5 py-10 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0 bg-white md:rounded-3xl shadow-lg">
        <div className="w-96 md:mr-14">
          <img className="inline" src={img} alt="" />
        </div>
        <div className=" p-8 md:shadow-lg shadow-none w-96 rounded-xl mt-8 sm:mt-0">
          <h3 className=" text-xl text-black text-center">Sign Up</h3>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className=" form-control w-full max-w-xs text-black">
              <label className="label">
                <span className=" label-text text-neutral">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                name="name"
                className="input input-bordered mb-2"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
              {errors.name && (
                <p className=" text-red-400 text-xs">{errors.name?.message}</p>
              )}
            </div>
            <div className=" form-control w-full max-w-xs text-black">
              <label className="label">
                <span className=" label-text text-neutral">Email</span>
              </label>
              <input
                {...register("email", { required: " Email is required" })}
                type="email"
                name="email"
                className="input input-bordered mb-2"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
              {errors.email && (
                <p className=" text-red-400 text-xs">{errors.email?.message}</p>
              )}
            </div>
            <div className=" form-control w-full max-w-xs text-black">
              <label className="label">
                <span className=" label-text text-neutral">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[a-z])/,
                    message:
                      " Password must have upper and lower case characters",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                type="password"
                name="password"
                className="input input-bordered"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
              {errors.password && (
                <p className=" text-red-400 text-xs my-2">
                  {errors.password?.message}
                </p>
              )}
              {/* {signUpError && (
              <p className=" text-red-400 text-xs my-2">
                {signUpError.slice(22, -2)}
              </p>
            )} */}
            </div>
            <input
              type="submit"
              className="btn btn-primary text-white w-full mt-4"
              value="sign up"
            />
          </form>
          <p className=" text-xs text-center mt-3 text-neutral">
            Already have an account?{" "}
            <Link
              className=" text-dark text-sm hover:text-primary hover:font-medium  underline"
              to="/login"
            >
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
