import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const Component = () => {
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

  return (
    <Wrap>
      <SeparateViewer>
        {images.map((image, index) => (
          <Item key={index}>
            <ImageParent>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </ImageParent>
          </Item>
        ))}
      </SeparateViewer>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-top: 100px;
  line-height: 2;
  letter-spacing: 0.1em;
  padding: 32px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const SeparateViewer = styled.div`
  column-count: 3;
  height: auto !important;
  break-inside: avoid;
`;

const Item = styled.div`
  width: 100%;
  height: auto !important;
  break-inside: avoid;
`;

const ImageParent = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
