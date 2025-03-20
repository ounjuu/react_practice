import "./BottomCoupang.css";
import React, { useCallback, useEffect } from "react";
import { Carousel, Rate } from "antd";

// 오늘의 판매자 특가

const products = [
  {
    id: 1,
    title: "특가진행중",
    name: "깜찍한 곰돌이 EVA 미끄럼방지 슬리퍼 거실화 겸용 욕실화 3color, 1개, 노랑(~250mm)",
    discountType: "와우할인가",
    discountRate: "40%",
    originalPrice: "18,000원",
    discountedPrice: "10,640원",
    perUnitPrice: "(1세트 10,640원)",
    delivery: "내일(금) 도착 보장",
    shipping: "무료배송∙오늘출발",
    availability: "90%",
    reviews: "(10)",
    stockRemaining: "98 % 남음",
    image: "/img/product1.png",
  },
  {
    id: 2,
    title: "특가진행중",
    name: "BEST 아기욕실화 아동화장실슬리퍼 유아욕실화 미끄럼방지욕실화, 딸기, 1세트",
    discountType: "와우할인가",
    discountRate: "5%",
    originalPrice: "12,800원",
    discountedPrice: "12,160원",
    perUnitPrice: "(1세트 12,160원)",
    delivery: "내일(금) 도착 보장",
    shipping: "무료배송∙오늘출발",
    availability: "90%",
    reviews: "(949)",
    stockRemaining: "28 % 남음",
    image: "/img/product2.jpg",
  },
  {
    id: 3,
    title: "특가진행중",
    name: "시험성적완료 1+1 제이드슈 층간소음 실내화 4cm 거실화 사무실 룸슈즈 푹신한 쿠션 무소음 마시멜로 실내 학생 슬리퍼",
    discountType: "와우할인가",
    discountRate: "55%",
    originalPrice: "19,900원",
    discountedPrice: "8,910원",
    perUnitPrice: "(1세트 8,910원)",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "90%",
    reviews: "(3,149)",
    stockRemaining: "99 % 남음",
    image: "/img/product3.jpg",
  },
  {
    id: 4,
    title: "특가진행중",
    name: "영원스토리지 나이키 에어맥스 95 에센셜 트리플",
    discountType: "와우할인가",
    discountRate: "53%",
    originalPrice: "188,960원",
    discountedPrice: "87,160원",
    perUnitPrice: "",
    delivery: "3/31 도착 예정",
    shipping: "무료배송",
    availability: "100%",
    reviews: "(1)",
    stockRemaining: "99 % 남음",
    image: "/img/product4.jpg",
  },
  {
    id: 5,
    title: "특가진행중",
    name: "[1+1] 귀여운 캐릭터 실내외 슬리퍼 발편한 여성용",
    discountType: "와우할인가",
    discountRate: "38%",
    originalPrice: "19,800원",
    discountedPrice: "12,250원",
    perUnitPrice: "",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "80%",
    reviews: "(717)",
    stockRemaining: "99 % 남음",
    image: "/img/product5.jpg",
  },
  {
    id: 6,
    title: "특가진행중",
    name: "DK 푹신한 무소음 슬리퍼 사무실 병원 층간소음 고급 쿠션 실내화 실외겸용",
    discountType: "와우할인가",
    discountRate: "46%",
    originalPrice: "21,300원",
    discountedPrice: "11,370원",
    perUnitPrice: "",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "100%",
    reviews: "(307)",
    stockRemaining: "99 % 남음",
    image: "/img/product6.png",
  },
  {
    id: 7,
    title: "특가진행중",
    name: "파인굿즈 털실내화 고양이 털슬리퍼",
    discountType: "와우할인가",
    discountRate: "33%",
    originalPrice: "11,900원",
    discountedPrice: "7,950원",
    perUnitPrice: "",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "90%",
    reviews: "(3,145)",
    stockRemaining: "96 % 남음",
    image: "/img/product7.jpg",
  },
  {
    id: 8,
    title: "특가진행중",
    name: "MCM스니커즈 MESDATD03CO036",
    discountType: "와우할인가",
    discountRate: "40%",
    originalPrice: "410,000원",
    discountedPrice: "243,000원",
    perUnitPrice: "",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "99%",
    reviews: "",
    stockRemaining: "남음",
    image: "/img/product8.jpeg",
  },
  {
    id: 9,
    title: "특가진행중",
    name: "IAWI 스마일 슬리퍼, 화이트, 1개",
    discountType: "와우할인가",
    discountRate: "46%",
    originalPrice: "15,900원",
    discountedPrice: "8,500원",
    perUnitPrice: "(1세트 8,500원)",
    delivery: "내일(금) 도착 보장",
    shipping: "무료배송∙오늘출발",
    availability: "90%",
    reviews: "(3,673)",
    stockRemaining: "76 % 남음",
    image: "/img/product9.png",
  },
  {
    id: 10,
    title: "특가진행중",
    name: "[제이드슈] 3중 쿠션 면 슬리퍼 거실화 사무실 층간소음방지 미끄럼방지 실내화 학교 학생 유치원 어린이집 세탁가능, 1개, 곰돌이 그린 (여)",
    discountType: "와우할인가",
    discountRate: "42%",
    originalPrice: "14,900원",
    discountedPrice: "8,630원",
    perUnitPrice: "(1세트 8,630원)",
    delivery: "내일(금) 도착 보장",
    shipping: "무료배송∙오늘출발",
    availability: "100%",
    reviews: "(407)",
    stockRemaining: "95 % 남음",
    image: "/img/product10.jpg",
  },
  {
    id: 11,
    title: "특가진행중",
    name: "코니 여성 여름 물놀이 키높이 아쿠아샌들 클로그",
    discountType: "와우할인가",
    discountRate: "40%",
    originalPrice: "20,900원",
    discountedPrice: "12,510원",
    perUnitPrice: "",
    delivery: "모레(토) 도착 예정",
    shipping: "무료배송",
    availability: "90%",
    reviews: "(278)",
    stockRemaining: "85 % 남음",
    image: "/img/product11.jpg",
  },
  {
    id: 12,
    title: "특가진행중",
    name: "소가죽 여성봄가을 펀칭 캐주얼 슈즈",
    discountType: "와우할인가",
    discountRate: "37%",
    originalPrice: "46,000원",
    discountedPrice: "28,800원",
    perUnitPrice: "",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "100%",
    reviews: "(1)",
    stockRemaining: "99 % 남음",
    image: "/img/product12.jpg",
  },
  {
    id: 13,
    title: "특가진행중",
    name: "1+1층간소음 러브 푹신한 커플 거실화 실내화 사무실 쿠션 슬리퍼, 02.핑크(여성용), 02.핑크(여성용), 2개",
    discountType: "와우할인가",
    discountRate: "17%",
    originalPrice: "14,000원",
    discountedPrice: "11,610원",
    perUnitPrice: "(1세트 5,805원)",
    delivery: "내일(금) 도착 예정",
    shipping: "무료배송",
    availability: "90%",
    reviews: "(62)",
    stockRemaining: "99 % 남음",
    image: "/img/product13.jpg",
  },
  {
    id: 14,
    title: "특가진행중",
    name: "EVA 폭신한 토끼 구름슬리퍼 실내용슬리퍼",
    discountType: "와우할인가",
    discountRate: "64%",
    originalPrice: "22,000원",
    discountedPrice: "7,840원",
    perUnitPrice: "",
    delivery: "3/25(화) 도착 예정",
    shipping: "무료배송",
    availability: "100%",
    reviews: "(1)",
    stockRemaining: "89 % 남음",
    image: "/img/product14.jpg",
  },
  {
    id: 15,
    title: "특가진행중",
    name: "통굽 망사 샌들 앵클 힐 펀칭 마틴 부츠",
    discountType: "와우할인가",
    discountRate: "13%",
    originalPrice: "22,900원",
    discountedPrice: "19,900원",
    perUnitPrice: "",
    delivery: "내일(금) 도착 보장",
    shipping: "무료배송",
    availability: "99%",
    reviews: "(15)",
    stockRemaining: "99 % 남음",
    image: "/img/product15.jpg",
  },
];

