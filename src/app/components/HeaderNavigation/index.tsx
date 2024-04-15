"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import * as SNSList from "@/app/domain/snsList";
import * as HeaderMenu from "@/app/domain/headerMenu";
import * as RoutePath from "@/app/domain/routePath";
import * as AssetsPath from "@/app/domain/assetsPath";

import * as Font from "@/app/styles/NextFont";

export const Component = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <PC_SCREEN>
        <RowWrapper>
          <StyledLink
            href={RoutePath.routePath.HOME}
            passHref
          >
            <Logo
              src={AssetsPath.logoLink}
              alt="Excel inc."
            />
          </StyledLink>
        </RowWrapper>

        <RowWrapper>
          {HeaderMenu.headerMenu.map((item, index) =>
            item.PCText === "CONTACT" ? (
              <StyledLinkContact
                href={item.link}
                passHref
                key={index}
              >
                <StyledSpanContact
                  className={Font.Font.CustomJosefinSans.className}
                >
                  {item.PCText}
                </StyledSpanContact>
              </StyledLinkContact>
            ) : (
              <StyledLink
                href={item.link}
                passHref
                key={index}
              >
                <StyledSpan className={Font.Font.CustomJosefinSans.className}>
                  {item.PCText}
                </StyledSpan>
              </StyledLink>
            )
          )}
        </RowWrapper>
      </PC_SCREEN>

      <SP_SCREEN>
        <SP_SCREEN_HEADER>
          <StyledLink
            href={RoutePath.routePath.HOME}
            passHref
          >
            <Logo
              src={AssetsPath.logoLink}
              alt="Excel inc."
            />
          </StyledLink>

          <OpenWrapper
            $isOpen={isOpen}
            onClick={() => toggleMenu(isOpen)}
          >
            <OpenOneSpan $isOpen={isOpen} />
            <OpenTwoSpan $isOpen={isOpen} />
            <OpenThreeSpan $isOpen={isOpen} />
          </OpenWrapper>
        </SP_SCREEN_HEADER>

        <SP_SCREEN_MENU $isOpen={isOpen}>
          <SP_SCREEN_HEADER>
            <StyledLink
              href={RoutePath.routePath.HOME}
              passHref
              onClick={() => toggleMenu(isOpen)}
            >
              <Logo
                src={AssetsPath.logoLink}
                alt="Excel inc."
              />
            </StyledLink>

            <CloseButton
              $isOpen={isOpen}
              onClick={() => toggleMenu(isOpen)}
            />
          </SP_SCREEN_HEADER>

          <SP_SCREEN_CONTENTS className={Font.Font.CustomJosefinSans.className}>
            {HeaderMenu.headerMenu.map((item, index) => (
              <RowWrapperWithUpderLine
                key={index}
                onClick={() => toggleMenu(isOpen)}
              >
                <StyledLink
                  href={item.link}
                  passHref
                >
                  <StyledSpan>
                    {item.SPText}
                    <StyledSpanSmall>{item.SPTextSmall}</StyledSpanSmall>
                  </StyledSpan>
                </StyledLink>
              </RowWrapperWithUpderLine>
            ))}
          </SP_SCREEN_CONTENTS>

          <SP_SCREEN_FOOTER>
            <StyledSpan className={Font.Font.CustomNotoSansMyanmar.className}>
              FOLLOW US
            </StyledSpan>

            <SNSWrapper>
              <StyledLink
                href={SNSList.snsLink.instagram.link}
                passHref
                target="_blank"
              >
                <Image
                  src={SNSList.snsLink.instagram.icon}
                  alt={SNSList.snsLink.instagram.text}
                  width={30}
                  height={30}
                />
              </StyledLink>

              <StyledLink
                href={SNSList.snsLink.line.link}
                passHref
                target="_blank"
              >
                <Image
                  src={SNSList.snsLink.line.icon}
                  alt={SNSList.snsLink.line.text}
                  width={30}
                  height={30}
                />
              </StyledLink>

              <StyledLink
                href={SNSList.snsLink.tiktok.link}
                passHref
                target="_blank"
              >
                <Image
                  src={SNSList.snsLink.tiktok.icon}
                  alt={SNSList.snsLink.tiktok.text}
                  width={30}
                  height={30}
                />
              </StyledLink>
            </SNSWrapper>
          </SP_SCREEN_FOOTER>
        </SP_SCREEN_MENU>
      </SP_SCREEN>
    </Wrapper>
  );
};

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

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    position: relative;
    z-index: 100;
  }
`;

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
  padding: 18px 18px;

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
  padding: 18px 18px;
`;

// memo: 横並びにする
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  gap: 36px;
`;

const RowWrapperWithUpderLine = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  gap: 36px;
  width: 100%;
  padding: 16px 0;
  border-bottom: rgba(255, 255, 255, 0.3) 1px solid;
`;

// memo: SNSのアイコン
const SNSWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

// memo: 横並びにする(間隔を空ける)
const SP_SCREEN_HEADER = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// memo: 縦並びにする
const SP_SCREEN_CONTENTS = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 20px;
  margin-top: 36px;
  text-align: left;
`;

// memo: SNSのアイコン
const SP_SCREEN_FOOTER = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  margin-top: 36px;
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

// memo: ハンバーガーメニュー
const OpenWrapper = styled.div<{ $isOpen: boolean }>`
  display: inline-block;
  cursor: pointer;
  position: relative;
  width: 30px;
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

// memo: ハンバーガーメニューの線
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
  width: 2em;
  height: 0.05em;
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

// memo: メニューのテキスト
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLinkContact = styled(Link)`
  text-decoration: none;
  border: 1px solid #fff;
  background-color: #fff;
  padding: 6px 24px;
`;

// memo: メニューのテキスト
const StyledSpan = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1.6px;
  position: relative;
  overflow: hidden;
  margin-left: 12px;

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

const StyledSpanSmall = styled.span`
  font-size: 10px;
  margin-left: 6px;
  color: #868686;
  text-decoration: none;
`;

const StyledSpanContact = styled.span`
  color: #000;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1.6px;
`;
