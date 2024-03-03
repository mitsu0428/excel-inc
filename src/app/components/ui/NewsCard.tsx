"use client";

import React from "react";
import styled from "styled-components";

import * as Headtag from "../ui/StyledH";

export const Component = () => {
  return (
    <Card>
      <CardBody>
        <Headtag.H3>News</Headtag.H3>
        <Image
          src="/1枚目トップの画像.png"
          alt="Frontend Radio"
        />
      </CardBody>
      <CardBody>
        <Headtag.H3>News</Headtag.H3>
        <Image
          src="/1枚目トップの画像.png"
          alt="Frontend Radio"
        />
      </CardBody>
      <CardBody>
        <Headtag.H3>News</Headtag.H3>
        <Image
          src="/1枚目トップの画像.png"
          alt="Frontend Radio"
        />
      </CardBody>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px;
  gap: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardBody = styled.div``;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
