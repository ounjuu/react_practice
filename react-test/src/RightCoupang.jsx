import "./RightCoupang.css";
import React from "react";
import { Select, Rate, Button, InputNumber } from "antd";
import { useFormik } from "formik";
import { notification } from "antd";
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
  const productOption = [
    { value: 1, label: "220-225mm(36-37)" },
    { value: 2, label: "230-235mm(38-39)" },
    { value: 3, label: "230-235mm(38-39)" },
    { value: 4, label: "260-270mm(44-45)" },
  ];
  const handleClick = (image) => {
    const newImages = productImages[image] || [];
    setSelectImage(newImages);
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
  return (
    <div className="RightBox">
      <form onSubmit={cartFormik.handleSubmit}>
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
        <div className="priceTitle">
          <div>
            <span>47%</span>
            <span>16,900원</span>
          </div>
          <div>
            <span>9,900원</span>
            <span>쿠팡판매가</span>
          </div>
          <div>
            <span>8,910원</span>
            <span>즉시할인가</span>
          </div>
        </div>
        <div>내일(목) 3/20 도착 보장 (22분 내 주문 시 / 서울⋅경기 기준)</div>
        <div>
          판매자: <span>곰돌이샵</span>
        </div>
        <div>
          <div>신발사이즈(mm)</div>
          <Select
            defaultValue={productOption}
            options={productOption}
            dropdownStyle={{
              fontSize: 12,
            }}
          />
        </div>
        <div>
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
        <div>
          <span>적립</span>
          <span>최대 445원</span>
          <span>쿠팡캐시 적립</span>
          <span>· 쿠페이 머니 결제시</span>
          <span>혜택보기</span>
        </div>
        <div>
          <span>PC에서도 간편한 결제</span>
          <img src="/img/coumoney.png" alt="coumoney" />
          <span>쿠페이머니</span> <img src="/img/coucard.png" alt="coucard" />
          <span>카드</span> <img src="/img/coucard2.png" alt="coucount" />
          <span>계좌이체</span>
        </div>
        <div>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            style={{ borderRadius: 0 }}
          />
          <Button type="primary" style={{ borderRadius: 0 }}>
            장바구니에 담기
          </Button>
          <Button type="primary" ghost style={{ borderRadius: 0 }}>
            바로 구매
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RightCoupang;
