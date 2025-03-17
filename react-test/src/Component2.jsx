import "./Component2.css";
import React, { useState } from "react";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component2 = (props) => {
  const { hello, setHello } = props;
  const translateHello = () => {
    setHello("Hello");
  };

  return (
    <div className="orange">
      <button onClick={translateHello}>번역</button>
      <div>{hello}</div>
    </div>
  );
};

export default Component2;
