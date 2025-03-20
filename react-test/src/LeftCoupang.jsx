import "./LeftCoupang.css";
import React from "react";
// import apple from "./img/apple.jpg";
// import apple2 from "./img/apple2.jpg";
// import apple3 from "./img/apple3.jpg";

const LeftCoupang = (props) => {
  const { selectImage, mainImage, setMainImage } = props;

  const handleImg = (image) => {
    setMainImage(image);
  };
  return (
    <div className="LeftBox">
      <div className="lineImages">
        {selectImage.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`product${index}`}
            className="lineImg"
            onMouseOver={() => handleImg(image)}
          />
        ))}
      </div>
      <div className="bigImage">
        <img src={mainImage} alt="mainImage" className="leftMainImg" />
      </div>
    </div>
  );
};

export default LeftCoupang;
