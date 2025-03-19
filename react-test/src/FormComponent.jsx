import "./FormComponent.css";
import React from "react";
import { Input, Button, notification } from "antd";
import { useFormik } from "formik";

const FormComponent = (props) => {
  const { setAllData } = props;
  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickname: "",
      hobby: "",
    },
    // 폼 안의 버튼 눌렀을 때 설정
    onSubmit: (values) => {
      const existData = JSON.parse(localStorage.getItem("userData")) || [];
      const maxId =
        existData.length > 0 ? Math.max(...existData.map((x) => x.id)) : 0;
      const newId = maxId + 1;
      const newData = { id: newId, ...values };
      const updatedData = [...existData, newData];

      localStorage.setItem("userData", JSON.stringify(updatedData));
      setAllData(updatedData);
      notification.success({
        message: "저장되었습니다!",
      });
      userFormik.resetForm();
    },
  });

  return (
    <div className="formDivWrap">
      <form onSubmit={userFormik.handleSubmit}>
        <Input
          name="name"
          placeholder="이름을 입력해 주세요."
          value={userFormik.values.name}
          onChange={userFormik.handleChange}
          required
        />
        <Input
          name="age"
          placeholder="나이를 입력해 주세요."
          value={userFormik.values.age}
          onChange={userFormik.handleChange}
          required
        />
        <Input
          name="nickname"
          placeholder="별명을 입력해 주세요."
          value={userFormik.values.nickname}
          onChange={userFormik.handleChange}
          required
        />
        <Input
          name="hobby"
          placeholder="취미를 입력해 주세요."
          value={userFormik.values.hobby}
          onChange={userFormik.handleChange}
          required
        />
        <Button htmlType="submit">저장</Button>
      </form>
    </div>
  );
};

export default FormComponent;
