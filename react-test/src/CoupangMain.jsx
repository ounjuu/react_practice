import logo from "./logo.svg";
import "./CoupangMain.css";
import LeftCoupang from "./LeftCoupang";
import RightCoupang from "./RightCoupang";
import BottomCoupang from "./BottomCoupang";
import { useState } from "react";

const CoupangMain = () => {
  //쿠팡 이미지
  const [selectImage, setSelectImage] = useState([
    "/img/gray1.jpg",
    "/img/grayyellow.jpg",
    "/img/graygreen1.jpg",
    "/img/graygreen2.jpg",
  ]);
  const [mainImage, setMainImage] = useState("/img/gray1.jpg");
  const [productName, setProductName] = useState("그레이");
  const [productOption, setProductOption] = useState("220-225mm(36-37)");
  const [currentPage, setCurrentPage] = useState(1);
  const [showProduct, setShowProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="allWrap">
      <div className="topWrap">
        <LeftCoupang
          selectImage={selectImage}
          mainImage={mainImage}
          setMainImage={setMainImage}
        />
        <RightCoupang
          setSelectImage={setSelectImage}
          setMainImage={setMainImage}
          productName={productName}
          setProductName={setProductName}
          productOption={productOption}
          setProductOption={setProductOption}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>

      <div className="bottomWrap">
        <BottomCoupang
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          showProduct={showProduct}
          setShowProduct={setShowProduct}
        />
      </div>
    </div>
  );
};

export default CoupangMain;
