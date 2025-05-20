import React, { useState } from "react";
import { Button, Modal } from "antd";
import Addsign from "../../assets/Images/addSign.png";

const CategoryModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div type="" onClick={showModal}>
        <div className=" w-60 h-14 md:my-3 my-0 bg-[#EA6A12] rounded-full cursor-pointer">
          <div className="md:m-5 m-0   flex flex-row  py-3 ">
            <div className="w-8 md:my-0 my-3 md:-m-0 m-2 ">
              <img src={Addsign} className=""></img>
            </div>
            <div className="md:w-full  w-full text-center font-bold text-white py-1">
              Add Menu Categories
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Add Catagories"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label className="w-full font-bold">Name </label>
        <input className="w-full border-b border-gray-300 p-3  font-bold focus:outline-none focus:ring-0 focus:border-b-2 "></input>
        <br />
        <br />

        <input type="file"></input>

        <button>P</button>
      </Modal>
    </>
  );
};
export default CategoryModal;
