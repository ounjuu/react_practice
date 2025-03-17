import "./Component1.css";
import React, { useState } from "react";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component1 = (props) => {
  const { number, setNumber } = props;
  const plusNumber = () => {
    setNumber(number + 1);
  };
  const minusNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div className="red">
      <button onClick={minusNumber}>-</button>
      <div>{number}</div>
      <button onClick={plusNumber}>+</button>
    </div>
  );
};

export default Component1;
