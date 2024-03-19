"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

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
        <StyledLogo
          $isOpen={isOpen}
          src="/assets/logo.svg"
          alt="Excel inc."
        />
      </StyledLink>

      <MenuToggle
        $isOpen={isOpen}
        onClick={toggleMenu}
      >
        <Line />
        <Line />
        <Line />
      </MenuToggle>

      <MobileHeadArea $isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>
          <CrossLine style={{ top: "50%", transform: "rotate(45deg)" }} />
          <CrossLine style={{ top: "50%", transform: "rotate(-45deg)" }} />
        </CloseButton>
      </MobileHeadArea>

      <Menu
        $isOpen={isOpen}
        onClick={closeMenu}
      >
        <StyledUl $isOpen={isOpen}>
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

          <RowWrapper>
            <FollowUsText
              $isOpen={isOpen}
              className={Font.Font.CustomNotoSansMyanmar.className}
            >
              FOLLOW US
            </FollowUsText>

            <SnsWrapper $isOpen={isOpen}>
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
          </RowWrapper>
        </StyledUl>
      </Menu>
    </Wrapper>
  );
};

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-direction: row;
`;

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
    padding: 20px 20px;
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

const StyledUl = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 44px;
  }
`;

const StyledLi = styled.li`
  line-height: normal;
  font-size: 25px;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
`;

const StyledLogo = styled.img<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 88px;
  z-index: 2;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "")};
    max-width: 65px;
  }
`;

const MenuToggle = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
    flex-direction: column;
    cursor: pointer;
  }
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    background-color: #000;
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 2;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: left;
      height: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 70px;
    }

    li {
      margin-bottom: 20px;
      color: #fff;
      text-align: left;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

const VerticalBorder = styled.span`
  width: 1px;
  height: 18px;
  background-color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
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

const StyledSpan = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1.6px;
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
    z-index: -1;
  }

  &:hover::before {
    animation: ${underlineAnimation} 0.3s ease forwards;
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

const CloseButton = styled.span`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
`;

const Line = styled.div`
  width: 29px;
  height: 2px;
  background-color: #fff;
  border-radius: 23px;
  margin: 3px 0;
`;

const CrossLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform: rotate(45deg);
`;

const MobileHeadArea = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    width: 100%;
    justify-content: space-between;
  }
`;

const SnsWrapper = styled.div<{ $isOpen: boolean }>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  width: 100%;

  display: none;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }
`;

const SnsIcon = styled.img`
  width: 100%;
  max-width: 37px;
  max-height: 37px;
`;

const FollowUsText = styled.p<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.75px;
    text-decoration-line: underline;
    font-size: 14px;
    white-space: nowrap;
  }
`;
