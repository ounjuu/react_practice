import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Component7 from "./Component7";
import { useState } from "react";
const MainPage1 = () => {
  const [number, setNumber] = useState(0);
  const [hello, setHello] = useState("안녕하세요.");
  const changeValue = (value) => {
    return value;
  };
  return (
    <>
      <Component1 number={number} setNumber={setNumber} />
      <Component2 hello={hello} setHello={setHello} />
      <Component3 changeValue={changeValue} />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
    </>
  );
};

export default MainPage1;
