/* eslint-disable @next/next/no-img-element */
import React from "react";
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
        ←PREV
      </StyledButton>
    ),
    nextArrow: (
      <StyledButton
        className={Font.Font.CustomDarkerGrotesque.className}
        style={{ ...arrowStyle }}
      >
        NEXT→
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
        duration={1000}
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

  .${Font.Font.CustomDarkerGrotesque.className} {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    .${Font.Font.CustomDarkerGrotesque.className} {
      font-size: 10px;
    }
  }
`;

const StyledButton = styled.button``;
