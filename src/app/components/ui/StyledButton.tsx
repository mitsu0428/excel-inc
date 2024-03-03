"use client";

import React from "react";
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
          className={Font.Font.CustomJosefinSans.className}
          href={linkToPage}
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
  letter-spacing: 1.5px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
