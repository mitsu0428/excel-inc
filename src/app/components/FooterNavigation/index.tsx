import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Footer>
      <Text>Excel inc. @All Right Reserved</Text>
    </Footer>
  );
};

const Footer = styled.footer`
  height: 377px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 16px;
  color: #fff;
`;
