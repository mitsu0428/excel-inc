"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

// MEMO: スマホ画面のようなモーダルを表示するためのコンポーネント
export const Component = () => {
  return (
    <Container>
      <MobileView>
        <MobileBorder />
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

          <ContentsRight>何かしらのコンテンツが入る？？</ContentsRight>
        </Contents>
      </MobileView>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 50px;
  margin-top: 138px;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    padding: 33px;
  }
`;

const MobileView = styled.div`
  position: relative;
  width: 1181px;
  border-radius: 89px;
  background: #f9f9f9;
  padding: 50px;
  @media (max-width: 768px) {
    width: 324px;
    border-radius: 52px;
    background: #f9f9f9;
    padding: 20px;
  }
`;

const MobileBorder = styled.div`
  position: absolute;
  border-radius: 27px;
  background: #d9d9d9;
  top: 0;
  left: 0;

  margin: 0 439px;
  margin-top: 50px;
  width: 303px;
  height: 13px;

  @media (max-width: 768px) {
    margin: 0 97px;
    margin-top: 14px;
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
  background: #d9d9d9;
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
  margin-top: 138px;

  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 51px;
  }
`;
