import React, { useEffect, useState } from "react";

import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CategoryProduct, Productdata } from "../ReduxStore/ProductSlice";

const CategoryPagination = () => {
  const [current, setCurrent] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Productdata(current));
  }, [dispatch, current]);

  const data = useSelector((state) => state?.products?.categoryItem);
  console.log("SELECTOR IS  :::::::::::::::::::; PAGIGNATION", data);

  const onChange = (page) => {
    console.log("PAGEI IS ::::::::::::::: ", page.page_size);
    setCurrent(page);
  };

  return (
    <>
      {data?.page_size && (
        <Pagination
          current={current}
          onChange={onChange}
          total={data.page_size}
          className="justify justify-end"
        />
      )}
    </>
  );
};

export default CategoryPagination;
