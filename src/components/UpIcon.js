import React, { Component } from "react";
import data from "../data.json";

const UpIcon = (propos) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "34px",
        transform: "translatey(45px) ",
      }}
    >
      <div
        style={{
          maxWidth: "30px",
        }}
      >
        <img src={propos.icon} />
      </div>
    </div>
  );
};
export default UpIcon;
