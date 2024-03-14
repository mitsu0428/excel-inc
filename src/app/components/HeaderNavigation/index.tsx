"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <StyledLink
        href={"/"}
        passHref
      >
        <StyledImage
          src="/assets/logo.svg"
          alt="Excel inc."
        />
      </StyledLink>

      <MenuToggle onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuToggle>

      <MobileHeadArea isOpen={isOpen}>
        <MobileHeadText className={Font.Font.CustomJosefinSans.className}>
          MENU
        </MobileHeadText>

        <StyledSpanAbsoluteWhite onClick={toggleMenu}>
          close
        </StyledSpanAbsoluteWhite>
      </MobileHeadArea>

      <Menu
        isOpen={isOpen}
        onClick={closeMenu}
      >
        <StyledUl isOpen={isOpen}>
          <StyledLi className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>TOP</StyledSpan>
            </StyledLink>
          </StyledLi>
          <VerticalBorder />
          <StyledLi className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>MISSION</StyledSpan>
            </StyledLink>
          </StyledLi>
          <VerticalBorder />
          <StyledLi className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>SERVICE</StyledSpan>
            </StyledLink>
          </StyledLi>
          <VerticalBorder />
          <StyledLi className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              target="_blank"
              href={"https://note.com/excelinc/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>NEWS</StyledSpan>
            </StyledLink>
          </StyledLi>
          <VerticalBorder />
          <StyledLi className={Font.Font.CustomJosefinSans.className}>
            <StyledLink
              href={"#company"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>COMPANY</StyledSpan>
            </StyledLink>
          </StyledLi>
          <StyledLi className={Font.Font.CustomJosefinSans.className}>
            <StyledSpecialLink
              href={"/contact"}
              passHref
            >
              <StyledSpecialSpan onClick={closeMenu}>CONTACT</StyledSpecialSpan>
            </StyledSpecialLink>
          </StyledLi>
          <SnsWrapper isOpen={isOpen}>
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
        </StyledUl>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  padding: 80px 60px;
  position: fixed;
  z-index: 1;

  mix-blend-mode: difference;

  @media (max-width: 768px) {
    mix-blend-mode: normal;
    height: 71px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSpecialLink = styled(Link)`
  text-decoration: none;
  border: 1px solid #fff;
  background-color: #fff;
  padding: 4px 18px;
`;

const StyledUl = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 44px;
    background-color: rgba(
      0,
      0,
      0,
      0.9
    ); // Optional: background color for mobile menu
    width: 100%;
    align-items: center;
  }
`;

const StyledLi = styled.li`
  color: #fff;
  font-size: 25px;
  line-height: normal;
  letter-spacing: 1px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 88px;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 59px;
  }
`;

const MenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    div {
      width: 29px;
      height: 2px;
      background-color: #fff;
      border-radius: 23px;
      margin: 3px 0;
    }
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 100%;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    z-index: 2;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: left;
      height: 100%;
      background-color: #fff;
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 70px;
    }

    li {
      margin-bottom: 20px;
    }

    padding-top: 71px;
  }
`;

const VerticalBorder = styled.span`
  width: 1px;
  height: 18px;
  background-color: #fff;
`;

const StyledSpan = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1.6px;

  @media (max-width: 768px) {
    color: #000;
  }
`;

const StyledSpecialSpan = styled.span`
  color: #000;
  text-decoration: none;
  font-size: 16px;

  @media (max-width: 768px) {
    color: #000;
  }
`;

const StyledSpanAbsoluteWhite = styled.span`
  color: #fff;
  text-decoration: none;
`;

const MobileHeadArea = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background-color: #383838;
  padding: 20px 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  justify-content: space-between;
`;

const MobileHeadText = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.4px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const FollowUsText = styled.p`
  color: #000;
  text-align: center;
  font-family: "Myanmar Sangam MN";
  font-size: 20px;
  font-weight: 400;
  line-height: 125px; /* 833.333% */
  letter-spacing: 0.75px;
  text-decoration-line: underline;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const SnsWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const SnsIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 37px;
  max-height: 37px;
  z-index: 100;
`;
