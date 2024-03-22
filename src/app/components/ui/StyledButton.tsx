"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import * as Font from "../../styles/NextFont";

type Props = {
  text: string;
  linkTo: string;
};

export const Component = (props: Props) => {
  const linkToPage = props.linkTo;

  const arrowPath = {
    rightWhite: "/right-white.svg",
  };

  return (
    <Wrap>
      <StyledLink
        className={Font.Font.CustomJosefinSans.className}
        href={linkToPage}
        target="_blank"
      >
        <Span>{props.text}</Span>

        <StyledImage
          src={arrowPath.rightWhite}
          alt="arrow"
          width={40}
          height={40}
        />
      </StyledLink>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

const Span = styled.span`
  margin-top: 3px; // memo: 画像との間隔を調整
`;

const StyledImage = styled(Image)`
  mix-blend-mode: difference;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 331px;
  height: 65px;
  font-size: 26px;
  letter-spacing: 3px;
  border: 2px solid #fff;
  text-decoration: none;
  color: #fff;
  background: none;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #000;
    background: #fff;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 18px;
  }
`;
