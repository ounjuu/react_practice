import "./Component3.css";
import React, { useState } from "react";
// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const Component3 = (props) => {
  return (
    <div className="yellow">
      <div>{props.changeValue("은주, 헤헤")}</div>
    </div>
  );
};

export default Component3;
