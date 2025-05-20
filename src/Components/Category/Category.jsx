import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
// import ReactChart from "../Dashboard/ReactChart/ReactChart";
// import BasicBars from "../Dashboard/ReactChart/BarChart";
// import frameOne from "../../assets/Images/Frame(2).png";
// import frameTwo from "../../assets/Images/Frame(3).png";
// import { LineChart } from "@mui/x-charts";
// import LineDesign from "../Dashboard/ReactChart/LineChart";

import threeImage from "../../assets/Images/imagethree.png";
import sixImage from "../../assets/Images/imagesix.png";
// import userInfo from "../../assets/Images/circlelogo.png";
// import AreaChart from "../Dashboard/ReactChart/AreaChart";
// import PorgressBar from "../Dashboard/ReactChart/ProgressBar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";
import oneImage from "../../assets/Images/imageone.png";
import Eye from "../../assets/Images/view.png";
import Pencil from "../../assets/Images/pencil.png";
import Delete from "../../assets/Images/delete.png";
import AddDuplicate from "../../assets/Images/addduplicate.png";
import "../../index.css";
import Aos from "aos";
import ApexChart from "../Dashboard/ReactChart/PieChart";

const category = () => {
  const categoryImage = [
    {
      img: oneImage,
      caption: "Food/Noodle",
      text: "Spicy Mozarella with",
    },
    {
      img: threeImage,
      caption: "Food/Noodle",
      text: " Pizza",
    },
    {
      img: sixImage,
      caption: "Food/Noodle",
      text: "Nawabi Pizza",
    },
    {
      img: oneImage,
      caption: "Food/Noodle",
      text: "Spicy Mozarella with",
    },
    {
      img: threeImage,
      caption: "Food/Noodle",
      text: " Pizza",
    },
    {
      img: sixImage,
      caption: "Food/Noodle",
      text: "Nawabi Pizza",
    },
    {
      img: sixImage,
      caption: "Food/Noodle",
      text: "Nawabi Pizza",
    },
    {
      img: oneImage,
      caption: "Food/Noodle",
      text: "Spicy Mozarella with",
    },
    {
      img: threeImage,
      caption: "Food/Noodle",
      text: " Pizza",
    },
    {
      img: sixImage,
      caption: "Food/Noodle",
      text: "Nawabi Pizza",
    },
    {
      img: threeImage,
      caption: "Food/Noodle",
      text: " Pizza",
    },
    {
      img: sixImage,
      caption: "Food/Noodle",
      text: "Nawabi Pizza",
    },
  ];

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
            className="md:w-[85%] h-auto  my-28 md:p-0 md:ml-[13%] ml-5 "
          >
            <div className="w-full flex flex-row justify justify-between p-8">
              <div>
                <h2 className=" font-exo2 text-3xl font-bold">Menu </h2>
                <h2 className=" font-exo2 ">Here is your menu management </h2>
              </div>
              <div className=" w-40 h-12 my-3  bg-orange-600 flex flex-row  rounded-full">
                <button className=" ">
                  <div className="w-full flex flex-row gap-3 mx-4">
                    <div className="text-center">
                      <img src={Addsign} className="w-6"></img>
                    </div>
                    <div className="text-center font-bold text-white py-1">
                      Add Menu
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div
              className=" w-full 
              flex flex-row flex-wrap  justify-evenly gap-4"
            >
              {categoryImage.map((item, idx) => (
                <div key={idx} className="data-aos=zoom   rounded-full">
                  <div className="w-56  h-80  py-14 overflow-y-hidden relative">
                    <img
                      src={item.img}
                      className="w-28 rounded-full absolute -top-[-10px] left-10 mx-3  "
                    ></img>
                    <div className=" h-64 bg-white rounded-lg  ">
                      <div className=" text-md font-bold">
                        <div className=" h-16 text-center  py-20 px-10 ">
                          <p className="w-full">
                            {item.text}
                            <br />
                            <span className="text-center">Barbeque</span>
                          </p>
                          <p className="px-6 py-3">
                            <span className="text-orange-400">
                              {item.caption}
                            </span>
                          </p>
                        </div>

                        <div className=" p-8 my-6 flex flex-row gap-3 py-3 ">
                          <div className="w-10 h-8 bg-[#F0746466] rounded-md">
                            <img src={Eye} className="w-6 mx-1 my-1"></img>
                          </div>
                          <div className="w-10 h-8 bg-[#EA6A1266] rounded-md">
                            <img src={Pencil} className="w-6  m-1"></img>
                          </div>
                          <div className="w-10 h-8 bg-[#E5261466] rounded-md">
                            <img src={Delete} className="w-6 m-1"></img>
                          </div>
                          <div className="w-10 h-8 bg-[#D9D9D966] rounded-md">
                            <img src={AddDuplicate} className="w-6 m-1"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-full  p-8 flex flex-row justify-between ">
              <div>
                <p>Showing 15 from 100 Menu</p>
              </div>
              <div>
                <p>Pagination is here</p>
              </div>
            </div>
            <div className=" md:w-[96%] w-[85%] font-bold md:h-80 h-auto md:m-8  md:ml-auto ml-6  rounded-2xl my-20 p-8 flex flex-col justify-between bg-[#FDFDFB]">
              <div>
                <p>Menu Comparison</p>
              </div>
              <div className="md:w-full w-full md:my-0 my-8  ">
                <div className="w-1/2 md:ml-[5%] ml-4 ">
                  <ApexChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default category;
