"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container id="company">
      <StyledMobileView>
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

            <br />

            <ContentsText>
              [所在地]
              <br />
              〒107-0062
              <br />
              東京都港区南青山5-12-27
              <br />
              WISE 512ビル 305
            </ContentsText>

            <br />

            <ContentsText>
              [電話番号]
              <br />
              03-6824-4903
            </ContentsText>

            <br />

            <ContentsText>
              [資本金]
              <br />
              500万円
            </ContentsText>

            <br />

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

          <ContentsRight>
            <StyledIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6291416158138!2d139.71004377578265!3d35.66150773105737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6093b6911b%3A0x8221cc0251336e2f!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yV5LiB55uu77yR77yS4oiS77yS77yXIOODr-OCpOOCuu-8le-8ke-8kuODk-ODqw!5e0!3m2!1sja!2sjp!4v1709983095576!5m2!1sja!2sjp"
              width="600"
              height="450"
              loading="lazy"
            ></StyledIframe>
          </ContentsRight>
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
  padding: 0 50px;
  @media (max-width: 768px) {
    margin-top: 81px;
    padding: 0 30px;
  }
`;

const StyledMobileView = styled.div`
  position: static;
  width: 100%;
  max-width: 1181px;
  height: auto;
  border-radius: 89px 89px 0 0;
  background: #f9f9f9;
  padding: 0 50px;
  box-sizing: border-box;
  margin-top: auto;

  @media (max-width: 768px) {
    height: 500px;
    border-radius: 52px 52px 0 0;
    background: #f9f9f9;
    padding: 20px;
    margin-bottom: 0;
  }
`;

const MobileBorder = styled.div`
  position: absolute;
  border-radius: 27px;
  background: #d9d9d9;
  left: 50%;
  transform: translateX(-50%);

  top: 26px;
  width: 303px;
  height: 13px;

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
  height: auto;
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

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
