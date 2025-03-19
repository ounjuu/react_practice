import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Input, Button, Table, notification } from "antd";
import { useFormik } from "formik";
const PracticePage2 = () => {
  const data = [
    {
      name1: "이름입니당",
      age: "뭘까유",
      nickname: "닉네임입니다.",
      hobby: "취미 히히",
    },
    {
      name1: "이륨",
      age: "유",
      nickname: "닉네",
      hobby: "히히",
    },
    {
      name1: "입니당",
      age: "뭘까",
      nickname: "닉다.",
      hobby: "취미히",
    },
  ];
  // useEffect(() => {
  //   userFormik.setFieldValue("name", data.name);
  //   userFormik.setFieldValue("age", data.age);
  //   userFormik.setFieldValue("nickname", data.nickname);
  //   userFormik.setFieldValue("hobby", data.hobby);
  // }, []);
  const list = data.map((x, i) => {
    return {
      key: i,
      name: x.name1,
      age: x.age,
      nickname: x.nickname,
      hobby: x.hobby,
    };
  });
  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickname: "",
      hobby: "",
    },
    // 폼 안의 버튼 눌렀을 때 설정
    onSubmit: (values) => {
      console.log(values, "입력값");
      notification.warning({
        message: "앗 아직 준비되지 않았어요!",
      });
    },
  });

  console.log(userFormik.values.name, "dfdfd");

  const columns = [
    { title: "이름", dataIndex: "name", key: "name" },
    { title: "나이", dataIndex: "age", key: "age" },
    { title: "별명", dataIndex: "nickname", key: "nickname" },
    { title: "취미", dataIndex: "hobby", key: "hobby" },
    {
      title: "관리",
      render: (data) => {
        console.log(data, "data");
        return <Button onClick={() => {}}>삭제</Button>;
      },
    },
  ];

  return (
    <>
      <form onSubmit={userFormik.handleSubmit}>
        <Input
          name="name"
          placeholder="이름을 입력해 주세요."
          value={userFormik.values.name}
          onChange={userFormik.handleChange}
        />
        <Input
          name="age"
          placeholder="나이를 입력해 주세요."
          value={userFormik.values.age}
          onChange={userFormik.handleChange}
        />
        <Input
          name="nickname"
          placeholder="별명을 입력해 주세요."
          value={userFormik.values.nickname}
          onChange={userFormik.handleChange}
        />
        <Input
          name="hobby"
          placeholder="취미를 입력해 주세요."
          value={userFormik.values.hobby}
          onChange={userFormik.handleChange}
        />
        <Button htmlType="submit">저장</Button>
      </form>
      <Table columns={columns} dataSource={list} />
    </>
  );
};

export default PracticePage2;
