import logo from "./logo.svg";
import "./App.css";
import Right from "./Right";
import Left from "./Left";
import { useState } from "react";
import apple from "./img/apple.jpg";

const MainPage = () => {
  // 사과 개수
  const [quantity, setQuantity] = useState(1);
  // 포장비
  const [packingFee, setPackingFee] = useState(0);
  // 사과 총 가격
  const [appleTotalFee, setAppleToatalFee] = useState(0);
  // 총 가격
  const [totalFee, setToatalFee] = useState(0);
  // 사과 1개 가격
  const applePrice = 34500;
  // 왼쪽 - 사과 이미지
  const [selectedImage, setSelectedImage] = useState(apple);

  return (
    <div className="allDivWrap">
      <div className="LeftBox">
        <Left
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <div className="RightBox">
        <Right
          quantity={quantity}
          setQuantity={setQuantity}
          packingFee={packingFee}
          setPackingFee={setPackingFee}
          appleTotalFee={appleTotalFee}
          setAppleToatalFee={setAppleToatalFee}
          totalFee={totalFee}
          setToatalFee={setToatalFee}
          applePrice={applePrice}
        />
      </div>
    </div>
  );
};

export default MainPage;
