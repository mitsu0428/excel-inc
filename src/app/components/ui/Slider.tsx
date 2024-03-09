"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Component: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const images = [
    { src: "/slide1.png", alt: "事業領域の画像" },
    { src: "/slide2.png", alt: "事業領域の画像" },
    { src: "/slide3.png", alt: "事業領域の画像" },
    { src: "/slide4.png", alt: "事業領域の画像" },
  ];

  const totalSlides = images.length;

  const goToNextSlide = React.useCallback(() => {
    setCurrentSlideIndex(
      (prevSlideIndex) => (prevSlideIndex + 1) % totalSlides
    );
  }, [totalSlides]);

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex === 0 ? totalSlides - 1 : prevSlideIndex - 1
    );
  };

  const getNextSlidesIndexes = () => {
    let indexes = [];
    for (let i = 0; i < (window.innerWidth > 768 ? 3 : 2); i++) {
      let index = (currentSlideIndex + i) % totalSlides;
      indexes.push(index);
    }
    return indexes;
  };

  const nextSlidesIndexes = getNextSlidesIndexes();

  React.useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlideIndex, goToNextSlide]);

  return (
    <SlideshowContainer>
      {nextSlidesIndexes.map((index) => (
        <Slide
          key={index}
          src={images[index].src}
          alt={images[index].alt}
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
`;

const Slide = styled.img`
  width: ${(props) =>
    window.innerWidth > 768 ? "calc(100% / 3)" : "calc(100% / 2)"};
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    width: calc(100% / 2);
  }
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
