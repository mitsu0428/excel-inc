import React from "react";
import styled from "styled-components";

import * as Headtag from "../ui/StyledH";
import * as Font from "../../styles/NextFont";

// MEMO: スマホ画面のようなモーダルを表示するためのコンポーネント
export const Component = () => {
  return (
    <Container>
      <MobileView>
        <MobileBorder />
        <Headtag.H2B_WithUnderLine className={Font.Font.CustomGafata.className}>
          OUR COMPANY
        </Headtag.H2B_WithUnderLine>

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
  width: 100%;
  height: 100%;
`;

const MobileView = styled.div`
  width: 1181px;
  height: 1474px;
  border-radius: 89px;
  background: #f9f9f9;
  padding: 50px;
`;

const MobileBorder = styled.div`
  margin: 0 439px;
  margin-top: 50px;
  width: 303px;
  height: 13px;
  border-radius: 27px;
  background: #d9d9d9;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  height: 100%;
  gap: 44px;
`;

const ContentsRight = styled.div`
  padding: 16px;
  width: 50%;
  height: 874px;
  text-align: center;
  height: 797px;
  background: #d9d9d9;
`;

const ContentsLeft = styled.div`
  padding: 16px;
  width: 50%;
  height: 874px;
  border-radius: 50px;
  text-align: center;
`;

const ContentsText = styled.p`
  color: #000;
  font-family: YuGothic;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;
