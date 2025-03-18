import "./Component5.css";
import React, { useState } from "react";
import apple from "./img/apple.jpg";
import banana from "./img/banana.webp";
import grape from "./img/grape.jpg";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component5 = (props) => {
  const { fruit, setFruit } = props;

  const option1 = [
    {
      value: "apple",
      label: "사과",
    },
    {
      value: "banana",
      label: "바나나",
    },
    {
      value: "grape",
      label: "포도",
    },
  ];
  return (
    <div className="blue">
      <img
        style={{ width: 200, height: 200 }}
        src={fruit === "apple" ? apple : fruit === "banana" ? banana : grape}
        alt="fruit"
      />
    </div>
  );
};

export default Component5;
