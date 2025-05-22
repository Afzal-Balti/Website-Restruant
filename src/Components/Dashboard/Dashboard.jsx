import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ReactChart from "./ReactChart/ReactChart";
import BasicBars from "./ReactChart/BarChart";
import frameOne from "../../assets/Images/Frame(2).png";
import frameTwo from "../../assets/Images/Frame(3).png";
import { LineChart } from "@mui/x-charts";
import LineDesign from "./ReactChart/LineChart";
import oneImage from "../../assets/Images/imageone.png";
import threeImage from "../../assets/Images/imagethree.png";
import sixImage from "../../assets/Images/imagesix.png";
import userInfo from "../../assets/Images/circlelogo.png";
import AreaChart from "./ReactChart/AreaChart";
import PorgressBar from "./ReactChart/ProgressBar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../index.css";
import Aos from "aos";

const Dashboard = () => {
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
            <h2 className="py-5 font-exo font-semibold text-3xl">Dashborad</h2>
            <div className="data-aos=zoom w-full h-96 bg-[#FDFDFB] rounded-md">
              <div className="w-full mx-3 py-3">
                <h2 className="font-exo font-medium ">Sale Figures</h2>
                <h3 className="w-full font-exo font-medium ">This year</h3>
              </div>
              <div className=" w-full h-72 ">
                <ReactChart className="bg-orange-400" />
              </div>
            </div>

            <div className="md:w-full w-full  flex md:flex-row flex-col gap-5">
              <div
                data-aos="zoom-in"
                className="md:w-[60%] w-full bg-[#FDFDFB] h-96 rounded-md my-8 "
              >
                <div className="w-full h-16  flex flex-row justify justify-between px-20 py-7 border-b-2  rounded-md">
                  <div className="text-[#353535] font-exo font-medium">
                    Product
                  </div>
                  <div className="text-[#353535] font-exo font-medium">
                    Customer
                  </div>
                  <div className="text-[#353535] font-exo font-medium">
                    Member
                  </div>
                </div>
                <div className="w-full px-10 py-6">
                  <p className=" leading-tight font-exo font-medium text-2xl text-[#353535]">
                    Proucts Sale
                  </p>
                  <p className="text-[#353535] font-exo font-medium text-sm">
                    500 products
                  </p>
                </div>

                <BasicBars />
              </div>

              <div className="md:w-[40%] w-full   h-96 rounded-md my-8 gap-3 flex flex-col ">
                <div className="  md:w-full w-full h-48  bg-[#FDFDFB] gap-y-5 rounded-md  flex flex-row justify justify-between py-10">
                  <div className="w-24 h-20  bg-[#EA6A1266] md:mx-8 mx-3 my-4 rounded-lg">
                    <img src={frameOne} className="w-20 mx-2 "></img>
                    <p className="px-7 py-2 font-exo font-medium">$18378</p>
                  </div>
                  <div className="md:w-52  w-full md:h-28 h-auto  md:mx-5 mx-0">
                    <h2 className="text-center font-exo font-medium">
                      Total Sales
                    </h2>
                    <LineDesign />
                  </div>
                </div>
                <div className="w-full h-48 bg-[#FDFDFB] gap-y-5 rounded-md flex flex-row justify justify-between py-10">
                  <div className="w-24 h-20  bg-[#EA6A1266] md:mx-8 mx-3 my-4 rounded-lg">
                    <img src={frameTwo} className="w-20 mx-2 "></img>
                    <p className="px-7 py-2 font-exo font-medium">$18378</p>
                  </div>
                  <div className="md:w-52 w-full h-28 md:mx-5 mx-0">
                    <h2 className="text-center font-exo font-medium">
                      Total Sales
                    </h2>
                    <LineDesign />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-full w-full bg-[#FDFDFB] md:h-72 h-auto rounded-md overflow-y-hidden">
              <div className="w-full h-16  flex flex-row justify justify-between px-10 py-4 border-b-2  rounded-md ">
                <div className="leading-tight font-exo font-medium text-2xl text-[#353535]">
                  Specialties Sales
                </div>
              </div>
              <div className="md:w-full flex md:flex-row items-center font-exo font-medium  flex-col  justify justify-between">
                {imageArr.map((item, index) => {
                  return (
                    <>
                      <div
                        className=" md:my-5 md:mx-20 mx-0 items-center "
                        key={index}
                      >
                        <img
                          src={item.img}
                          className="md:w-32  h-32 rounded-full "
                        ></img>
                        <p className="text-[#EA6A12] text-center py-2">
                          {item.per}
                        </p>
                        <p className="text-center ">{item.text}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="w-full h-auto bg-[#FDFDFB] my-5 py-5 rounded-xl">
              <div>
                <h2 className="font-exo font-medium leading-tight text-2xl text-[#353535] px-10 ">
                  User List
                </h2>
              </div>

              <div className="w-full h-12  flex flex-row max-md:hidden justify justify-between px-10 py-8  border-b-2  rounded-md ">
                <div className="font-exo font-medium leading-tight text-xl text-[#EA6A12]">
                  Customer
                </div>
                <div className="font-exo font-medium leading-tight text-xl text-[#EA6A12]">
                  Address
                </div>
                <div className="font-exo font-mediumleading-tight text-xl text-[#EA6A12]">
                  Contact
                </div>
                <div className="font-exo font-medium leading-tight text-xl text-[#EA6A12] md:px-20 px-0">
                  Email
                </div>
              </div>
              <div className="w-full mx-10 py-4 font-exo font-medium ">
                {infromationUser.map((item, idx) => {
                  return (
                    <>
                      <div className=" flex flex-row  py-3 ">
                        <div className="flex md:flex-row flex-col">
                          <img src={item.image} className="w-12 h-12 m-2"></img>
                          <p className=" text-center  py-5 mx-3 ">
                            {item.name}
                          </p>
                        </div>

                        <div className="w-full flex md:flex-row flex-col justify justify-around  py-5">
                          <p className="">{item.address}</p>

                          <p className=" ">{item.contact}</p>

                          <p className="">{item.email}</p>
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
            <div className="w-full h-60 bg-[#EA6A12]  rounded-xl">
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
            <div className="w-full h-auto bg-[#FDFDFB] my-5 rounded-md ">
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
            <div className="w-full h-72 bg-[#FDFDFB] my-5 rounded-xl">
              <div className="px-10 py-5 font-exo font-medium">
                <p>Earning Categories </p>
                <p>Heist Earnings Categories</p>
              </div>
              <div className="w-full  h-60 ">
                <AreaChart />
              </div>
            </div>
            <div className="w-full h-auto bg-[#FDFDFB] my-8 rounded-xl ">
              <div className="w-full h-28  flex flex-row justify justify-between px-10 py-4 border-b-2  rounded-md ">
                <div className="font-exo font-medium py-4 leading-tight text-xl text-[#353535]">
                  Top Menu Items
                </div>
              </div>
              <div className="w-full font-exo font-medium  ">
                {foodProgress.map((item, idx) => {
                  return (
                    <>
                      <div className="  flex flex-row m-3 " key={idx}>
                        <div className="w-full flex flex-row gap-5 mb-3">
                          <img
                            src={item.image}
                            className="w-14 h-14 rounded-full"
                          ></img>
                          <div className="w-full">
                            <p>{item.name}</p>
                            <PorgressBar />
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

export default Dashboard;
