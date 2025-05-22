import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import Img01 from "../../assets/Images/Burger01.png";
import Img02 from "../../assets/Images/Burger02.png";
import Img03 from "../../assets/Images/Burger03.png";
import Img04 from "../../assets/Images/Burger04.png";
import Img05 from "../../assets/Images/Burger05.png";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";

import "../../index.css";
import Aos from "aos";

const Deal = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="md:w-full w-full  bg-[#FBF9F0]">
        <Navbar />
        <div className=" w-full flex flex-col ">
          <div className="max-md:hidden">
            <Sidebar />
          </div>

          <div
            data-aos="zoom-in"
            className="md:w-[85%]  h-auto  my-28 md:p-0 md:ml-[13%] ml-5 "
          >
            <div className="w-full flex flex-row justify justify-between p-8">
              <div>
                <h2 className="font-exo font-semibold text-3xl ">Deals </h2>
                <h2 className=" font-exo font-semibold ">
                  Here is your deals management
                </h2>
              </div>
              <div className=" w-40 h-12 my-3  bg-orange-600 flex flex-row  rounded-full">
                <button className=" ">
                  <div className="w-full flex flex-row gap-3 mx-4">
                    <div className="text-center">
                      <img src={Addsign} className="w-6"></img>
                    </div>
                    <div className="text-center font-exo font-semibold  text-white py-1">
                      Add Deals
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className=" md:w-full w-full flex md:flex-row flex-col  md:p-9 p-0  md:gap-14 gap-0 md:my-auto  ">
              <div className=" md:w-[50%] w-[85%] md:h-80 h-auto md:m-auto m-5 rounded-2xl  bg-[#FDFDFB]">
                <img src={Img04} className="w-full"></img>
              </div>
              <div className=" md:w-[50%] w-[85%] md:h-80 h-auto md:m-auto m-5 rounded-2xl  bg-[#FDFDFB]">
                <img src={Img05} className="w-full"></img>
              </div>
            </div>

            <div className="md:w-full w-full  md:p-9  p-0 flex md:flex-row flex-col  md:gap-14 gap-0 my-12">
              <div className=" md:w-[35%] w-[85%] md:h-80 h-auto md:m-auto m-5 rounded-2xl  bg-[#FDFDFB]">
                <img src={Img01} className="w-full"></img>
              </div>
              <div className=" md:w-[35%] w-[85%] md:h-80 h-auto md:m-auto m-5  rounded-2xl  bg-[#FDFDFB]">
                <img src={Img02} className="w-full"></img>
              </div>
              <div className=" md:w-[35%] w-[85%] md:h-80 h-auto md:m-auto m-5  rounded-2xl  bg-[#FDFDFB]">
                <img src={Img03} className="w-full"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
