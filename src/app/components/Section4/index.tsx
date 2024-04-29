"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "@/app/styles/NextFont";

import * as Slider from "@/app/components/ui/Slider";
import * as StyledButton from "@/app/components/ui/StyledButton";

export const Component = () => {
	return (
		<Container>
			<SwitchWrapper>
				<TitleH2_Service className={Font.Font.CustomJosefinSans.className}>
					SERVICE
				</TitleH2_Service>
				<TitleH2_AND className={Font.Font.CustomJosefinSans.className}>
					&
				</TitleH2_AND>
				<TitleH2_Service className={Font.Font.CustomJosefinSans.className}>
					PRODUCT
				</TitleH2_Service>
			</SwitchWrapper>

			<Slider.Component />

			<StyledButton.Component linkTo="/contact" text="CONTACT" />
		</Container>
	);
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 138px;

  @media (max-width: 768px) {
    margin-top: 64px;
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fff;
  align-items: center;
  gap: 36px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const TitleH2_Service = styled.h2`
  font-size: 70px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.2em;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const TitleH2_AND = styled.h2`
  font-size: 50px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding: 0;

  line-height: 150%;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
