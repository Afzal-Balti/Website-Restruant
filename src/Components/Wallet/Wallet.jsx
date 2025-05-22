import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import ReactChart from "../Dashboard/ReactChart/ReactChart";
import BasicBars from "../Dashboard/ReactChart/BarChart";
import frameOne from "../../assets/Images/Frame(2).png";
import frameTwo from "../../assets/Images/Frame(3).png";
import { LineChart } from "@mui/x-charts";
import LineDesign from "../Dashboard/ReactChart/LineChart";
import oneImage from "../../assets/Images/imageone.png";
import threeImage from "../../assets/Images/imagethree.png";
import sixImage from "../../assets/Images/imagesix.png";
import userInfo from "../../assets/Images/circlelogo.png";
import AreaChart from "../Dashboard/ReactChart/AreaChart";
import PorgressBar from "../Dashboard/ReactChart/ProgressBar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../index.css";
import Aos from "aos";

const Wallet = () => {
  const imageArr = [
    {
      img: oneImage,
      per: "65%",
      text: "Mix Veggie Pizza",
    },
    {
      img: threeImage,
      per: "85%",
      text: " Pizza",
    },
    {
      img: sixImage,
      per: "95%",
      text: "Nawabi Pizza",
    },
  ];

  const infromationUser = [
    {
      image: userInfo,
      name: "Afzal",
      address: "bahawalpur sattlite town",
      contact: "03445567249",
      email: "afzalali12@gmail.com",
    },
    {
      image: userInfo,
      name: "Ali",
      address: "gilgit sattlite town",
      contact: "03455567249",
      email: "ali23@gmail.com",
    },
    {
      image: userInfo,
      name: "Yasir",
      address: "unichiok sattlite town",
      contact: "034455567249",
      email: "yasir@gmail.com",
    },
    {
      image: userInfo,
      name: "Hussain",
      address: "katpana sattlite town",
      contact: "0342367249",
      email: "rabbani@gmail.com",
    },
  ];

  const foodPost = [
    {
      image: userInfo,
      name: "Sausage Pizza",
      date: "20.01.2024",
      price: "$200",
    },
    {
      image: oneImage,
      name: "Sausage Pizza",
      date: "20.01.2024",
      price: "$200",
    },
    {
      image: threeImage,
      name: "Sausage Pizza",
      date: "20.01.2024",
      price: "$200",
    },
    {
      image: sixImage,
      name: "Sausage Pizza",
      date: "20.01.2024",
      price: "$200",
    },
    {
      image: oneImage,
      name: "Sausage Pizza",
      date: "20.01.2024",
      price: "$200",
    },
    {
      image: threeImage,
      name: "Sausage Pizza",
      date: "20.01.2024",
      price: "$200",
    },
  ];

  const foodProgress = [
    {
      image: userInfo,
      name: "Sausage Pizza",
    },
    {
      image: oneImage,
      name: "Sausage Pizza",
    },
    {
      image: threeImage,
      name: "Sausage Pizza",
    },
    {
      image: sixImage,
      name: "Sausage Pizza",
    },
    {
      image: oneImage,
      name: "Sausage Pizza",
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
        <div className="flex md:flex-row flex-col w-full  ">
          <div className="max-md:hidden">
            <Sidebar />
          </div>

          <div
            data-aos="zoom-in"
            className="md:w-[65%]  my-24 md:p-0 p-5 mx-5 md:ml-[12%] ml-5 "
          >
            <h2 className="py-5 font-exo font-semibold text-3xl">
              Wallet / Payment Gateway
            </h2>
            <div className="data-aos=zoom w-full h-[35%]  bg-[#FDFDFB] rounded-2xl">
              <div className="w-full mx-3 py-3">
                <h2 className="font-exo font-medium ">Sale Figures</h2>
                <h3 className="w-full font-exo font-medium ">This year</h3>
              </div>
              {/* <div className=" w-full h-72 ">
                <ReactChart className="bg-orange-400" />
              </div> */}
            </div>

            <div className="w-full h-auto bg-[#FDFDFB] my-10 rounded-md ">
              <div className="w-full h-16  flex flex-row justify justify-between px-10 py-4 border-b-2  rounded-md ">
                <div className="font-exo font-medium leading-tight text-xl text-[#353535]">
                  Last Transaction
                </div>
              </div>
              <div className="w-full font-exo font-medium   ">
                {foodPost.map((item, idx) => {
                  return (
                    <>
                      <div className="  flex flex-row m-3 " key={idx}>
                        <div className="w-full flex flex-row gap-5 mb-3">
                          <img
                            src={item.image}
                            className="w-14 h-14 rounded-full"
                          ></img>
                          <div>
                            <p>{item.name}</p>
                            <p className="text-[#959895]">{item.date}</p>
                          </div>
                        </div>
                        <div>
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="md:w-[25%] w-full  md:my-36  p-5  md:mr-5 mr-0"
          >
            <div className="w-full h-[40%] my-2 bg-[#EA6A12]  rounded-xl">
              <div className="px-8 py-7">
                <p className="text-white font-exo font-medium">Total earning</p>
                <p className="text-white font-exo font-medium text-2xl">
                  $4,586,963
                </p>
                <div className="w-full px-16 h-32 bg-[#FFFFFF] py-3 my-3 rounded-xl">
                  <p className="text-center font-exo font-medium">
                    Total Profit
                  </p>
                  <div className="w-full h-20 ">
                    <LineDesign />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto bg-[#FDFDFB] my-10 rounded-md ">
              <div className="w-full h-16  flex flex-row justify justify-between px-10 py-4 border-b-2  rounded-md ">
                <div className="font-exo font-medium leading-tight text-xl text-[#353535]">
                  Last Transaction
                </div>
              </div>
              <div className="w-full font-exo font-medium   ">
                {foodPost.map((item, idx) => {
                  return (
                    <>
                      <div className="  flex flex-row m-3 " key={idx}>
                        <div className="w-full flex flex-row gap-5 mb-3">
                          <img
                            src={item.image}
                            className="w-14 h-14 rounded-full"
                          ></img>
                          <div>
                            <p>{item.name}</p>
                            <p className="text-[#959895]">{item.date}</p>
                          </div>
                        </div>
                        <div>
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
