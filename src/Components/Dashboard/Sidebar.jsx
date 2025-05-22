import React from "react";
import imgThree from "../../assets/Images/Vector(8).png";
import imgFour from "../../assets/Images/deal.png";
import imgFive from "../../assets/Images/Vector(6).png";
import imgSix from "../../assets/Images/invoice.png";
import imgSeven from "../../assets/Images/Vector(2).png";
import imgEight from "../../assets/Images/Vector(3).png";
import imgNine from "../../assets/Images/sale.png";
import imgTen from "../../assets/Images/Vector(5).png";
import Book from "../../assets/Images/Book.png";
import { Navigate, useNavigate } from "react-router";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:w-52 md:fixed   my-14 bg-[#FFFFFF] h-[80%]  cursor-pointer ">
        <div className="w-full px-6 py-10 cursor-pointer ">
          <div className="w-full py-4 flex flex-row gap-2 cursor-pointer">
            <RxDashboard className="w-5 h-5 cursor-pointer" />
            <p
              className=" text-[#353535] font-exo font-medium  "
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={Book} className="w-5 h-5"></img>
            <p
              className="font-exo font-medium text-[#353535] "
              onClick={() => navigate("/category")}
            >
              Menu
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgThree} className="w-5 h-5"></img>
            <p
              className="font-exo font-medium text-[#353535] "
              onClick={() => navigate("/menu")}
            >
              Categories
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgFour} className="w-5 h-5"></img>
            <p
              className="font-exo font-medium text-[#353535] "
              onClick={() => navigate("/deal")}
            >
              Deal
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgFive} className="w-5 h-5"></img>
            <p
              className="font-exo font-medium text-[#353535] "
              onClick={() => navigate("/order")}
            >
              Order
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgSix} className="w-5 h-5"></img>
            <p
              className="font-exo font-medium text-[#353535]"
              onClick={() => navigate("/invoice")}
            >
              Invoice
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgSeven} className="w-5 h-5"></img>
            <p
              className=" text-[#353535] font-exo font-medium"
              onClick={() => navigate("/wallet")}
            >
              Wallet
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgEight} className="w-5 h-5"></img>
            <p
              className=" text-[#353535] font-exo font-medium"
              onClick={() => navigate("/customerinfo")}
            >
              Customer Info
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgNine} className="w-5 h-5"></img>
            <p
              className="text-[#353535] font-exo font-medium"
              onClick={() => navigate("/salereport")}
            >
              Sale Reports
            </p>
          </div>
          <div className="w-full py-4 flex flex-row gap-2">
            <img src={imgTen} className="w-5 h-5"></img>
            <p
              className="font-exo font-medium text-[#353535]"
              onClick={() => navigate("/reservation")}
            >
              Reservation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
