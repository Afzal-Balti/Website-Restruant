import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";
import "../../index.css";
import Aos from "aos";

const SaleReport = () => {
  const data = {
    weekly_data: [
      {
        day: "Monday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "1.8%",
      },
      {
        day: "Tuesday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "13.8%",
      },
      {
        day: "Wednesday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "14.8%",
      },
      {
        day: "Thursday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "16.8%",
      },
      {
        day: "Friday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "1.8%",
      },
      {
        day: "Saturday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "1.8%",
      },
      {
        day: "Sunday",
        lunch: 90,
        dinner: 157,
        breakfast: 90,
        utilization: "11.8%",
        per: "1.8%",
      },
    ],
  };

  const Estimate = {
    summary: [
      {
        estimated_square_feet: 3400,
        average_lunch_price: 589,
        average_dinner_price: 267,
        number_of_seats: 100,
      },
    ],
  };

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
                <h2 className=" text-3xl font-exo font-semibold ">
                  Sales Report{" "}
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

            <div className="md:w-[96%] w-full bg-[#FDFDFB]  h-auto mx-8 rounded-md overflow-y-hidden">
              <div className="w-full  border-b-2 flex flex-row h-auto leading-tight text-xl   text-[#353535]  ">
                <div className=" w-full  flex flex-row">
                  <table className="w-full ">
                    <thead>
                      <tr className="w-full ">
                        <th className=" w-full ">
                          <div className="w-full h-12 border-b-2 my-12 rounded-md ">
                            <div className=" w-full grid grid-cols-6  ">
                              <th className="">Order</th>
                              <td className="text-black font-exo font-semibold ">
                                Day
                              </td>
                              <th className="text-black font-exo font-semibold ">
                                Type
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Customer
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Cover
                              </th>
                              <th className="text-black font-exo font-semibold ">
                                Food
                              </th>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className=" w-full m-24 ">
                      {data?.weekly_data.map((item, index) => (
                        <tr className="w-full h-14 font-exo font-medium    text-black cursor-pointer">
                          <div className=" w-[100%] grid grid-cols-6 text-center  ">
                            <div>{item.day} </div>
                            <div>{item.lunch}</div>
                            <div>{item.dinner}</div>
                            <div>{item.utilization}</div>
                            <div>{item.breakfast}</div>
                            <div>{item.per}</div>
                          </div>
                        </tr>
                      ))}

                      <p className="mx-10 my-3 font-exo font-medium">
                        Week Total
                      </p>
                    </tbody>
                  </table>

                  <div className=" w-[40%]  text-center  gap-4 my-40  ">
                    <ul className="">
                      <h3 className="w-full">
                        Estimated square Feet{" "}
                        <span className="px-20">4300</span>
                      </h3>
                    </ul>
                    <ul cal>
                      <h3 className="w-full">
                        Estimated square Feet{" "}
                        <span className="px-20">4500</span>
                      </h3>
                    </ul>
                    <ul cal>
                      <h3 className="w-full">
                        Estimated square Feet{" "}
                        <span className="px-20">43760</span>
                      </h3>
                    </ul>
                    <ul cal>
                      <h3 className="w-full">
                        Estimated square Feet{" "}
                        <span className="px-20">4450</span>
                      </h3>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleReport;
