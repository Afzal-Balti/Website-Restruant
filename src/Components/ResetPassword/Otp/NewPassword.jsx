import React from "react";
import logoPic from "../../../assets/Images/logo.png";
import { useForm } from "react-hook-form";
import oneImage from "../../../assets/Images/imageone.png";
import threeImage from "../../../assets/Images/imagethree.png";
import sixImage from "../../../assets/Images/imagesix.png";
import sevenImage from "../../../assets/Images/imageseven.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { conformPassword, setEmail } from "../../ReduxStore/CreateSlice";
import { toast } from "react-toastify";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
/>;

const NewPassword = () => {
  const loading = useSelector((state) => state?.resort?.email);
  console.log("selsector is -----------", loading);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onsubmit = async (values) => {
    console.log("vlaue of New password is ---------------", values);

    const payload = {
      email: loading,
      new_password: values.password,
    };

    const response = dispatch(conformPassword(payload));
    console.log("NEW PASSWORD RESPONSE IS  ------------ ", response);

    if (response) {
      dispatch(setEmail(payload.email));
      navigate("/login");
    }

    if (conformPassword.fulfilled.match(response)) {
      toast.success("Create New Password");
      setTimeout(() => {
        navigate("/login");
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
                    Reset Password
                  </h1>
                </div>
                <div className="md:w-1/2 w-full md:px-16 px-0 ">
                  <p className="text-[#959895]">
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>
                </div>
                <div className="md:w-full  my-10 gap-6  flex md:flex-row flex-col  ">
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895] font-exo2">Password</label>
                    <input
                      type="text"
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
                  <div className="md:w-[40%] w-full">
                    <label className="text-[#959895]">Confirm Password</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 rounded-3xl"
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
                  <button
                    type="onsubmit"
                    className=" w-[50%] font-bold  h-12 items-center bg-[#EA6112] text-white font-exo2 py-3 rounded-3xl "
                  >
                    {/* {loading ? <Loadering /> : <p>Reset</p>} */}
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

export default NewPassword;
