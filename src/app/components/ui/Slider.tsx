"use client";
import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // 初期値はPCの場合のスライド数

  const images = [
    { src: "/slide1.png", alt: "事業領域の画像" },
    { src: "/slide2.png", alt: "事業領域の画像" },
    { src: "/slide3.png", alt: "事業領域の画像" },
    { src: "/slide4.png", alt: "事業領域の画像" },
  ];

  const totalSlides = images.length;

  const updateSlidesToShow = useCallback(() => {
    if (window.innerWidth <= 768) {
      setSlidesToShow(2); // スマホの場合のスライド数
    } else {
      setSlidesToShow(3); // PCの場合のスライド数
    }
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [updateSlidesToShow]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex(
      (prevSlideIndex) => (prevSlideIndex + 1) % totalSlides
    );
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex === 0 ? totalSlides - 1 : prevSlideIndex - 1
    );
  }, [totalSlides]);

  const getNextSlidesIndexes = () => {
    let indexes = [];
    for (let i = 0; i < slidesToShow; i++) {
      let index = (currentSlideIndex + i) % totalSlides;
      indexes.push(index);
    }
    return indexes;
  };

  const nextSlidesIndexes = getNextSlidesIndexes();

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlideIndex, goToNextSlide]);

  return (
    <SlideshowContainer>
      {nextSlidesIndexes.map((index) => (
        <Slide
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          slidesToShow={slidesToShow}
        />
      ))}
      <LeftArrow
        className={Font.Font.CustomDarkerGrotesque.className}
        onClick={goToPrevSlide}
      >
        {/* <FaChevronLeft /> */}← PREV
      </LeftArrow>
      <RightArrow
        className={Font.Font.CustomDarkerGrotesque.className}
        onClick={goToNextSlide}
      >
        NEXT →
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
  margin-top: 48px;
`;

const Slide = styled.img<{ slidesToShow: number }>`
  width: ${(props) => `calc(100% / ${props.slidesToShow})`};
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
  font-size: 20px;
  letter-spacing: 2px;
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
