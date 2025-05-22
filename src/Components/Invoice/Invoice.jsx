import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";
import "../../index.css";
import Aos from "aos";
import img1 from "../../assets/Images/Arrowgreen.png";
import img2 from "../../assets/Images/lineorg.png";
import img3 from "../../assets/Images/deletered.png";

const Invoice = () => {
  const actionIcons = [img1, img3, img2];
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
            <div className="md:w-full w-full flex flex-row md:my-10 my-5 justify justify-between md:p-8 p-4">
              <div className="md:w-full w-full ">
                <h2 className=" text-3xl font-exo font-semibold ">
                  Invoice List
                </h2>
              </div>
            </div>

            <div className="md:w-[96%] w-full bg-[#FDFDFB] h-auto mx-8 rounded-md overflow-y-hidden">
              <div className="  h-auto leading-tight text-xl   text-[#353535]  ">
                <div className=" w-full">
                  <table className="w-full ">
                    <thead>
                      <tr className="w-[100%] ">
                        <th className=" w-full ">
                          <div className="w-full h-12  border-b-2 my-12 rounded-md ">
                            <div className="grid grid-cols-7  ">
                              <th className="">Invoice ID</th>
                              <td className="text-black font-exo font-semibold ">
                                Order Name
                              </td>
                              <th className="text-black font-exo font-semibold ">
                                Order ID
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Invoice Date{" "}
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Quatity
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Amount
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Action
                              </th>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" w-full m-24">
                      {orderList.map((item, index) => (
                        <tr className="w-full h-14 font-exo font-medium    text-black cursor-pointer">
                          <div className=" w-full grid grid-cols-7 text-center  ">
                            <div>{item.Order} </div>
                            <div>{item.Date}</div>
                            <div>{item.CustomerName}</div>
                            <div>{item.Location}</div>
                            <div>{item.Amount}</div>
                            <div>{item.Status}</div>
                            <div className="flex justify-center gap-2">
                              {actionIcons.map((icon, i) => (
                                <img
                                  key={i}
                                  src={icon}
                                  alt={`icon-${i}`}
                                  className="w-6 h-6"
                                />
                              ))}
                            </div>
                          </div>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
