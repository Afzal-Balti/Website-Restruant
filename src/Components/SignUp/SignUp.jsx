import React from "react";
import logoPic from "../../assets/Images/logo.png";
import fruits from "../../assets/Images/Furits.png";
import facebook from "../../assets/Images/Facebook.png";
import google from "../../assets/Images/Google.png";
import apple from "../../assets/Images/Apple.png";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../ReduxStore/CreateSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loadering from "./Loadering/Loadering";

<link
  href="https://fonts.googleapis.com/css2?family=Boldonse&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Merriweather:wdth,wght@99.1,516&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
></link>;

const SignUp = () => {
  const loading = useSelector((state) => state?.resort?.loading);

  console.log("use selector response --------++++++++----------- ", loading);

  const dispatch = useDispatch();
  console.log("dispatch response is ------------------------ ", dispatch);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    values,
    initialValues,
  } = useForm({
    initialValues: {
      username: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_no: "",
    },
  });

  const navigate = useNavigate();

  const onsubmit = async (values) => {
    console.log("dataaaaaaaaaaaaaaaaa_________", values);

    let apiData = {
      username: values.firstName,
      last_name: values.last_name,
      email: values.mail,
      password: values.password,
      confirm_password: values.confirmPassword,
      phone_no: values.number,
    };

    const responseData = await dispatch(signupUser(apiData));

    console.log(
      "responseData is run __________++++++++________ ",
      responseData.type
    );

    // console.log("signput ::::::::: ", signupUser);

    if (responseData.payload === "User already exists. Try logging in.") {
      console.log("hello responseData paylaod ", responseData.payload);
      toast.warn("user already exist");
    }

    if (signupUser.fulfilled.match(responseData)) {
      toast.success("user is loign successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  console.log("pending status is ::::::;", signupUser.pending);
  return (
    <>
      <div className="w-full  md:h-screen h-auto bg-[#FAF9F5] flex flex-row">
        <div className="w-1/2  ">
          <div className="md:w-full w-full  md:mx-20 mx-24 my-10  ">
            <div className=" w-full">
              <img src={logoPic}></img>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit(onsubmit)} className="w-full h-auto">
                <div className="md:w-[40%] w-full ">
                  <div className="md:w-full w-full ">
                    <h1 className=" w-full font-exo font-semibold    text-end md:px-14 leading-tight px-8   text-3xl text-[#3C3C3C]">
                      Sign UP
                    </h1>
                    <p className="md:w-full w-full font-exo font-medium py-3  text-end  md:px-10 px-5   text-[#959895] ">
                      Create your account
                    </p>
                  </div>
                </div>
                <div className="md:w-full  my-10 gap-6  flex md:flex-row   flex-col ">
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895] font-exo font-medium ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full border-b border-gray-300 p-3 my-2 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
                      {...register("firstName", {
                        required: "First name is required",

                        minLength: {
                          value: 3,
                          message: "At least 3 characters",
                        },
                        maxLength: { value: 8, message: "Max 8 characters" },
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895] font-exo font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full border-b border-gray-300 my-2  p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
                      {...register("last_name", {
                        required: "Last Name is required",

                        minLength: {
                          value: 3,
                          message: "At least 8 characters",
                        },
                      })}
                    />
                    {errors.text && (
                      <p className="text-red-500 text-sm">
                        {errors.text.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:w-full  my-10 gap-6  flex md:flex-row  flex-col ">
                  <div className="md:w-[40%] w-full ">
                    <label className="text-[#959895] font-exo font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      className="w-full border-b border-gray-300 my-2  p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
                      {...register("mail", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                          message: "Invalid email format (example@gmail.com)",
                        },
                      })}
                    />
                    {errors.mail && (
                      <p className="text-red-500 text-sm">
                        {errors.mail.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895] font-exo font-medium">
                      Phone.No
                    </label>
                    <input
                      type="number"
                      placeholder=""
                      className="w-full border-b border-gray-300 my-2  p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
                      {...register("number", {
                        required: "Number  is required",
                        pattern: {
                          value: "/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/",
                          message: "Uppercase Number and symbole requried",
                        },
                        minLength: {
                          value: 8,
                          message: "Number 11 Digit",
                        },
                      })}
                    />
                    {errors.number && (
                      <p className="text-red-500 text-sm">
                        {errors.number.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:w-full  my-10 gap-6  flex md:flex-row flex-col  ">
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895] font-exo font-medium ">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder=""
                      className="w-full border-b border-gray-300 my-2  p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                          message:
                            "Password must contain at least one uppercase letter, one number, and one special character",
                        },
                        minLength: {
                          value: 8,
                          message: "At least 8 characters required",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895] font-exo font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder=""
                      className="w-full border-b border-gray-300 my-2  p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="md:w-[80%] w-full  text-center  ">
                  <div>
                    <button
                      type="submit"
                      className=" w-40  h-12 items-center bg-[#EA6112] text-white font-exo2 py-3 rounded-3xl "
                    >
                      {loading ? (
                        <Loadering />
                      ) : (
                        <p className="font-exo font-medium">Sign Up</p>
                      )}
                    </button>
                  </div>

                  <p className="md:w-full font-exo font-medium   md:my-4 md:py-0 py-10 sm:w-60 text-[#959895] ">
                    Or sign in with other accounts?
                  </p>
                </div>
                <div className="md:w-[80%] w-full py-5 flex flex-row justify justify-center md:gap-10 gap-0 cursor-pointer ">
                  <div className="md:w-14 w-10 text-center py-3 rounded-full ">
                    <img src={facebook}></img>
                  </div>
                  <div className="md:w-14 w-10 text-center py-3 rounded-full">
                    <img src={google}></img>
                  </div>
                  <div className="md:w-14 w-10  text-center py-3 rounded-full">
                    <img src={apple}></img>
                  </div>
                </div>
                <p className="text-center md:w-[80%] w-full font-exo font-medium   text-[#959895]">
                  Already have an account?
                  <span
                    onClick={() => navigate("/login")}
                    className="text-[#EA6112] md:w-[80%] w-full mx-2 font-exo font-medium  cursor-pointer hover:text-orange-500"
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  md:h-[85%] max-md:hidden  bg-[#F7DCC8] rounded-bl-full ">
          <div className="w-full py-10 px-36 my-[25%] ">
            <img src={fruits} className="md:w-[70%] "></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
