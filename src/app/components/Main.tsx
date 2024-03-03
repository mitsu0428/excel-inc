"use client";

import React from "react";
import styled from "styled-components";

import * as HearderNavigation from "./HeaderNavigation";
import * as Section1 from "./Section1";
import * as Section2 from "./Section2";
import * as Section3 from "./Section3";
import * as Section4 from "./Section4";
import * as Section5 from "./Section5";
import * as Section6 from "./Section6";
import * as FooterNavigation from "./FooterNavigation";

export const Component = () => {
  return (
    <Main>
      <HearderNavigation.Component />
      <Section1.Component />
      <Section2.Component />
      <Section3.Component />
      <Section4.Component />
      <Section5.Component />
      <Section6.Component />
      <FooterNavigation.Component />
    </Main>
  );
};

const Main = styled.main`
  background-color: #383838;
`;
