import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import * as Headtag from "../ui/StyledH";
import * as StyledButton from "../ui/StyledButton";
import * as NewsCard from "../ui/NewsCard";
import * as Font from "../../styles/NextFont";

export const Component = () => {
  const isSmartsPhone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Container>
      <TitleH2_News
        isSmartsPhone={isSmartsPhone}
        className={Font.Font.CustomGafata.className}
      >
        News
      </TitleH2_News>

      <NewsCard.Component />
      <StyledButton.Component
        linkTo="/"
        text="CONTACT→"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TitleH2_News = styled.h2<{ isSmartsPhone: boolean }>`
  font-size: ${({ isSmartsPhone }) => (isSmartsPhone ? "25px" : "70px")};
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin-top: 138px;
`;
