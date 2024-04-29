"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import * as Font from "@/app/styles/NextFont";

export const Component = () => {
	return (
		<Container id="company">
			<StyledMobileView>
				<MobileBorder />

				<TitleH2_MobileView className={Font.Font.CustomJosefinSans.className}>
					OUR COMPANY
				</TitleH2_MobileView>

				<Contents>
					<ContentsLeft>
						<ContentsTable className={Font.Font.CustomGotchicA1.className}>
							<tbody>
								<tr>
									<StyledTdWithBorder>会社名</StyledTdWithBorder>
									<StyledTd>EXCEL Inc.（エクセルインク）</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>設立</StyledTdWithBorder>
									<StyledTd>2023年1月</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>資本金</StyledTdWithBorder>
									<StyledTd>500万円</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>所在地</StyledTdWithBorder>
									<StyledTd>
										〒107-0062
										<br />
										東京都港区南青山5-12-27 WISE 512ビル 305
									</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>電話番号</StyledTdWithBorder>
									<StyledTd>03-6824-4903</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>代表者</StyledTdWithBorder>
									<StyledTd>代表取締役　樋口 絢太</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>従業員数</StyledTdWithBorder>
									<StyledTd>２０名（業務委託・アルバイト含む）</StyledTd>
								</tr>

								<tr>
									<StyledTdWithBorder>事業内容</StyledTdWithBorder>
									<SpecialStyledTd>
										・マーケティングソリューション事業
										<br />
										・映像制作事業
										<br />
										・メディア運営事業
										<br />
										・サイト制作事業
									</SpecialStyledTd>
								</tr>
							</tbody>
						</ContentsTable>
					</ContentsLeft>

					<ContentsMap>
						<StyledIframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6291416158138!2d139.71004377578265!3d35.66150773105737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6093b6911b%3A0x8221cc0251336e2f!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yV5LiB55uu77yR77yS4oiS77yS77yXIOODr-OCpOOCuu-8le-8ke-8kuODk-ODqw!5e0!3m2!1sja!2sjp!4v1709983095576!5m2!1sja!2sjp"
							width="600"
							height="450"
							loading="lazy"
						></StyledIframe>
					</ContentsMap>
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
    padding: 0 8px;
  }
`;

const StyledMobileView = styled.div`
  position: static;
  width: 100%;
  max-width: 1181px;
  height: 100%;

  border-radius: 89px 89px 0 0;
  background: #f9f9f9;
  padding: 0 50px 50px 50px;
  box-sizing: border-box;
  margin-top: auto;

  @media (max-width: 768px) {
    border-radius: 52px 52px 0 0;
    background: #f9f9f9;
    padding: 12px;
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
  flex-direction: row;
  align-items: top;
  width: 100%;
  height: auto;
  gap: 44px;

  @media (max-width: 768px) {
    gap: 17px;
    flex-direction: column;
  }
`;

const ContentsMap = styled.div`
  margin-top: 32px;
  padding: 16px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const ContentsLeft = styled.div`
  margin-top: 64px;
  padding: 16px;
  text-align: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 32px;
    padding: 0;
  }
`;

const ContentsTable = styled.table`
  width: 100%;
  font-size: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTdWithBorder = styled.td`
  font-size: 16px;
  padding: 16px 16px;
  border-bottom: 1px solid #232322;
  text-align: justify;
  text-align-last: justify;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 8px;
    white-space: nowrap;
  }
`;

const SpecialStyledTd = styled.td`
  font-size: 16px;
  padding: 16px 16px;
  height: 100%;
  border-bottom: 1px solid #ddd;
  letter-spacing: 0.5px;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 8px;
    line-height: 24px;
  }
`;

const StyledTd = styled.td`
  font-size: 16px;
  padding: 16px 16px;
  border-bottom: 1px solid #ddd;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 8px;
  }
`;

const TitleH2_MobileView = styled.h2`
  text-align: center;
  font-weight: 600;
  color: #000;
  letter-spacing: 14px;
  font-size: 70px;
  margin-top: 88px;

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
    height: 300px;
  }
`;
