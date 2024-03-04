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
          src="/assets/logo.png"
          alt="Excel inc."
        />
      </StyledLink>

      <MenuToggle onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuToggle>

      <Menu
        isOpen={isOpen}
        onClick={closeMenu}
      >
        <StyledUl isOpen={isOpen}>
          <StyledLi className={Font.Font.CustomGafata.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>MISSION</StyledSpan>
            </StyledLink>
          </StyledLi>
          <StyledLi className={Font.Font.CustomGafata.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>SERVICE</StyledSpan>
            </StyledLink>
          </StyledLi>
          <StyledLi className={Font.Font.CustomGafata.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>NEWS</StyledSpan>
            </StyledLink>
          </StyledLi>
          <StyledLi className={Font.Font.CustomGafata.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>COMPANY</StyledSpan>
            </StyledLink>
          </StyledLi>
          <StyledLi className={Font.Font.CustomGafata.className}>
            <StyledLink
              href={"/"}
              passHref
            >
              <StyledSpan onClick={closeMenu}>CONTACT</StyledSpan>
            </StyledLink>
          </StyledLi>
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
  background-color: rgba(255, 255, 255, 0.3);
  padding: 13px;
  position: fixed;
  z-index: 1;

  @media (max-width: 768px) {
    height: 71px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
    top: 71px; // Adjust this value based on your actual header height
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
  text-align: right;
  font-size: 25px;
  line-height: normal;
  letter-spacing: 1px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 78px;
  max-height: 58px;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 59px;
    max-height: 44px;
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
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    z-index: 2;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 20px;
    }

    padding-top: 71px;
  }
`;

const StyledSpan = styled.span`
  color: #fff;
  text-decoration: none;
`;
