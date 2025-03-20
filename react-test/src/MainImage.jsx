import "./MainImage.css";
import React from "react";

const MainImage = (props) => {
  const { mainImage } = props;

  return (
    <div className="bigImage">
      <img src={mainImage} alt="mainImage" className="leftMainImg" />
    </div>
  );
};

export default MainImage;
