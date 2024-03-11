import React from "react";
import Link from "next/link";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Footer>
      <Wrapper>
        <Contents>
          <Sns>
            <StyledLink
              href={"/"}
              passHref
            >
              <SnsIcon
                src="/sns-instagram.png"
                alt="Instagram"
              />
            </StyledLink>

            <StyledLink
              href={"https://lin.ee/kaU291k"}
              target="_blank"
              passHref
            >
              <SnsIcon
                src="/sns-line.png"
                alt="Line"
              />
            </StyledLink>

            <StyledLink
              href={"https://www.tiktok.com/@inforzsb7b?_t=8kOyyHCZkNm&_r="}
              target="_blank"
              passHref
            >
              <SnsIcon
                src="/sns-tiktok.png"
                alt="TikTok"
              />
            </StyledLink>
          </Sns>

          <StyledLink
            href={"/"}
            passHref
          >
            <StyledImage
              src="/assets/logo.svg"
              alt="Excel inc."
            />
          </StyledLink>
        </Contents>

        <Contents>
          <NavText className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              TOP
            </StyledLink>
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              MISSION
            </StyledLink>
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              NEWS
            </StyledLink>
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"#company"}
              passHref
            >
              COMPANY
            </StyledLink>
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"#company"}
              passHref
            >
              CONTACT
            </StyledLink>
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"#company"}
              passHref
            >
              PRIVACY POLICY
            </StyledLink>
          </NavText>
        </Contents>

        <Contents>
          <NavText className={Font.Font.CustomJosefinSans.className}>
            SERVICE
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Marketing Solution
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Movie Production
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Owned Media
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Web Design
          </NavText>
        </Contents>

        <Contents>
          <NavText className={Font.Font.CustomJosefinSans.className}>
            SERVICE
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Marketing Solution
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Movie Production
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Owned Media
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            - Web Design
          </NavText>
        </Contents>
      </Wrapper>

      <RightReservedText className={Font.Font.CustomJosefinSans.className}>
        ©2024 EXCEL Inc. All Rights Reserved.
      </RightReservedText>
    </Footer>
  );
};

const Footer = styled.footer`
  height: auto;
  background-color: #403e3e;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 40px 60px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
`;

const NavText = styled.p`
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.25px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 50px;
  }
`;

const RightReservedText = styled.p`
  padding: 20px 0;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    padding: 16px 0;
    font-size: 18px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 150px;
  z-index: 2;
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 59px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Sns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

const SnsIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  z-index: 2;
`;
