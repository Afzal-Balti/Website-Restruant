import React from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { blue, green, yellow } from "@mui/material/colors";

const LineDesign = () => {
  const config = {
    data: {
      type: "fetch",

      value:
        "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json",
    },
    xField: (d) => new Date(d.year),
    yField: "value",
    // sizeField: "value",
    // shapeField: "trail",
    // legend: { size: false },
    // colorField: "category",
    color: ["red"],
  };
  return <Line {...config} width={159} height={110} />;
};

// ReactDOM.render(<LineDesign />, document.getElementById("container"));

export default LineDesign;
