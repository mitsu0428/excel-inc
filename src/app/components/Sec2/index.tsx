"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <ImageWrap>
        <StyledImagePC
          src="/top-image-prod-sp.png"
          alt="トップ画像"
        />
        <StyledImageSmartPhone
          src="/top-image-prod.png"
          alt="トップ画像"
        />
      </ImageWrap>

      <TextAreaLeft>
        <TitleH2_About className={Font.Font.CustomJosefinSans.className}>
          ABOUT
        </TitleH2_About>
        <TitleH2_Company className={Font.Font.CustomJosefinSans.className}>
          EXCEL inc.
        </TitleH2_Company>
        <TitleH2_Concept className={Font.Font.CustomJosefinSansThin.className}>
          BEYOND EXPECTATIONS AND IMAGINATIONS.
        </TitleH2_Concept>
      </TextAreaLeft>

      <TextAreaRight>
        <TextRight>
          革新的でワクワクする要素を探究しながら、常にクールに。
        </TextRight>
        <TextRight>
          未来に翔ける先駆者として、私たちが道を切り開いていこう。
        </TextRight>
        <br />
        <TextRight>明日さえも予測不可能な現代社会で、</TextRight>
        <TextRight>「誰よりも深く思考し」</TextRight>
        <TextRight>「誰よりも熱く行動し続け」</TextRight>
        <TextRight>
          世の中の期待と想像を超えるサービスを提供していきます。
        </TextRight>
      </TextAreaRight>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const ImageWrap = styled.div`
  width: 100%;
`;

const StyledImagePC = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledImageSmartPhone = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TextAreaLeft = styled.div`
  position: absolute;
  top: 178px;
  left: 0;
  padding: 30px;
  text-align: left;
  @media (max-width: 768px) {
    top: 200px;
  }
`;

const TextAreaRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 30px;
  text-align: left;
  width: 573px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 303px;
  }
`;

const TitleH2_About = styled.h2`
  font-size: 50px;
  text-align: left;
  font-weight: 600;
  color: #fff;
  letter-spacing: 10px;
  margin: 0;
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 55px;
  }
`;

const TitleH2_Company = styled.h2`
  font-size: 70px;
  text-align: left;
  font-weight: 600;
  color: #fff;
  letter-spacing: 6px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 54px;
    line-height: 55px;
  }
`;

const TitleH2_Concept = styled.h2`
  color: #f9f9f9;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 28px;
  font-style: italic;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.56px;

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.24px;
  }
`;

const TextRight = styled.p`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 200;
  font-family: YuGothic;
  line-height: 25px;
  letter-spacing: 0.4px;

  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.28px;
  }
`;
