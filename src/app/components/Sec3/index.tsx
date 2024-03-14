"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isTextVisible, setIsTextVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const height = window.innerHeight;
      const offset = 100;
      if (top > height - offset) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsTextVisible(true);
      }, 500); // Adjust the delay time as needed
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <Container isVisible={isVisible}>
      <TitleH2_BusinessDomain
        className={Font.Font.CustomJosefinSans.className}
        isVisible={isVisible}
      >
        BUSINESS DOMAIN
      </TitleH2_BusinessDomain>

      <Wrap>
        <TitleH3_Description
          className={Font.Font.CustomGafata.className}
          isVisible={isTextVisible}
        >
          クリエイティブのチカラで、
          <br />
          この社会に熱狂と感動を。
        </TitleH3_Description>
      </Wrap>

      <TextArea isVisible={isTextVisible}>
        <Description className={Font.Font.CustomGotchicA1.className}>
          課題を整理し、正しく理解する。
        </Description>
        <Description className={Font.Font.CustomGotchicA1.className}>
          解決方法を見つける。
        </Description>
        <Description className={Font.Font.CustomGotchicA1.className}>
          具体的な形、仕組みとしてアウトプットを構築する。
        </Description>
        <Description className={Font.Font.CustomGotchicA1.className}>
          時流の変化にあわせて変化を続ける。
        </Description>
        <br />
        <Description className={Font.Font.CustomGotchicA1.className}>
          ビジネスを推進するすべての流れを私たちがプロデュースします。
        </Description>
      </TextArea>
    </Container>
  );
};

const Container = styled.div<{ isVisible: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

const Wrap = styled.div``;

const TextArea = styled.div<{ isVisible: boolean }>`
  margin-top: 36px;
  line-height: 45px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateX(${(props) => (props.isVisible ? "0" : "-100px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

const TitleH2_BusinessDomain = styled.h2<{ isVisible: boolean }>`
  font-size: 70px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin-top: 138px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 1s ease-in-out;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const TitleH3_Description = styled.h3<{ isVisible: boolean }>`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  margin: 0;
  color: #fff;
  margin-top: 64px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 1s ease-in-out;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: left;
  font-weight: 400;
  text-align: center;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
