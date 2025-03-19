import "./Left.css";
import React from "react";
import apple from "./img/apple.jpg";
import apple2 from "./img/apple2.jpg";
import apple3 from "./img/apple3.jpg";

const Left = (props) => {
  const { selectedImage, setSelectedImage } = props;
  const images = [apple, apple2, apple3];
  const ImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="allLeftSize">
      <div className="BigImg">
        <img src={selectedImage} />
      </div>

      <div className="imgBoxSize">
        {images.map((x, i) => (
          <img
            src={x}
            key={i}
            alt={`apple${i + 1}`}
            onClick={() => ImageClick(x)}
          />
        ))}
      </div>
    </div>
  );
};

export default Left;
