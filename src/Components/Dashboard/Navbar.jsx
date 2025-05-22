import React from "react";
import logoImg from "../../assets/Images/circlelogo.png";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 md:fixed fixed  z-10   bg-orange-300">
        <div className="w-full h-16  bg-[#FFFFFF] ">
          <div className=" w-full flex flex-row justify justify-between   ">
            <div className="  flex flex-row  md:px-10 px-5 md:gap-36 gap-10  ">
              <div className="md:w-full  w-full">
                <img
                  src={logoImg}
                  className="w-10 h-10 my-3 rounded-full"
                ></img>
              </div>
              <div className="md:w-full max-md:hidden  w-60 h-12 my-2 p-2 flex flex-row gap-2 rounded-full bg-[#FFFFFF]  border-2 border-[#E3E1E1] ">
                <FiSearch className=" text-[#959895] md:size-6 size-full md:mx-3 mx-0" />
                <input
                  className=" md:focus:outline-none font-myFont py-3 text-[#959895]"
                  type="text"
                  placeholder="Search..."
                ></input>
              </div>
            </div>
            <div className="flex md:flex-row md:gap-0  md:my-3 max-md:hidden  ">
              <div className="w-full my-2 flex flex-row  mx-3  ">
                <IoNotificationsSharp className="w-full size-7 text-[#00000088] " />
                <IoMdMail className="w-full size-7 text-[#00000088] " />
              </div>
              <div className="w-full flex flex-row  gap-6">
                <img src={logoImg} className=" w-12 h-12 rounded-full  "></img>
                <div className="w-40 my-1  ">
                  <p className="">John Doe</p>
                  <p className="text-orange-500">Admin</p>
                </div>
              </div>
            </div>

            <IoIosMenu className="lg:w-full block lg:hidden mx-10 my-3 text-black size-10 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
