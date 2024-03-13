import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <div>
      <Slide
        slidesToScroll={1}
        slidesToShow={3}
        responsive={responsiveSettings}
        autoplay={true}
        duration={1000}
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
    </div>
  );
};
