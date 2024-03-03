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
      <StyledImage
        src={issmartsphone ? "/2枚目の画像SP.png" : "/2枚目の画像.png"}
        alt="2枚目のトップ画像"
        width={issmartsphone ? 390 : 1279}
        height={issmartsphone ? 844 : 832}
      />

      <TextAreaLeft>
        <TitleH2_About issmartsphone={issmartsphone}> ABOUT</TitleH2_About>
        <TitleH2_Company issmartsphone={issmartsphone}>
          EXCEL inc.
        </TitleH2_Company>
        <TitleH2_Concept issmartsphone={issmartsphone}>
          BEYOND EXPECTATIONS AND IMAGINATIONS.
        </TitleH2_Concept>
      </TextAreaLeft>

      <TextAreaRight>
        <TextRight issmartsphone={issmartsphone}>
          革新的でワクワクする、それでいてクールなものを追求し、常に私たちが最前線で体現していく。
        </TextRight>
        <TextRight issmartsphone={issmartsphone}>
          明日さえも予測不可能な現代社会で、誰よりも深く思考し、
        </TextRight>
        <TextRight issmartsphone={issmartsphone}>
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
  height: 100%;
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

const TitleH2_About = styled.h2<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "34px" : "50px")};
  text-align: left;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin: 0;
  opacity: 0.3;
`;

const TitleH2_Company = styled.h2<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "34px" : "50px")};
  text-align: left;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin: 0;
`;

const TitleH2_Concept = styled.h2<{ issmartsphone: boolean }>`
  color: #f9f9f9;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: ${({ issmartsphone }) => (issmartsphone ? "12px" : "28px")};
  font-style: italic;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.56px;
`;

const TextRight = styled.p<{ issmartsphone: boolean }>`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: ${({ issmartsphone }) => (issmartsphone ? "14px" : "20px")};
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: ${({ issmartsphone }) => (issmartsphone ? "0.28px" : "4px")};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
