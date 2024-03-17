"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import * as Font from "../../styles/NextFont";

type Props = {
  text: string;
  linkTo: string;
};

export const Component = (props: Props) => {
  const linkToPage = props.linkTo;
  return (
    <Wrap>
      <StyledLink
        className={Font.Font.CustomJosefinSansThin.className}
        href={linkToPage}
        target="_blank"
      >
        {props.text}
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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 331px;
  height: 55px;
  font-size: 30px;
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
