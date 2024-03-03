"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <StyledImage
        src="/1枚目トップの画像.png"
        alt="1枚目のトップ画像"
      />

      <TextArea>
        <Text className={Font.Font.CustomJosefinSansThick.className}>
          BEYOND EXPECTATIONS
        </Text>
        <Text className={Font.Font.CustomJosefinSans.className}>
          AND IMAGINATIONS.
        </Text>
        <TextYu>期待と想像を超えていけ。</TextYu>
      </TextArea>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const TextArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  padding: 30px;
  text-align: left;
`;

const Text = styled.p`
  margin: 0;
  color: #fff;
  text-shadow: 0px 4px 4px #383838;
  font-size: 70px;
  letter-spacing: 1.4px;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const TextYu = styled.p`
  margin: 0;
  color: #fff;
  text-shadow: 0px 4px 4px #383838;
  font-size: 30px;
  letter-spacing: 1.4px;
  text-align: right;
  font-family: "Yu Gothic";
`;
