"use client";

import React from "react";
import styled from "styled-components";

import * as Section2 from "./components/Sec2";
import * as Section3 from "./components/Sec3";
import * as Section4 from "./components/Sec4";
import * as Section5 from "./components/Sec5";
import * as Section6 from "./components/Sec6";
import * as FooterNavigation from "./components/FooterNavigation";

export default function Home() {
  return (
    <Main>
      {/* Section1でローディングなのかMovieなのか。 */}
      <Section2.Component />
      <Section3.Component />
      <Section4.Component />
      <Section5.Component />
      <Section6.Component />
      <FooterNavigation.Component />
    </Main>
  );
}

const Main = styled.main`
  background-color: #171717;
`;
