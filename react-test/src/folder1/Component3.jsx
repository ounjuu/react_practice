import "./Component3.css";
import React, { useState } from "react";
import { Select } from "antd";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component3 = (props) => {
  const { fontColor, setFontColor } = props;

  const option3 = [
    { value: "white", label: "흰색" },
    { value: "gray", label: "회색" },
    { value: "green", label: "초록색" },
  ];
  return (
    <div className="yellow">
      글자색:
      <Select
        defaultValue={fontColor}
        style={{
          width: 120,
        }}
        onChange={(value) => {
          setFontColor(value);
        }}
        options={option3}
      />
    </div>
  );
};

export default Component3;
