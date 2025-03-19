import "./Right.css";
import React, { useState } from "react";
import { Select, Rate, Button } from "antd";

const Right = (props) => {
  const {
    quantity,
    setQuantity,
    packingFee,
    setPackingFee,
    appleTotalFee,
    setAppleToatalFee,
    totalFee,
    setToatalFee,
    applePrice,
  } = props;

  const packageOption = [
    {
      value: 0,
      label: "기본(+ 0원)",
    },
    {
      value: 3000,
      label: "선물 포장 (+3,000원)",
    },
    {
      value: 11000,
      label: "고급 포장 (+11,000원)",
    },
  ];
  // 가격 나타내는 함수
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  const plusQuantitiy = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantitiy = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePackageChange = (value) => {
    setPackingFee(value);
  };

  const notonclick = () => {
    alert("준비중 입니다.");
  };
  return (
    <div className="allRightBox">
      <div className="titleApple">맛있는 사과</div>
      <div className="starBox">
        <div>
          <Rate defaultValue={5} />
        </div>

        <div className="blueText">2,905개 상품평</div>
      </div>
      <div className="redText">34,500원 (박스당)</div>
      <div className="deliverText">
        이 상품은 <span>내일 도착, 무료배송</span>
      </div>
      <div className="inputAllBox">
        <div className="quantityInputs">
          <Button className="quantityButtons" onClick={minusQuantitiy}>
            -
          </Button>
          <div className="quantityNum">{quantity}</div>
          <Button className="quantityButtons" onClick={plusQuantitiy}>
            +
          </Button>
        </div>
        <div className="selectBox">
          <Select
            defaultValue={packageOption}
            style={{
              width: 150,
              paddingLeft: 10,
              fontSize: 12,
            }}
            onChange={handlePackageChange}
            options={packageOption}
            dropdownStyle={{
              fontSize: 12,
            }}
          />
        </div>
        <div>
          <Button
            onClick={notonclick}
            style={{
              marginLeft: 5,
              fontSize: 12,
            }}
          >
            장바구니
          </Button>
        </div>
        <div>
          <Button
            onClick={notonclick}
            style={{
              marginLeft: 5,
              fontSize: 12,
            }}
          >
            바로구매
          </Button>
        </div>
      </div>
      <div className="allPriceText">
        총 : <span>{formatPrice(quantity * applePrice + packingFee)} 원</span>
      </div>
    </div>
  );
};

export default Right;
