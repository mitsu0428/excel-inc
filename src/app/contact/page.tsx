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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseBody = await response.json();
        console.log("Success:", responseBody);
        // 成功時の処理 (例: 送信成功メッセージの表示)
      } else {
        console.error("Failed to send message");
        // 失敗時の処理 (例: エラーメッセージの表示)
      }
    } catch (error) {
      console.error("Error:", error);
      // 例外発生時の処理
    }
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
          <TextLarge>Your Name*</TextLarge>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <TextLarge>Company</TextLarge>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <TextLarge>E-mail Address*</TextLarge>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextLarge>Phone Number</TextLarge>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <TextLarge>Message*</TextLarge>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
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

const TextLarge = styled.p`
  color: #fff;
  font-family: YuGothic;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: YuGothic;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

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
  width: 585px;
  height: 1px;
`;
