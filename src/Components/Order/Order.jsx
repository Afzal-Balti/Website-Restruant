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
// Restruant / src / Components / Dashboard / MenuCategory;
import ApexChart from "../Dashboard/ReactChart/PieChart";

const Order = () => {
  const orderList = [
    {
      Order: "ORD001",
      Date: "2025-05-10",
      CustomerName: "Ali Raza",
      Location: "Lahore",
      Amount: 2500,
      Status: "Delivered",
    },
    {
      Order: "ORD002",
      Date: "2025-05-11",
      CustomerName: "Sara Khan",
      Location: "Karachi",
      Amount: 3800,
      Status: "Pending",
    },
    {
      Order: "ORD003",
      Date: "2025-05-12",
      CustomerName: "Usman Tariq",
      Location: "Islamabad",
      Amount: 1450,
      Status: "Shipped",
    },
    {
      Order: "ORD004",
      Date: "2025-05-13",
      CustomerName: "Nida Qureshi",
      Location: "Multan",
      Amount: 3200,
      Status: "Cancelled",
    },
    {
      Order: "ORD005",
      Date: "2025-05-14",
      CustomerName: "Bilal Ahmed",
      Location: "Faisalabad",
      Amount: 2750,
      Status: "Delivered",
    },
    {
      Order: "ORD006",
      Date: "2025-05-15",
      CustomerName: "Ayesha Noor",
      Location: "Rawalpindi",
      Amount: 4100,
      Status: "Processing",
    },
    {
      Order: "ORD007",
      Date: "2025-05-16",
      CustomerName: "Zain Ali",
      Location: "Peshawar",
      Amount: 2300,
      Status: "Pending",
    },
    {
      Order: "ORD008",
      Date: "2025-05-17",
      CustomerName: "Hina Sheikh",
      Location: "Quetta",
      Amount: 1950,
      Status: "Delivered",
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
            className="md:w-[85%]  h-auto  my-28 md:p-0  mx-5 md:ml-[13%] ml-5 "
          >
            <div className="md:w-full w-full flex flex-row justify justify-between md:p-8 p-4">
              <div className="md:w-full w-full ">
                <h2 className=" font-exo2 text-3xl font-bold">Orders</h2>
                <h2 className=" font-exo2 ">Here is your menu management </h2>
              </div>
              <div className=" w-40 h-12 md:my-3 my-0 bg-orange-600 rounded-full">
                <div className="md:m-3 m-0   flex flex-row  ">
                  <div className="w-8 md:my-0 my-3 md:m-0 m-2 ">
                    <img src={Addsign} className=""></img>
                  </div>
                  <div className="md:w-full  w-full text-center font-bold text-white py-1">
                    Order Status
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[96%] w-full bg-[#FDFDFB] h-auto mx-8 rounded-md overflow-y-hidden">
              <div className="w-full h-20 font-bold flex flex-row justify justify-between px-10 py-4 border-b-2  rounded-md ">
                <div className="w-full flex flex-row justify justify-between">
                  <p className="py-2">Order</p>
                  <p>Date</p>
                  <p>Customer Name</p>
                  <p>Location</p>
                  <p>Amount</p>
                  <p>Status Order</p>
                </div>
              </div>
              <div className=" w-full h-auto px-10  font-bold leading-tight text-xl  text-[#353535]  ">
                <div className="w-full my-10 ">
                  {orderList.map((item, idx) => (
                    <>
                      <div
                        key={idx}
                        className="w-full flex flex-row justify justify-between p="
                      >
                        <h2>{item.Order}</h2>
                        <h2>{item.Date}</h2>
                        <h2>{item.CustomerName}</h2>
                        <h2>{item.Location}</h2>
                        <h2>{item.Amount}</h2>
                        <h2>{item.Status}</h2>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
