"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <StyledMobileView>
        <TitleH2_MobileView className={Font.Font.CustomGafata.className}>
          OUR COMPANY
        </TitleH2_MobileView>
        <Contents>
          <ContentsLeft>
            <ContentsText>
              [会社名]
              <br />
              EXCEL Inc.（エクセルインク）
            </ContentsText>

            <ContentsText>
              [所在地]
              <br />
              〒107-0062
              <br />
              東京都港区南青山5-12-27
              <br />
              WISE 512ビル 305
            </ContentsText>

            <ContentsText>
              [電話番号]
              <br />
              03-6824-4903
            </ContentsText>

            <ContentsText>
              [資本金]
              <br />
              500万円
            </ContentsText>

            <ContentsText>
              [事業内容]
              <br />
              ・ムービー制作事業
              <br />
              ・Web/SNSマーケティング支援事業
              <br />
              ・ライバー配信事業
              <br />
              ・広告代理事業
              <br />
              ・メディア事業
              <br />
              ・サイト制作事業
            </ContentsText>
          </ContentsLeft>

          <ContentsRight></ContentsRight>
        </Contents>
      </StyledMobileView>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: visible;
  margin-top: 138px;
`;

const StyledMobileView = styled.div`
  position: static;
  width: 100%;
  max-width: 1181px;
  height: auto;
  border-radius: 89px;
  background: #f9f9f9;
  padding: 0 50px;
  box-sizing: border-box;
  margin-top: auto;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    border-radius: 52px;
    background: #f9f9f9;
    padding: 20px;
    margin-bottom: 0;
  }
`;

const MobileBorder = styled.div`
  position: absolute;
  border-radius: 27px;
  background: #d9d9d9;
  top: 26px;
  left: 50%;
  transform: translateX(-50%); // 中央に配置
  cursor: pointer; // クリック可能なことを示す

  width: 130px;
  height: 10px;

  @media (max-width: 768px) {
    top: 14px;
    width: 130px;
    height: 10px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  height: 100%;
  gap: 44px;
  @media (max-width: 768px) {
    gap: 17px;
  }
`;

const ContentsRight = styled.div`
  padding: 16px;
  text-align: center;
  width: 50%;
  height: 797px;

  @media (max-width: 768px) {
    height: 276px;
  }
`;

const ContentsLeft = styled.div`
  padding: 16px;
  text-align: center;
  width: 50%;
  height: 797px;
  @media (max-width: 768px) {
    height: 276px;
  }
`;

const ContentsText = styled.p`
  color: #000;
  font-family: YuGothic;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

const TitleH2_MobileView = styled.h2`
  text-align: center;
  font-weight: 600;
  color: #000;
  letter-spacing: 14px;
  font-size: 70px;
  margin-top: 88px;

  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 51px;
  }
`;
