"use client";

import React from "react";
import styled from "styled-components";

import * as StyledButton from "../ui/StyledButton";
import * as NewsCard from "../ui/NewsCard";
import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <TitleH2_News className={Font.Font.CustomGafata.className}>
        News
      </TitleH2_News>

      <NewsCard.Component />

      <StyledButton.Component
        linkTo="https://note.com/excelinc"
        text="MORE→"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TitleH2_News = styled.h2`
  font-size: 70px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin-top: 138px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
