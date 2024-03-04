"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "../styles/NextFont";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // todo: フォームデータを送信するためのロジック
    console.log(formData);
  };

  return (
    <Wrap>
      <TitleH2_Contact className={Font.Font.CustomJosefinSans.className}>
        CONTACT
      </TitleH2_Contact>
      <Text>
        マーケティング支援やサービスに関するご相談など、お問い合わせはこちらのフォームより受け付けております
      </Text>

      <Divider />

      <Form onSubmit={handleSubmit}>
        <SubWrap>
          <TextLarge>
            Your Name
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </TextLarge>
          <TextLarge>
            Company
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </TextLarge>
          <TextLarge>
            E-mail Address
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </TextLarge>
          <TextLarge>
            Phone Number
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </TextLarge>
          <TextLarge>
            Message
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </TextLarge>
        </SubWrap>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrap>
  );
}

const Wrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #383838;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
`;

const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #383838;
  max-width: 450px;
  width: 100%;
`;

// タイトルとテキストのフォントサイズを調整
const TitleH2_Contact = styled.h2`
  font-size: 3.5rem; // 70pxから変更
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5rem; // 14pxから変更
  margin-top: 90px;

  @media (max-width: 768px) {
    font-size: 1.5rem; // 25pxに設定
    letter-spacing: 0.2rem; // スペーシング調整
    margin-top: 80px; // マージン調整
  }
`;

const TextLarge = styled.label`
  color: #fff;
  font-family: YuGothic;
  width: 100%;
  text-align: left;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Text = styled.p`
  color: #fff;
  font-family: YuGothic;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Form = styled.form``;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  width: 100%;
  height: 100%;
  background-color: #383838;
  color: #fff;
  font-family: YuGothic;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #000;
  width: 100%;
  height: 100%;
  background-color: #383838;
  color: #fff;
  font-family: YuGothic;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

const Button = styled.button`
  width: 167px;
  height: 46px;
  border: 1px solid #fff;
  color: #fff;
  background-color: #383838;
`;

const Divider = styled.div`
  background: #fff;
  margin: 55px 0;
  width: 303px;
  height: 1px;
`;
