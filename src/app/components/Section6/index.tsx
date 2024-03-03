import React from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import * as Font from "../../styles/NextFont";

// MEMO: スマホ画面のようなモーダルを表示するためのコンポーネント
export const Component = () => {
  const issmartsphone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Container issmartsphone={issmartsphone}>
      <MobileView issmartsphone={issmartsphone}>
        <MobileBorder />
        <TitleH2_MobileView
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          OUR COMPANY
        </TitleH2_MobileView>

        <Contents issmartsphone={issmartsphone}>
          <ContentsLeft issmartsphone={issmartsphone}>
            <ContentsText issmartsphone={issmartsphone}>
              [会社名]
              <br />
              EXCEL Inc.（エクセルインク）
            </ContentsText>

            <ContentsText issmartsphone={issmartsphone}>
              [所在地]
              <br />
              〒107-0062
              <br />
              東京都港区南青山5-12-27
              <br />
              WISE 512ビル 305
            </ContentsText>

            <ContentsText issmartsphone={issmartsphone}>
              [電話番号]
              <br />
              03-6824-4903
            </ContentsText>

            <ContentsText issmartsphone={issmartsphone}>
              [資本金]
              <br />
              500万円
            </ContentsText>

            <ContentsText issmartsphone={issmartsphone}>
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

          <ContentsRight issmartsphone={issmartsphone}>
            何かしらのコンテンツが入る？？
          </ContentsRight>
        </Contents>
      </MobileView>
    </Container>
  );
};

const Container = styled.div<{ issmartsphone: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: ${({ issmartsphone }) => (issmartsphone ? "33px" : "50px")};
  margin-top: 138px;
  width: 100%;
  height: 100%;
`;

const MobileView = styled.div<{ issmartsphone: boolean }>`
  width: ${({ issmartsphone }) => (issmartsphone ? "324px" : "1181px")};
  height: ${({ issmartsphone }) => (issmartsphone ? "760px" : "1474px")};
  border-radius: ${({ issmartsphone }) => (issmartsphone ? "52px" : "89px")};
  background: #f9f9f9;
  padding: ${({ issmartsphone }) => (issmartsphone ? "50px" : "20px")};
`;

const MobileBorder = styled.div`
  margin: 0 439px;
  margin-top: 50px;
  width: 303px;
  height: 13px;
  border-radius: 27px;
  background: #d9d9d9;
`;

const Contents = styled.div<{ issmartsphone: boolean }>`
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  height: 100%;
  gap: ${({ issmartsphone }) => (issmartsphone ? "17px" : "44px")};
`;

const ContentsRight = styled.div<{ issmartsphone: boolean }>`
  padding: 16px;
  text-align: center;
  width: 50%;
  height: ${({ issmartsphone }) => (issmartsphone ? "276px" : "797px")};
  background: #d9d9d9;
`;

const ContentsLeft = styled.div<{ issmartsphone: boolean }>`
  padding: 16px;
  text-align: center;
  width: 50%;
  height: ${({ issmartsphone }) => (issmartsphone ? "276px" : "797px")};
`;

const ContentsText = styled.p<{ issmartsphone: boolean }>`
  color: #000;
  font-family: YuGothic;
  font-size: ${({ issmartsphone }) => (issmartsphone ? "8px" : "25px")};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

const TitleH2_MobileView = styled.h2<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "25px" : "70px")};
  text-align: center;
  font-weight: 600;
  color: #000;
  letter-spacing: 14px;
  margin-top: 138px;
  text-decoration: underline;
`;
