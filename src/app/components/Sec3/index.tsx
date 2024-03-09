"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  const [isVisible, setIsVisible] = React.useState(false);

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

  return (
    <Container isVisible={isVisible}>
      <TitleH2_BusinessDomain className={Font.Font.CustomGafata.className}>
        BUSINESS DOMAIN
      </TitleH2_BusinessDomain>

      <Wrap>
        <TitleH3_Description className={Font.Font.CustomGafata.className}>
          クリエイティブのチカラで、
          <br />
          この社会に熱狂と感動を。
        </TitleH3_Description>
      </Wrap>

      <TextArea>
        <Description className={Font.Font.CustomGafata.className}>
          課題を整理し、正しく理解する。
        </Description>
        <Description className={Font.Font.CustomGafata.className}>
          解決方法を見つける。
        </Description>
        <Description className={Font.Font.CustomGafata.className}>
          具体的な形、仕組みとしてアウトプットを構築する。
        </Description>
        <Description className={Font.Font.CustomGafata.className}>
          時流の変化にあわせて変化を続ける。
        </Description>
        <br />
        <Description className={Font.Font.CustomGafata.className}>
          ビジネスを推進するすべての流れを私たちがプロデュースします。
        </Description>
      </TextArea>
    </Container>
  );
};

const slidein = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div<{ isVisible: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.isVisible ? "0" : "100px")});
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
`;

const Wrap = styled.div``;

const TextArea = styled.div`
  margin-top: 36px;
  line-height: 40px;
`;

const TitleH2_BusinessDomain = styled.h2`
  font-size: 70px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin-top: 138px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const TitleH3_Description = styled.h3`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  margin: 0;
  color: #fff;
  margin-top: 64px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  text-align: left;
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
