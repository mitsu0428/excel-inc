"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };

  const menu = [
    {
      text: "TOP",
      link: "/",
    },
    {
      text: "MISSION",
      link: "/",
    },
    {
      text: "SERVICE",
      link: "/",
    },
    {
      text: "NEWS",
      link: "https://note.com/excelinc/",
    },
    {
      text: "COMPANY",
      link: "#company",
    },
    {
      text: "CONTACT",
      link: "/contact",
    },
  ];

  const snsLink = [
    {
      text: "Instagram",
      link: "/",
      icon: "/sns-instagram.png",
    },
    {
      text: "TikTok",
      link: "https://www.tiktok.com/@inforzsb7b?_t=8kOyyHCZkNm&_r=",
      icon: "/sns-tiktok.png",
    },
    {
      text: "Line",
      link: "https://line.me/R/ti/p/@595weqhc?oat_content=url",
      icon: "/sns-line.png",
    },
  ];

  const logoLink = "/assets/logo.svg";

  const FOLLOW_US = "FOLLOW US";

  return (
    <Wrapper>
      <PC_SCREEN>
        <RowWrapper>
          <Logo
            src={logoLink}
            alt="Excel inc."
            onClick={() => toggleMenu(isOpen)}
          />
        </RowWrapper>

        <RowWrapper className={Font.Font.CustomJosefinSans.className}>
          {menu.map((item, index) =>
            item.text === "CONTACT" ? (
              <StyledLinkContact
                href={item.link}
                passHref
                key={index}
              >
                <StyledSpanContact>{item.text}</StyledSpanContact>
              </StyledLinkContact>
            ) : (
              <StyledLink
                href={item.link}
                passHref
                key={index}
              >
                <StyledSpan>{item.text}</StyledSpan>
              </StyledLink>
            )
          )}
        </RowWrapper>
      </PC_SCREEN>

      <SP_SCREEN>
        <RowSpaceBetweenWrapper>
          <Logo
            src={logoLink}
            alt="Excel inc."
          />

          <OpenWrapper
            $isOpen={isOpen}
            onClick={() => toggleMenu(isOpen)}
          >
            <OpenOneSpan $isOpen={isOpen} />
            <OpenTwoSpan $isOpen={isOpen} />
            <OpenThreeSpan $isOpen={isOpen} />
          </OpenWrapper>
        </RowSpaceBetweenWrapper>

        <SP_SCREEN_MENU $isOpen={isOpen}>
          <RowSpaceBetweenWrapper>
            <Logo
              src={logoLink}
              alt="Excel inc."
            />
            <CloseButton
              $isOpen={isOpen}
              onClick={() => toggleMenu(isOpen)}
            />
          </RowSpaceBetweenWrapper>

          <ColumnWrapper className={Font.Font.CustomJosefinSans.className}>
            {menu.map((item, index) => (
              <RowWrapper key={index}>
                <StyledLink
                  href={item.link}
                  passHref
                >
                  <StyledSpan>{item.text}</StyledSpan>
                </StyledLink>
              </RowWrapper>
            ))}
          </ColumnWrapper>

          <SNSWrapper>
            <StyledSpan>{FOLLOW_US}</StyledSpan>
            {snsLink.map((item, index) => (
              <StyledLink
                href={item.link}
                passHref
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={30}
                  height={30}
                />
              </StyledLink>
            ))}
          </SNSWrapper>
        </SP_SCREEN_MENU>
      </SP_SCREEN>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

// memo: PC_SCREENのメニュー
const PC_SCREEN = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 1;
  mix-blend-mode: difference;
  height: 84px;

  padding: 80px 60px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// memo: SP_SCREENのメニュー
const SP_SCREEN = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 1;
  mix-blend-mode: normal;
  height: 71px;
  padding: 36px 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

// memo: SP_SCREEN OPEN時のメニュー
const SP_SCREEN_MENU = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 100;
  padding: 36px 20px;
`;

// memo: 横並びにする
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  gap: 20px;
`;

// memo: 横並びにする(間隔を空ける)
const RowSpaceBetweenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// memo: 縦並びにする
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  gap: 20px;
`;

// memo: SNSのアイコン
const SNSWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 20px;
  margin-top: 20px;
`;

// memo: ロゴ
const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 88px;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 65px;
  }
`;

const OpenWrapper = styled.div<{ $isOpen: boolean }>`
  display: inline-block;
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 20px;
  vertical-align: middle;

  & > span {
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    transition: 0.3s;
  }

  & > span:nth-child(1) {
    top: ${(props) => (props.$isOpen ? "50%" : "0")};
    transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "none")};
  }

  & > span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }

  & > span:nth-child(3) {
    bottom: ${(props) => (props.$isOpen ? "50%" : "0")};
    transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "none")};
  }
`;

const OpenOneSpan = styled.span<{ $isOpen: boolean }>`
  top: ${(props) => (props.$isOpen ? "50%" : "0")};
  transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "none")};
`;

const OpenTwoSpan = styled.span<{ $isOpen: boolean }>`
  top: 50%;
  transform: translateY(-50%);
  opacity: ${(props) => (props.$isOpen ? "0" : "1")};
`;

const OpenThreeSpan = styled.span<{ $isOpen: boolean }>`
  bottom: ${(props) => (props.$isOpen ? "50%" : "0")};
  transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "none")};
`;

// memo: バツボタン
const CloseButton = styled.span<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "inline-block" : "none")};
  vertical-align: middle;
  color: #fff;
  line-height: 1;
  width: 1em;
  height: 0.1em;
  background: currentColor;
  border-radius: 0.1em;
  position: relative;
  transform: rotate(45deg);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    transform: rotate(90deg);
  }
`;

// memo: 下線を引くアニメーション
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

// memo: メニューのテキスト
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLinkContact = styled(Link)`
  text-decoration: none;
  border: 1px solid #fff;
  background-color: #fff;
  padding: 4px 18px;
`;

// memo: メニューのテキスト
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

const StyledSpanContact = styled.span`
  color: #000;
  text-decoration: none;
  font-size: 16px;
`;
