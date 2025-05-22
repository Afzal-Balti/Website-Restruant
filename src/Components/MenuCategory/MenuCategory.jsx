import React, { useRef, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import "aos/dist/aos.css";
import { Modal } from "antd";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";
import "../../index.css";
import Aos from "aos";
import ApexChart from "../Dashboard/ReactChart/PieChart";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryList,
  CategoryProduct,
  Productdata,
} from "../ReduxStore/ProductSlice";
import { useForm } from "react-hook-form";
import dummypic from "../../assets/Images/export.png";
import Loadering from "../SignUp/Loadering/Loadering";
import PaginationArrow from "./Pagination";
import { useNavigate, useParams } from "react-router";

const MenuCategory = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    reset,
  } = useForm({
    defaultValues: { firstName: "" },
  });

  let value = getValues();
  const res = value.firstName;

  console.log("value********", res);

  const navigate = useNavigate();

  const InputImageRef = useRef(null);

  const categories = useSelector(
    (state) => state?.products?.categoryItem?.results
  );
  console.log("slector of categories product ::::::::::::", categories);

  const loading = useSelector((state) => state?.products?.loading);

  console.log("LOADING IS RUN IT  ::::::::::::::::::; ", loading);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const postData = async () => {
    console.log("THE VALUE IS :::::::", value);
    const formData = new FormData();
    formData.append("category_name", value.firstName);
    formData.append("image", value.image);

    const responseData = await dispatch(categoryList(formData));
    // console.log("RESPONSE OF CATEGORY LIST ", responseData);

    const result = await dispatch(CategoryProduct(1));
    if (result) {
      setIsModalOpen(false);
      setImagePreview("");
      reset();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImages = () => {
    if (InputImageRef.current) {
      InputImageRef.current.click();
    }
  };

  const HandleChangeImage = (event) => {
    const inputFile = event.target.files[0];
    setValue("image", inputFile);
    // console.log("inputFile***", inputFile);

    // console.log("input-image --------------- ", inputFile);
    if (inputFile) {
      // console.log("Selected File:------------------ ", inputFile);
      setImagePreview(URL.createObjectURL(inputFile));
      setFileList([...fileList, inputFile]);
    }
  };

  const ProductListed = (id) => {
    return () => {
      dispatch(Productdata(id));
      navigate(`/category/${id}`);
    };
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
                <h2 className=" font-exo font-semibold  text-3xl ">
                  Menu Categories
                </h2>
                <h2 className=" font-exo font-semibold  ">
                  Here is your menu management
                </h2>
              </div>

              <div type="" onClick={showModal}>
                <div className=" md:w-56 w-36 md:h-14 h-11 md:my-3 my-0  bg-[#EA6A12] rounded-full cursor-pointer">
                  <div className="md:m-5 m-0   flex flex-row  md:py-3  ">
                    <div className="md:w-8 w-10 md:my-0 my-3 max-md:hidden md:-m-0 m-2 ">
                      <img src={Addsign} className=""></img>
                    </div>
                    <div className="md:w-full w-36 md:text-center font-exo font-semibold  text-balance md:px-0 px-9  text-white py-1">
                      Add Menu Categories
                    </div>
                  </div>
                </div>
              </div>

              <Modal
                title="Add Catagories"
                closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                onOk={handleSubmit(postData)}
                onCancel={handleCancel}
                okText={loading ? <Loadering /> : <p>Post</p>}
              >
                <label className="w-full font-bold my-7"> Category Name </label>

                <input
                  type="text"
                  placeholder="Ente a Category name"
                  name="firstName"
                  onChange={(e) => e.target.value}
                  className="w-full border-b  border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-b-2 "
                  {...register("firstName", {
                    required: "Add the category name",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters",
                    },
                    maxLength: { value: 15, message: "Max 8 characters" },
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}

                <div
                  className="w-[60%] h-72 mb-10 my-10 mx-20 "
                  onClick={handleImages}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" />
                  ) : (
                    <img
                      className="cursor-pointer rounded-md mx-5 my-10 w-64 "
                      src={dummypic}
                    ></img>
                  )}

                  <input
                    type="file"
                    name="image"
                    {...register("image", {
                      required: "image is required",
                    })}
                    onChange={HandleChangeImage}
                    ref={InputImageRef}
                    style={{ display: "none" }}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </Modal>
            </div>

            <div
              className=" w-full 
              flex flex-row flex-wrap  justify-evenly gap-4 rounded-full cursor-pointer"
            >
              {categories?.map((item, idx) => (
                <div
                  key={idx}
                  className="data-aos=zoom   rounded-2xl"
                  onClick={ProductListed(item.id)}
                >
                  <div className="w-56  h-60  py-14 overflow-y-hidden relative">
                    <img
                      src={item.image}
                      className="w-28 rounded-full absolute -top-[-10px] left-10 mx-3  "
                    ></img>
                    <div className=" h-40 bg-white rounded-2xl  ">
                      <div className=" text-md font-bold">
                        <div className=" h-16 text-center   py-20 px-10 ">
                          <p className="w-full">{item.category_name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full justify justify-center ">
              <PaginationArrow className="w-full" />
            </div>

            <div className=" md:w-[96%] w-[85%] font-bold md:h-80 h-auto md:m-8  md:ml-auto ml-6  rounded-2xl my-20 p-8 flex flex-col justify-between bg-[#FDFDFB]">
              <div>
                <p className="font-exo font-semibold ">Menu Comparison</p>
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

export default MenuCategory;
