import "./LeftCoupang.css";
import React from "react";
import ImageList from "./ImageList";
import MainImage from "./MainImage";

const LeftCoupang = (props) => {
  const { selectImage, mainImage, setMainImage } = props;

  const handleImg = (image) => {
    setMainImage(image);
  };
  return (
    <div className="LeftBox">
      <MainImage mainImage={mainImage} />
      <ImageList handleImg={handleImg} selectImage={selectImage} />
    </div>
  );
};

export default LeftCoupang;
