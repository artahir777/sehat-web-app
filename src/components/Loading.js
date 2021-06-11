
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Loading = ({ size = 100 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 20,
      }}
    >
      <Spin indicator = {<LoadingOutlined style = {{fontSize: size, color: "#047857"}} spin />} />
    </div>
  );
};

export default Loading;
