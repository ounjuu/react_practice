import "./TableComponent.css";
import React, { useEffect } from "react";
import { Table, Button, Select } from "antd";

const TableComponent = (props) => {
  const { allData, setAllData } = props;
  const { backColor, setBackColor } = props;
  const { isDataLoaded, setIsDataLoaded } = props;
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("userData")) || [];
    setAllData(storageData);
    setIsDataLoaded(true);
  }, []);

  const handleColorChange = (color) => {
    setBackColor(color);
  };

  const colorOptions = [
    { value: "white", label: "흰색" },
    { value: "gray", label: "회색" },
    { value: "green", label: "초록색" },
    { value: "coral", label: "코랄색" },
  ];
  const columns = [
    { title: "이름", dataIndex: "name", key: "name" },
    { title: "나이", dataIndex: "age", key: "age" },
    { title: "별명", dataIndex: "nickname", key: "nickname" },
    { title: "취미", dataIndex: "hobby", key: "hobby" },
    {
      title: "관리",
      render: (data) => {
        return (
          <Button
            onClick={() => {
              deleteData(data.id);
            }}
          >
            삭제
          </Button>
        );
      },
    },
  ];

  const deleteData = (id) => {
    const updateData = allData.filter((x) => x.id !== id);
    setAllData(updateData);
    localStorage.setItem("userData", JSON.stringify(updateData));
  };
  return (
    <div className="tableAllWrap">
      <Select
        defaultValue={backColor}
        style={{ width: 120 }}
        onChange={handleColorChange}
        options={colorOptions}
      />
      {isDataLoaded && (
        <Table
          columns={columns}
          dataSource={allData}
          rowKey="id"
          components={{
            header: {
              cell: (props) => (
                <th {...props} style={{ backgroundColor: backColor }}>
                  {props.children}
                </th>
              ),
            },
          }}
          pagination={{ position: ["bottomCenter"] }}
          style={{ width: "80%" }}
        />
      )}
    </div>
  );
};

export default TableComponent;
