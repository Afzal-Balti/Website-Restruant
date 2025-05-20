import React from "react";
import { Flex, Progress } from "antd";
const PorgressBar = () => (
  <Flex gap="small" vertical>
    <Progress percent={50} status="active" />
  </Flex>
);
export default PorgressBar;