const BottomCoupang = (props) => {
  const { currentPage, setCurrentPage } = props;
  const { showProduct, setShowProduct } = props;
  useEffect(() => {
    const showProductArray = [];
    for (let i = 0; i < products.length; i += 5) {
      showProductArray.push(products.slice(i, i + 5));
    }
    setShowProduct(showProductArray);
  }, []);

  const handleCarouselChange = useCallback(
    (page) => {
      setCurrentPage(page + 1);
    },
    [setCurrentPage]
  );

  return (
    <div className="BottomBox">
      <div className="todayPrices">
        <div className="todayPrice">
          오늘의 <span>판매자 특가</span>
        </div>
        <div className="todayPricePage">
          <span>
            <span className="todayPriceCurPage">{currentPage}</span>{" "}
            <span className="todayPriceTotalPage">/ {showProduct.length}</span>
          </span>
        </div>
      </div>
      <div>
        <Carousel arrows infinite={false} afterChange={handleCarouselChange}>
          {showProduct.map((productGroup, i) => (
            <div className="gridFive" key={i}>
              {productGroup.map((product) => (
                <div key={product.id} className="ratioFive">
                  <img src={product.image} alt={product.name} />
                  <div className="onSaleText">
                    <span>특가진행중</span>
                  </div>
                  <div className="productNameText">{product.name}</div>
                  <div className="discountText">
                    <span className="discountTextRed">
                      {product.discountType}
                    </span>
                    <span className="discountTextgray1">
                      {product.discountRate}
                    </span>
                    <span className="discountTextgray2">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="discountTextPrice">
                    {product.discountedPrice}
                  </div>
                  <div className="grayText">{product.delivery}</div>
                  <div className="grayText">{product.shipping}</div>
                  <div>
                    <Rate defaultValue={4.5} allowHalf />
                    &nbsp;
                    <span className="grayText fontSize12">
                      {product.reviews}
                    </span>
                  </div>
                  <div>
                    <span className="grayText fontSize12 fontBold">
                      {product.stockRemaining}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <br />
      </div>
    </div>
  );
};

export default BottomCoupang;
