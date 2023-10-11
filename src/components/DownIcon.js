import React, { Component } from "react";
import data from "../data.json";

const DownIcon = (propos) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "34px",
        transform: "translatey(-5px) ",
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
export default DownIcon;
