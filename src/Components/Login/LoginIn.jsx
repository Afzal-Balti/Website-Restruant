import React from "react";
import logoPic from "../../assets/Images/logo.png";
import fruits from "../../assets/Images/Furits.png";
import { useForm } from "react-hook-form";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import AppleIcon from "@mui/icons-material/Apple";
import facebook from "../../assets/Images/Facebook.png";
import google from "../../assets/Images/Google.png";
import apple from "../../assets/Images/Apple.png";
import { Checkbox } from "@mui/material";
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signupUser } from "../ReduxStore/CreateSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Loadering from "../SignUp/Loadering/Loadering";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
/>;

const LoginIn = () => {
  const loading = useSelector((state) => state?.resort?.loading);

  console.log("use selector response --------++++++++----------- ", loading);

  // console.log("use Selector is run _____________", selector);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onsubmit = async (values) => {
    console.log("dataaaaaaaaaaaa:::::::::::::::", values);

    const payload = {
      username: values.firstName,
      password: values.password,
    };

    const responseData = await dispatch(loginUser(payload));
    console.log("Login data respone is here ::::::::::::::", responseData);

    const accessToken = responseData?.payload?.token?.access;
    console.log("Access Token is Run ::::::::::::::", accessToken);

    Cookies.set("token", accessToken, {});

    const storedToken = Cookies.get("accessToken");
    console.log("COOKIES IS STORED IS THIS :::::::::::::; ", storedToken);

    if (responseData.payload === "User with this username does not exist!") {
      toast.warn("user already exist");
    }
    if (
      responseData.payload.error ===
      "Invalid password try with correct password"
    ) {
      toast.warn("incorrect user password");
    }

    if (loginUser.fulfilled.match(responseData)) {
      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
    }
  };

  return (
    <>
      <div className="w-full md:h-screen h-auto bg-[#FAF9F5] flex flex-row">
        <div className="w-1/2 ">
          <div className="w-full  md:mx-20 mx-24 my-10">
            <div className=" w-full">
              <img src={logoPic}></img>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit(onsubmit)} className="w-full h-auto">
                <div className="md:w-[40%] w-full  ">
                  <div className="md:w-full w-full ">
                    <h1 className=" w-full text-end md:px-14 font-medium px-10 font-exo2  text-3xl text-[#3C3C3C]">
                      Sign In
                    </h1>
                    <p className="md:w-full  w-full text-end  md:px-4 -10  font-exo2 text-[#959895] ">
                      Sign in to stay connected.
                    </p>
                  </div>
                </div>
                <div className="md:w-full  my-10 gap-6  flex md:flex-col flex-col ">
                  <div className="md:w-[60%] w-full">
                    <label className="text-[#959895]">Full Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
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
                  <div className="md:w-[60%] w-full">
                    <label className="text-[#959895] font-exo2">Password</label>
                    <input
                      type="password"
                      placeholder=""
                      className="w-full border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
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

                  <div className="md:w-[60%] justify justify-between flex md:flex-row flex-col ">
                    <div className="flex flex-row">
                      <Checkbox />
                      <p className="py-3 font-exo2">Remember me</p>
                    </div>
                    <div className="py-3">
                      <span
                        onClick={() => navigate("/resetpassword")}
                        className="text-[#EA6A12] font-exo2 cursor-pointer  hover:text-orange-500 "
                      >
                        Forgot password?
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-[60%] w-full  text-center  ">
                  <button
                    type="onsubmit"
                    className=" md:w-40 w-full h-12 items-center bg-[#EA6112] text-white font-exo2 py-3 rounded-3xl "
                  >
                    {loading ? <Loadering /> : <p>Sign In</p>}
                  </button>
                  <p className="md:w-full w-full my-4 text-[#959895] ">
                    Or sign in with other accounts?
                  </p>
                </div>
                <div className="md:w-[60%] w-full py-5 flex flex-row justify justify-center md:gap-10 gap-0 cursor-pointer ">
                  <div className="md:w-14 w-10 text-center py-3 rounded-full ">
                    {/* <FacebookIcon className="text-white text-4xl " /> */}
                    <img src={facebook}></img>
                  </div>
                  <div className="md:w-14 w-10 text-center py-3 rounded-full">
                    {/* <GoogleIcon className="" /> */}
                    <img src={google}></img>
                  </div>
                  <div className="md:w-14 w-10  text-center py-3 rounded-full">
                    {/* <AppleIcon /> */}
                    <img src={apple}></img>
                  </div>
                </div>
                <div className="md:w-full sm:w-full ">
                  <p className="text-center md:w-[60%] w-full  md:font-exo2 font-normal  text-[#959895] ">
                    Don’t Have an account?
                    <span
                      onClick={() => navigate("/")}
                      className=" w-full text-[#EA6112] mx-2  font-exo2 cursor-pointer hover:text-orange-500"
                    >
                      Click here to sign up
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-[85%]  max-md:hidden  bg-[#F7DCC8] rounded-bl-full ">
          <div className="w-full py-10 px-36 my-[25%] ">
            <img src={fruits} className="md:w-[70%] "></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginIn;
