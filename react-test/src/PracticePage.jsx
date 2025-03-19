import logo from "./logo.svg";
import "./PracticePage.css";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import { useState, useEffect } from "react";

const PracticePage = () => {
  const [allData, setAllData] = useState([]);
  const [backColor, setBackColor] = useState("white");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  return (
    <div className="allWrap">
      <FormComponent setAllData={setAllData} />
      <TableComponent
        allData={allData}
        setAllData={setAllData}
        backColor={backColor}
        setBackColor={setBackColor}
        isDataLoaded={isDataLoaded}
        setIsDataLoaded={setIsDataLoaded}
      />
    </div>
  );
};

export default PracticePage;
