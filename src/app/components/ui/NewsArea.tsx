"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import * as Font from "@/app/styles/NextFont";

type Props = {
	text: string;
	linkTo: string;
};

export const Component = (props: Props) => {
	const linkToPage = props.linkTo;
	return (
		<Wrap>
			<StyledLink
				className={Font.Font.CustomNotoSansMyanmar.className}
				href={linkToPage}
				target="_blank"
			>
				{props.text}
			</StyledLink>
		</Wrap>
	);
};

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 60px;

  @media (max-width: 768px) {
    right: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: "Myanmar Sangam MN";
  font-size: 22px;
  font-weight: 400;
  line-height: 80px;
  letter-spacing: 1.1px;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 125px;
  }
`;
