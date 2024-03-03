"use client";

import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export const Component = () => {
  const issmartsphone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Container>
      {issmartsphone ? (
        <StyledImage
          src="/2枚目の画像SP.png"
          alt="2枚目のトップ画像"
        />
      ) : (
        <StyledImage
          src="/2枚目の画像.png"
          alt="2枚目のトップ画像"
        />
      )}

      <TextAreaLeft>
        <TitleH2_About> ABOUT</TitleH2_About>
        <TitleH2_Company>EXCEL inc.</TitleH2_Company>
        <TitleH2_Concept>BEYOND EXPECTATIONS AND IMAGINATIONS.</TitleH2_Concept>
      </TextAreaLeft>

      <TextAreaRight>
        <TextRight>
          革新的でワクワクする、それでいてクールなものを追求し、常に私たちが最前線で体現していく。
        </TextRight>
        <TextRight>
          明日さえも予測不可能な現代社会で、誰よりも深く思考し、
        </TextRight>
        <TextRight>
          誰よりも熱く行動し続け、クライアントの期待と想像を超えるサービスを提供していきます。
        </TextRight>
      </TextAreaRight>
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

const TextAreaLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  padding: 30px;
  text-align: left;
`;

const TextAreaRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
  padding: 30px;
  text-align: left;
  width: 432px;
  word-wrap: break-word;
`;

const TitleH2_About = styled.h2`
  font-size: 50px;
  text-align: left;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin: 0;
  opacity: 0.3;
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const TitleH2_Company = styled.h2`
  font-size: 50px;
  text-align: left;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 34px;
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
  }
`;

const TextRight = styled.p`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 4px;
  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.28px;
  }
`;
