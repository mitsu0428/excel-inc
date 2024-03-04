import React from "react";
import Link from "next/link";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Footer>
      <Wrapper>
        <LeftContents>
          <SnsWrapper>
            <FollowUsText className={Font.Font.CustomNotoSansMyanmar.className}>
              FOLLOW US
            </FollowUsText>
            <SnsIcon
              src="/sns-instagram.png"
              alt="Instagram"
            />
            <SnsIcon
              src="/sns-line.png"
              alt="Line"
            />
            <SnsIcon
              src="/sns-tiktok.png"
              alt="TikTok"
            />
          </SnsWrapper>

          <WrapperColumn>
            <CompanyInformationText>EXCEL inc.</CompanyInformationText>
            <CompanyInformationText>
              〒107-0062 東京都港区南青山5-12-27
            </CompanyInformationText>
            <CompanyInformationText>WISE 512ビル 305</CompanyInformationText>
            <br />
            <CompanyInformationText>Tel.03-6824-4903</CompanyInformationText>
          </WrapperColumn>
        </LeftContents>

        <Center1Contents>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              TOP
            </StyledLink>
          </NavText>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            ABOUT
          </NavText>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            NEWS
          </NavText>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            FAQ
          </NavText>
        </Center1Contents>

        <Center2Contents>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            SERVICE
          </NavText>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            - Movie
          </NavText>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            - Web SNS
          </NavText>
          <NavText className={Font.Font.CustomNotoSansMyanmar.className}>
            - Liver
          </NavText>
        </Center2Contents>

        <RightContents>
          <StyledLink
            href={"/"}
            passHref
          >
            <StyledImage
              src="/assets/logo-big.png"
              alt="Excel inc."
            />
          </StyledLink>
        </RightContents>
      </Wrapper>

      <RightReservedText>Excel inc. @All Right Reserved</RightReservedText>
    </Footer>
  );
};

const Footer = styled.footer`
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 40px 60px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContents = styled.div`
  width: 259px;
  height: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Center1Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Center2Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LeftContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

// 一番左側のコンテンツ
const FollowUsText = styled.p`
  width: 100%;
  color: #fff;
  font-size: 31px;
  font-family: "Myanmar Sangam MN";
  font-weight: 400;
  line-height: 125px; /* 403.226% */
  letter-spacing: 1.55px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 100px; /* 403.226% */
  }
`;

// 一番左側のコンテンツ
const CompanyInformationText = styled.p`
  width: 100%;
  color: #fff;
  font-size: 25px;
  font-family: "Myanmar Sangam MN";
  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// 真ん中2つのコンテンツ
const NavText = styled.p`
  width: 100%;
  color: #fff;
  font-family: "Myanmar Sangam MN";
  font-size: 25px;
  font-weight: 400;
  line-height: 70px; /* 280% */
  letter-spacing: 1.25px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 56px; /* 280% */
  }
`;

const RightReservedText = styled.p`
  padding: 20px 0;
  font-size: 22px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    padding: 16px 0;
    font-size: 8px;
  }
`;

const StyledImage = styled.img`
  z-index: 2;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const SnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const SnsIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 68px;
  max-height: 68px;
  z-index: 2;
`;
