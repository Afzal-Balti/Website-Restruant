import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";
import "../../index.css";
import Aos from "aos";

const Order = () => {
  const orderList = [
    {
      Order: "ORD001",
      Date: "2025-05-10",
      CustomerName: "Ali Raza",
      Location: "Lahore",
      Amount: 2500,
      Status: "Delivered",
      dot: "....",
    },
    {
      Order: "ORD002",
      Date: "2025-05-11",
      CustomerName: "Sara Khan",
      Location: "Karachi",
      Amount: 3800,
      Status: "Pending",
      dot: "....",
    },
    {
      Order: "ORD003",
      Date: "2025-05-12",
      CustomerName: "Usman Tariq",
      Location: "Islamabad",
      Amount: 1450,
      Status: "Shipped",
      dot: "....",
    },
    {
      Order: "ORD004",
      Date: "2025-05-13",
      CustomerName: "Nida Qureshi",
      Location: "Multan",
      Amount: 3200,
      Status: "Cancelled",
      dot: "....",
    },
    {
      Order: "ORD005",
      Date: "2025-05-14",
      CustomerName: "Bilal Ahmed",
      Location: "Faisalabad",
      Amount: 2750,
      Status: "Delivered",
      dot: "....",
    },
    {
      Order: "ORD006",
      Date: "2025-05-15",
      CustomerName: "Ayesha Noor",
      Location: "Rawalpindi",
      Amount: 4100,
      Status: "Processing",
      dot: "....",
    },
    {
      Order: "ORD007",
      Date: "2025-05-16",
      CustomerName: "Zain Ali",
      Location: "Peshawar",
      Amount: 2300,
      Status: "Pending",
      dot: "....",
    },
    {
      Order: "ORD008",
      Date: "2025-05-17",
      CustomerName: "Hina Sheikh",
      Location: "Quetta",
      Amount: 1950,
      Status: "Delivered",
      dot: "....",
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
                <h2 className=" text-3xl font-exo font-semibold ">Orders</h2>
                <h2 className=" font-exo font-semibold  ">
                  Here is your menu management{" "}
                </h2>
              </div>
              <div className=" w-40 h-12 md:my-3 my-0 bg-orange-600 rounded-full cursor-pointer">
                <div className="md:m-3 m-0  flex ">
                  <div className=" w-8 md:my-0 md:m-0 m-2 ">
                    <img src={Addsign} className="w-10 -my-[1px] "></img>
                  </div>
                  <div className="md:w-full  w-full text-center font-exo font-semibold  text-white ">
                    Order Status
                  </div>
                </div>
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
                              <th className="">Order</th>
                              <td className="text-black font-exo font-semibold ">
                                Date
                              </td>
                              <th className="text-black font-exo font-semibold ">
                                Customer Name
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Location{" "}
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Amount
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Status
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
                            <div>{item.dot}</div>
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

export default Order;
