import React from "react";
import { Flex, Input, Typography } from "antd";
import "./style.css";

const { Title } = Typography;

const Otpcode = ({ setOtp }) => {
  const onChange = (text) => {
    setOtp(text);
    console.log("onChange:", text);
  };

  const onInput = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps = {
    onChange,
    onInput,
  };

  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title>One Time Code </Title>
      <Input.OTP
        variant="filled"
        {...sharedProps}
        inputStyle={{
          width: 560,
          height: 360,
          fontSize: 24,
          textAlign: "center",
        }}
      />
    </Flex>
  );
};

export default Otpcode;
