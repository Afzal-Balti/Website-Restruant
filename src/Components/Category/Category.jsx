import React, { useRef, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Addsign from "../../assets/Images/addSign.png";
import Eye from "../../assets/Images/view.png";
import Pencil from "../../assets/Images/pencil.png";
import Delete from "../../assets/Images/delete.png";
import AddDuplicate from "../../assets/Images/addduplicate.png";
import "../../index.css";
import Aos from "aos";
import ApexChart from "../Dashboard/ReactChart/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { Productdata, ProductDatas } from "../ReduxStore/ProductSlice";
import { useForm } from "react-hook-form";
import dummypic from "../../assets/Images/export.png";
import CategoryPagination from "./CategoryPagination";

const category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileList, setFileList] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    onsubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: null,
      category: "",
      stock_quantity: "",
    },
  });

  const catogoryId = useParams();

  const DataProducts = useSelector((state) => state?.products?.product);
  // console.log("DATA OF PRODUCTS IS  :::::::::::; ", DataProducts);

  const dispatch = useDispatch();

  const selector = useSelector((state) => state?.products?.product);
  // console.log("SELECTOR IS  ::::::::::::::::: ", selector);

  const InputImageRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const postData = async (value) => {
    // console.log("VALUE OF POST IS :::::::::::::::::: ", value);

    const formData = new FormData();
    formData.append("name", value.name);
    formData.append("image", value.image);
    formData.append("description", value.description);
    formData.append("category", catogoryId.categoryid);

    const res = await dispatch(ProductDatas(formData));
    // console.log("after response :::::::::::::: ", catogoryId.categoryid);

    dispatch(Productdata(catogoryId.categoryid));
    // dispatch(Productdata());

    if (res) {
      setIsModalOpen(false);
      reset();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImages = () => {
    if (InputImageRef.current) {
      InputImageRef.current.click();
      setImagePreview("");
      // reset();
    }
  };

  const HandleChangeImage = (event) => {
    const inputFile = event.target.files[0];
    setValue("image", inputFile);
    console.log("inputFile***", inputFile);

    console.log("input-image --------------- ", inputFile);
    if (inputFile) {
      console.log("Selected File:------------------ ", inputFile);
      setImagePreview(URL.createObjectURL(inputFile));
      setFileList([...fileList, inputFile]);
    }
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
            className="md:w-[85%] h-auto  my-28 md:p-0 md:ml-[13%] ml-5 "
          >
            <div className="w-full flex flex-row justify justify-between p-8">
              <div>
                <h2 className=" font-exo2 text-3xl font-bold">Menu </h2>
                <h2 className=" font-exo2 ">Here is your menu management </h2>
              </div>
              <div type="" onClick={showModal}>
                <div className=" md:w-40 w-36 md:h-14 h-11 md:my-3 my-0  bg-[#EA6A12] rounded-full cursor-pointer">
                  <div className="md:m-5 m-0   flex flex-row  md:py-3  ">
                    <div className="md:w-8 w-10 md:my-0 my-3 md:-m-0 m-2 ">
                      <img src={Addsign} className=""></img>
                    </div>
                    <div className="md:w-full w-36 md:text-center  text-balance md:px-0 px-2 font-bold text-white py-1">
                      Add Menu
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
                okText="Add Post"
              >
                <label className="w-full font-bold "> Menu Name </label>

                <input
                  type="text"
                  placeholder="Ente a Menu name"
                  name="name"
                  onChange={(e) => e.target.value}
                  className="w-full border-b  my-2 border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-b-2 "
                  {...register("name", {
                    required: "Add the Menu name",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters",
                    },
                    // maxLength: { value: 5, message: "Max 8 characters" },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                <label className="w-full font-bold  "> Description </label>
                <input
                  type="text"
                  placeholder=" Write the Description "
                  name="description"
                  onChange={(e) => e.target.value}
                  className="w-full border-b my-3 border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-b-2 "
                  {...register("description", {
                    required: "Add the category name",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters",
                    },
                    // maxLength: { value: 15, message: "Max 8 characters" },
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
              flex flex-row flex-wrap  justify-evenly gap-4"
            >
              {/* {DataProducts.map((item, idx) => ( */}
              <div className="data-aos=zoom   rounded-full">
                <div className="w-56  h-80  py-14 overflow-y-hidden relative">
                  <img
                    src={DataProducts.image}
                    className="w-28 rounded-full absolute -top-[-10px] left-10 mx-3  "
                  ></img>
                  <div className="w-full h-64 bg-white rounded-lg  ">
                    <div className="w-full text-md font-bold">
                      <div className=" w-full h-16 text-center  py-20  ">
                        <p className="w-full">{DataProducts.name}</p>
                        <p className=" w-full text-center text-[10px] p-4 ">
                          <span className=" w-full  text-orange-400">
                            {DataProducts.description}
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
              {/* ))}  */}
            </div>

            <div className="w-full justify justify-center ">
              <CategoryPagination className="w-full" />
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
