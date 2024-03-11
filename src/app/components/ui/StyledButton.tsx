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
      <Button>
        <StyledLink
          className={Font.Font.CustomJosefinSansThin.className}
          href={linkToPage}
          target="_blank"
        >
          {props.text}
        </StyledLink>
      </Button>
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

const Button = styled.button`
  width: 331px;
  height: 55px;
  border: 2px solid #fff;
  color: #fff;
  background: none;
  text-align: center;
  font-size: 30px;
  line-height: normal;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    width: 236px;
    height: 34px;
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
