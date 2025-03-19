import "./RightCoupang.css";
import React from "react";
import { Select, Rate } from "antd";

// 오른쪽 쿠팡

const RightCoupang = (props) => {
  const { setSelectImage, setMainImage, productName, setProductName } = props;
  const productImages = {
    "/img/gray1.jpg": [
      "/img/gray1.jpg",
      "/img/grayyellow.jpg",
      "/img/graygreen1.jpg",
      "/img/graygreen2.jpg",
    ],
    "/img/purple1.jpg": [
      "/img/purple1.jpg",
      "/img/purple2.jpg",
      "/img/allcolor1.jpg",
    ],
    "/img/black1.jpg": ["/img/black1.jpg", "/img/black2.jpg"],
    "/img/yellow1.jpg": [
      "/img/yellow1.jpg",
      "/img/yellow2.jpg",
      "/img/grayyellow.jpg",
    ],
    "/img/green1.jpg": [
      "/img/green1.jpg",
      "/img/green2.jpg",
      "/img/graygreen1.jpg",
      "/img/graygreen2.jpg",
    ],
    "/img/white.jpg": ["/img/white.jpg"],
    "/img/pink1.jpg": ["/img/pink1.jpg", "/img/pink2.jpg", "/img/pink3.jpg"],
  };

  const productNames = {
    "/img/gray1.jpg": "그레이",
    "/img/purple1.jpg": "바이올렛",
    "/img/black1.jpg": "블랙",
    "/img/yellow1.jpg": "옐로우",
    "/img/green1.jpg": "그린",
    "/img/white.jpg": "화이트",
    "/img/pink1.jpg": "핑크",
  };

  const handleClick = (image) => {
    const newImages = productImages[image] || [];
    setSelectImage(newImages);
  };

  const handleHover = (image) => {
    setMainImage(image);
    setProductName(productNames[image] || []);
  };
  return (
    <div className="RightBox">
      <div>곰돌이샵</div>
      <div className="productTitle">
        <h2>
          곰돌이샵 말랑말랑 귀여운 몽실 토끼 EVA 슬리퍼 발편한 쿠션 실내화
        </h2>
        <span>
          <Rate defaultValue={4.5} allowHalf />
          510개 상품평
        </span>
      </div>
      <div>
        <div>색상: {productName}</div>
      </div>
      <div className="smallImagesBox">
        {Object.keys(productImages).map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`product${index}`}
            onClick={() => {
              handleClick(image);
            }}
            onMouseOver={() => {
              handleHover(image);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RightCoupang;
