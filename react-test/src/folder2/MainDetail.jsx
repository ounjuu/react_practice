import "./MainStyle.css";

// 메인 페이지 아이템
/* 작업자, 내용 여기 남겨도 됨 */

const MainDetail = (props) => {
  const { number, sumNumber, miNumber } = props;
  return (
    <>
      <button onClick={miNumber}>-</button>
      <div>{number}</div>
      <button onClick={sumNumber}>+</button>
    </>
  );
};

export default MainDetail;
