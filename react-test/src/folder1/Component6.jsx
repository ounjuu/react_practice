import "./Component6.css";
import React, { useState } from "react";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component6 = (props) => {
  const { back, fontColor, text } = props;
  return (
    <div>
      <div
        style={{
          padding: 10,
          backgroundColor: back,
          color: fontColor,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Component6;
