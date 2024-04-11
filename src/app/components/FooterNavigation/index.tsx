import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

import * as HeaderMenu from "../../domain/headerMenu";
import * as RoutePath from "../../domain/routePath";
import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Footer>
      <Wrapper>
        <Contents>
          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={RoutePath.routePath.HOME}
              passHref
            >
              {HeaderMenu.headerMenuList.TOP}
            </StyledLink>
          </NavTextWithUnderLine>

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={RoutePath.routePath.UNDETERMINED}
              passHref
            >
              {HeaderMenu.headerMenuList.MISSION}
            </StyledLink>
          </NavTextWithUnderLine>

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={RoutePath.routePath.UNDETERMINED}
              passHref
            >
              {HeaderMenu.headerMenuList.NEWS}
            </StyledLink>
          </NavTextWithUnderLine>

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={RoutePath.routePath.COMPANY}
              passHref
            >
              {HeaderMenu.headerMenuList.COMPANY}
            </StyledLink>
          </NavTextWithUnderLine>

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={RoutePath.routePath.CONTACT}
              passHref
            >
              {HeaderMenu.headerMenuList.CONTACT}
            </StyledLink>
          </NavTextWithUnderLine>
        </Contents>

        <Contents>
          <NavText className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.headerMenuList.SERVICE}
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.serviceList.SERVICE.one}
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.serviceList.SERVICE.two}
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.serviceList.SERVICE.three}
          </NavText>

          <NavText className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.serviceList.SERVICE.four}
          </NavText>
        </Contents>

        <Contents>
          <NavText className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.storeInformation}
          </NavText>

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={"https://www.space-sleep.com/"}
              target="_blank"
              passHref
            >
              {HeaderMenu.storeInformationList.storeOne}
            </StyledLink>
          </NavTextWithUnderLine>

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLink
              href={"https://shot-village.com/"}
              target="_blank"
              passHref
            >
              {HeaderMenu.storeInformationList.storeTwo}
            </StyledLink>
          </NavTextWithUnderLine>
        </Contents>

        <Contents>
          <StyledLink
            href={"/"}
            passHref
          >
            <StyledImage
              src="/assets/logo-for-footer.svg"
              alt="Excel inc."
            />
          </StyledLink>

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

          <NavTextWithUnderLine
            className={Font.Font.CustomJosefinSans.className}
          >
            <StyledLinkWithCenter
              href={"#company"}
              passHref
            >
              PRIVACY POLICY
            </StyledLinkWithCenter>
          </NavTextWithUnderLine>
        </Contents>
      </Wrapper>

      <RightReservedText className={Font.Font.CustomJosefinSans.className}>
        ©2024 EXCEL Inc. All Rights Reserved.
      </RightReservedText>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #403e3e;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
  width: 100%;
  max-width: 1181px;

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
  padding: 0 3px;
`;

const underlineAnimation = keyframes`
  from {
    width: 0;
    left: 0;
  }
  to {
    width: 100%;
    left: 0;
  }
`;

const NavText = styled.p`
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.25px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 50px;
  }
`;

const NavTextWithUnderLine = styled.p`
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.25px;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.3s ease, left 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    animation: ${underlineAnimation} 0.3s ease forwards;
  }

  @media (max-width: 768px) {
    font-size: 14px;
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
    font-size: 11px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 130px;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 59px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;
`;

const StyledLinkWithCenter = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  text-decoration: none;
  margin-top: 10px;
`;

const Sns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  padding: 0 20px;
  gap: 20px;
`;

const SnsIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 30px;
  max-height: 30px;
  z-index: 2;
`;
