import "./RightCoupang.css";
import React from "react";
import { Select, Rate, Button, InputNumber } from "antd";
import { useFormik } from "formik";
import { notification } from "antd";
// 오른쪽 쿠팡

const RightCoupang = (props) => {
  const {
    price,
    setPrice,
    discountPrice,
    setDiscountPrice,
    quantity,
    setQuantity,
    setSelectImage,
    setMainImage,
    productName,
    setProductName,
    selectedImage,
    setSelectedImage,
  } = props;
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
  const productOption = [
    { value: 1, label: "220-225mm(36-37)" },
    { value: 2, label: "230-235mm(38-39)" },
    { value: 3, label: "230-235mm(38-39)" },
    { value: 4, label: "260-270mm(44-45)" },
  ];
  const handleClick = (image) => {
    const newImages = productImages[image] || [];
    setSelectImage(newImages);
    setSelectedImage(image);
  };

  const handleHover = (image) => {
    setMainImage(image);
    setProductName(productNames[image] || []);
  };

  const cartFormik = useFormik({
    initialValues: {
      size: "",
      color: productName,
      quantity: 1,
    },
    // 폼 안의 버튼 눌렀을 때 설정
    onSubmit: (values) => {
      notification.warning({
        message: "준비중입니다!",
      });
      cartFormik.resetForm();
    },
  });

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  // 수량
  const handleQuantity = (value) => {
    setQuantity(value);
  };

  // 전제 가격 계산
  const calculateTotalPrice = (price) => {
    return price * quantity;
  };
  return (
    <div className="RightBox fontSize15">
      <form onSubmit={cartFormik.handleSubmit}>
        <div className="blueText">곰돌이샵</div>
        <div className="productTitle fontSize15">
          <h2>
            곰돌이샵 말랑말랑 귀여운 몽실 토끼 EVA 슬리퍼 발편한 쿠션 실내화
          </h2>
          <span className="blueText">
            <Rate defaultValue={4.5} allowHalf />
            &nbsp;510개 상품평
          </span>
        </div>
        <div className="priceTitle">
          <div>
            <span>47%&nbsp;</span>
            <span className="grayText TextLine">
              {formatPrice(calculateTotalPrice(price))}원
            </span>
          </div>
          <div>
            <span className="grayText boldText fontSize25">
              {formatPrice(calculateTotalPrice(discountPrice))}원
            </span>
            <span className="grayText">&nbsp;쿠팡판매가</span>
          </div>
          <div>
            <span className="redText fontSize25 boldText">
              {formatPrice(calculateTotalPrice(discountPrice - 990))}원
            </span>
            <span className="redText">&nbsp;즉시할인가</span>
          </div>
        </div>
        <div className="deliveryLine">
          <div>
            <span className="boldText">무료배송</span>&nbsp;(로켓배송 상품
            19,800원 이상 구매 시){" "}
          </div>
          <div className="paddingTop5">
            <span className="greenText fontSize15 boldText">내일(목) 3/20</span>
            <span className="greenText">&nbsp;도착 보장</span> (22분 내 주문 시
            / 서울⋅경기 기준)
          </div>
        </div>
        <div className="shopText">
          판매자: <span className="blueText">곰돌이샵</span>
        </div>
        <div className="sizeInputBox">
          <div className="boldText">신발사이즈(mm)</div>
          <div className="paddingTop5">
            <Select
              defaultValue={productOption}
              options={productOption}
              dropdownStyle={{
                fontSize: 12,
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <span className="boldText">색상:</span> {productName}
            </div>
          </div>
          <div className="smallImagesBox">
            {Object.keys(productImages).map((image, index) => (
              <div
                className={selectedImage === image ? "selected" : ""}
                key={index}
              >
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
              </div>
            ))}
          </div>
        </div>
        <div className="moneyTexts fontSize15">
          <div>
            <span className="boldText">적립&nbsp;&nbsp;&nbsp;</span>
            <span>최대 445원&nbsp;</span>
            <span>쿠팡캐시 적립</span>
            <span>· 쿠페이 머니 결제시&nbsp;</span>
          </div>
          <div
            onClick={() => {
              notification.warning({
                message: "준비중입니다!",
              });
            }}
          >
            <span className="boldText blueText">
              혜택보기 <span className="arrow"> &gt; </span>
            </span>
          </div>
        </div>
        <div className="paymentText">
          <span className="boldText">PC에서도 간편한 결제&nbsp;</span>
          <img src="/img/coumoney.png" alt="coumoney" />
          <span>&nbsp;쿠페이머니&nbsp;</span>{" "}
          <img src="/img/coucard.png" alt="coucard" />
          <span>&nbsp;카드&nbsp;</span>{" "}
          <img src="/img/coucard2.png" alt="coucount" />
          <span>&nbsp;계좌이체</span>
        </div>
        <div className="inputs">
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            className="custom-Input"
            onChange={handleQuantity}
          />

          <Button
            type="primary"
            ghost
            className="custom-button"
            htmlType="submit"
          >
            장바구니 담기
          </Button>
          <Button type="primary" className="custom-button" htmlType="submit">
            바로 구매 &gt;
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RightCoupang;
