import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import * as Slider from "../ui/Slider";
import * as StyledButton from "../ui/StyledButton";
import * as Font from "../../styles/NextFont";

export const Component = () => {
  const issmartsphone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Container>
      <TitleH2_Service
        issmartsphone={issmartsphone}
        className={Font.Font.CustomGafata.className}
      >
        SERVICE & PRODUCT
      </TitleH2_Service>
      <Slider.Component />
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

const TitleH2_Service = styled.h2<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "25px" : "70px")};
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin-top: 138px;
`;
