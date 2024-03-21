/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as Font from "../../styles/NextFont";

export const Component: React.FC = () => {
  const images = [
    { src: "/slide1.png", alt: "事業領域の画像" },
    { src: "/slide2.png", alt: "事業領域の画像" },
    { src: "/slide3.png", alt: "事業領域の画像" },
    { src: "/slide4.png", alt: "事業領域の画像" },
    // memo: 2週目
    { src: "/slide1.png", alt: "事業領域の画像" },
    { src: "/slide2.png", alt: "事業領域の画像" },
    { src: "/slide3.png", alt: "事業領域の画像" },
    { src: "/slide4.png", alt: "事業領域の画像" },
  ];

  const arrowPath = {
    prev: "/left-arrow.svg",
    next: "/right-arrow.svg",
  };

  const responsiveSettings = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];

  const arrowStyle = {
    background: "none",
    border: "0px",
    color: "#fff",
    margin: "0 10px",
  };

  const properties = {
    prevArrow: (
      <StyledButton
        className={Font.Font.CustomDarkerGrotesque.className}
        style={{ ...arrowStyle }}
      >
        <Image
          src={arrowPath.prev}
          alt="prev"
          width={40}
          height={40}
        />
        <Text>PREV</Text>
      </StyledButton>
    ),
    nextArrow: (
      <StyledButton
        className={Font.Font.CustomDarkerGrotesque.className}
        style={{ ...arrowStyle }}
      >
        <Text>NEXT</Text>
        <Image
          src={arrowPath.next}
          alt="prev"
          width={40}
          height={40}
        />
      </StyledButton>
    ),
  };

  return (
    <StyledWrapper>
      <Slide
        slidesToShow={1}
        slidesToScroll={1}
        responsive={responsiveSettings}
        autoplay={true}
        duration={3000}
        {...properties}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="each-slide"
          >
            <div>
              <img
                src={image.src}
                alt={image.alt}
              />
            </div>
          </div>
        ))}
      </Slide>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 64px;

  @media (max-width: 480px) {
    margin-top: 36px;
    .${Font.Font.CustomDarkerGrotesque.className} {
      font-size: 16px;
    }
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 40px;
  letter-spacing: 0.1em;
  margin-bottom: 3px; // memo: 画像との間隔を調整
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
