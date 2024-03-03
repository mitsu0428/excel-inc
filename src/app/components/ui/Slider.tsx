"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Component: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/2枚目の画像SP.png",
      alt: "事業領域の画像",
      width: 390,
      height: 844,
    },
    {
      src: "/2枚目の画像SP.png",
      alt: "事業領域の画像",
      width: 390,
      height: 844,
    },
    {
      src: "/2枚目の画像SP.png",
      alt: "事業領域の画像",
      width: 390,
      height: 844,
    },
  ];

  const goToNextSlide = React.useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // 5秒ごとに次のスライドに切り替える
    return () => clearInterval(interval);
  }, [currentSlide, goToNextSlide]);

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <Slide
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        />
      ))}
      <LeftArrow onClick={goToPrevSlide}>
        <FaChevronLeft />
      </LeftArrow>
      <RightArrow onClick={goToNextSlide}>
        <FaChevronRight />
      </RightArrow>
    </SlideshowContainer>
  );
};

const SlideshowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  transition: transform 0.5s ease;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 2;
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
  color: #fff;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
  color: #fff;
`;
