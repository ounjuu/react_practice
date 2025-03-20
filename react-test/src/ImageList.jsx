import "./ImageList.css";
import React from "react";

const ImageList = (props) => {
  const { selectImage, handleImg } = props;
  return (
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
  );
};

export default ImageList;
