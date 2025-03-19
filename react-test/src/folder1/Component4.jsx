import "./Component4.css";
import React, { useState } from "react";
import { Input } from "antd";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component4 = (props) => {
  const { text, setText } = props;

  return (
    <div className="green">
      내용:{" "}
      <Input
        value={text}
        style={{ width: 400 }}
        onChange={(e) => {
          console.log("Component4 - 입력된 값:", e.target.value);
          setText(e.target.value);
        }}
      />
      <br />
    </div>
  );
};

export default Component4;
