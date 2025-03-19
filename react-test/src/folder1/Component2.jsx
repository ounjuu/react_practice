import "./Component2.css";
import React, { useState } from "react";
import { Select } from "antd";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component2 = (props) => {
  const { back, setBack } = props;
  const option2 = [
    { value: "red", label: "빨간색" },
    { value: "yellow", label: "노란색" },
    { value: "blue", label: "파란색" },
  ];
  return (
    <div className="orange">
      배경색:
      <Select
        defaultValue={back}
        style={{
          width: 120,
        }}
        onChange={(value) => {
          setBack(value);
        }}
        options={option2}
      />
    </div>
  );
};

export default Component2;
