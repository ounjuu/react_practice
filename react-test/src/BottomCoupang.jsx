import "./BottomCoupang.css";
import React from "react";
import { Select } from "antd";

// 오른쪽 쿠팡

const BottomCoupang = (props) => {
  return (
    <div className="BottomBox">
      <div>맛있는 사과</div>
      <div className="starBox">
        <div>별</div>
        <div>2,905개 상품평</div>
      </div>
      <div>숫자 + (박스당)</div>
    </div>
  );
};

export default BottomCoupang;
