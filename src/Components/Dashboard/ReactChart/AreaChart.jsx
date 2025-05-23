import React from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";
import { height } from "@mui/system";

const AreaChart = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [{ type: "filter", callback: (d) => d.symbol === "GOOG" }],
    },
    xField: (d) => new Date(d.date),
    yField: "price",

    style: {
      fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "darkgreen",
        strokeWidth: 2,
      },
    },
  };
  return <Area {...config} height={210} />;
};

// ReactDOM.render(<DemoArea />, document.getElementById('container'));

export default AreaChart;
