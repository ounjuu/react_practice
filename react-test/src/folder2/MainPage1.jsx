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
  // 과일 value 저장용
  const [fruit, setFruit] = useState("apple");
  const [back, setBack] = useState("red");
  const [fontColor, setFontColor] = useState("white");
  const [text, setText] = useState("");

  return (
    <>
      <Component1 fruit={fruit} setFruit={setFruit} />
      <Component2 back={back} setBack={setBack} />
      <Component3 fontColor={fontColor} setFontColor={setFontColor} />
      <Component4 text={text} setText={setText} />
      <Component5 fruit={fruit} setFruit={setFruit} />
      <Component6
        back={back}
        setBack={setBack}
        fontColor={fontColor}
        setFontColor={setFontColor}
        text={text}
        setText={setText}
      />
      <Component7 />
    </>
  );
};

export default MainPage1;
