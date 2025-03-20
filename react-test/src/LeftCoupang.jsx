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
      <ImageList handleImg={handleImg} selectImage={selectImage} />
      <MainImage mainImage={mainImage} />
    </div>
  );
};

export default LeftCoupang;
