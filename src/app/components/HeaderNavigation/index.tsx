"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import * as Font from "../../styles/NextFont";

type renderMenuProps = {
  isSmartsPhone: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Component = () => {
  const isSmartsPhone = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <StyledImage
        src="/assets/logo.png"
        alt="Excel inc."
        width={isSmartsPhone ? 59 : 78}
        height={isSmartsPhone ? 44 : 58}
        layout={"absoluteFillObject"}
      />
      {renderMenu(isSmartsPhone, isOpen, setIsOpen)}
    </Wrapper>
  );
};

const renderMenu = (
  isSmartsPhone: boolean,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <StyledUl>
      <StyledLi className={Font.Font.CustomGafata.className}>MISSION</StyledLi>
      <StyledLi className={Font.Font.CustomGafata.className}>SERVISE</StyledLi>
      <StyledLi className={Font.Font.CustomGafata.className}>NEWS</StyledLi>
      <StyledLi className={Font.Font.CustomGafata.className}>COMPANY</StyledLi>
      <StyledLi className={Font.Font.CustomGafata.className}>CONTACT</StyledLi>
    </StyledUl>
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
`;

const StyledUl = styled.ul<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
`;

const StyledLi = styled.li`
  color: #fff;
  text-align: right;
  font-size: 25px;
  line-height: normal;
  letter-spacing: 1px;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  z-index: 2;
`;
