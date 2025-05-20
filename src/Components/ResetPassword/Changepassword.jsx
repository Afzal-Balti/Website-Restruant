import React, { useState } from "react";
import logoPic from "../../assets/Images/logo.png";
import fruits from "../../assets/Images/Furits.png";
import { useForm } from "react-hook-form";
import oneImage from "../../assets/Images/imageone.png";
import threeImage from "../../assets/Images/imagethree.png";
import sixImage from "../../assets/Images/imagesix.png";
import sevenImage from "../../assets/Images/imageseven.png";
import Otpcode from "./Otp/Otpcode";
import { useDispatch, useSelector } from "react-redux";
import { forget } from "../ReduxStore/CreateSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
/>;

const Changepassword = () => {
  const [otp, setOtp] = useState(null);
  const selector = useSelector((state) => state?.resort.email);
  console.log("selector is ::::::", selector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onsubmit = async (values) => {
    console.log("change password values is :      ::", values);

    const payload = {
      email: selector,
      otp: otp,
    };

    const response = await dispatch(forget(payload));
    console.log("responed is forget password", response);

    // if (response) {
    //   navigate("/newpassword");
    // }

    if (forget.fulfilled.match(response)) {
      toast.success("OTP Send Email");
      setTimeout(() => {
        navigate("/newpassword");
      }, 1000);
    }
  };

  return (
    <>
      <div className="main w-full h-screen  bg-[#FAF9F5] flex flex-row">
        <div className="w-1/2 h-screen ">
          <div className="w-full  mx-20 my-10">
            <div className=" w-full">
              <img src={logoPic}></img>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit(onsubmit)} className="w-full h-auto">
                <div className="w-[40%] ">
                  <h1 className="text-end px-14  py-3 font-medium text-3xl text-[#3C3C3C]">
                    Forget Password
                  </h1>
                </div>
                <div className="md:w-1/2 w-full md:px-16 px-0 ">
                  <p className="text-[#959895]">
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>
                </div>
                <div className="md:w-full  my-10 gap-6  flex md:flex-col flex-col ">
                  <div className="md:w-[60%] w-full ">
                    <Otpcode setOtp={setOtp} />
                  </div>
                </div>

                <div className="md:w-[50%] w-full  text-center  ">
                  <button className=" w-40 font-bold  h-12 items-center mt-5 bg-[#EA6112] text-white font-exo2 py-2 rounded-3xl ">
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full md:h-[85%] max-md:hidden  bg-[#F7DCC8] rounded-bl-full ">
          <div className="w-40 flex md:flex-row h-32 rounded-full mx-5 gap-60 my-28 ">
            <img src={sevenImage} className="rounded-full -ml-16  "></img>
            <img src={threeImage} className="rounded-full "></img>
            <img src={sixImage} className="rounded-full"></img>
          </div>
          <div className="w-40 flex md:flex-row h-32 rounded-full my-24 gap-56 mx-10 ">
            <img src={oneImage} className="rounded-full "></img>
            <img src={sixImage} className="rounded-full"></img>
          </div>
          <div className="w-40 flex md:flex-row h-32 rounded-full my-44 mx-80 gap-60 ">
            <img src={sixImage} className="rounded-full"></img>
            <img src={threeImage} className="rounded-full "></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Changepassword;
