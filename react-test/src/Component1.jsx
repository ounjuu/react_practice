import "./Component1.css";
import React, { useState } from "react";
import { Select } from "antd";
import apple from "./img/apple.jpg";
import banana from "./img/banana.webp";
import grape from "./img/grape.jpg";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component1 = (props) => {
  const {
    quantity,
    setQuantity,
    packingFee,
    setPackingFee,
    appleTotalFee,
    setAppleToatalFee,
    totalFee,
    setToatalFee,
    applePrice,
  } = props;

  const plusQuantitiy = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantitiy = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div>맛있는 사과</div>
      <div className="starBox">
        <div>별</div>
        <div>2,905개 상품평</div>
      </div>
      <div>숫자 + (박스당)</div>
    </div>
  );
};

export default Component1;
