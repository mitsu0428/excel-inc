import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  const issmartsphone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Container>
      <TitleH2_BusinessDomain
        issmartsphone={issmartsphone}
        className={Font.Font.CustomGafata.className}
      >
        BUSINESS DOMAIN
      </TitleH2_BusinessDomain>

      <Wrap>
        <TitleH3_Description
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          クリエイティブのチカラで、
          <br />
          この社会に熱狂と感動を。
        </TitleH3_Description>
      </Wrap>

      <TextArea>
        <Description
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          課題を整理し、正しく理解する。
        </Description>
        <Description
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          解決方法を見つける。
        </Description>
        <Description
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          具体的な形、仕組みとしてアウトプットを構築する。
        </Description>
        <Description
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          時流の変化にあわせて変化を続ける。
        </Description>
        <br />
        <Description
          issmartsphone={issmartsphone}
          className={Font.Font.CustomGafata.className}
        >
          ビジネスを推進するすべての流れを私たちがプロデュースします。
        </Description>
      </TextArea>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Wrap = styled.div``;

const TextArea = styled.div`
  margin-top: 36px;
  line-height: 40px;
`;

const TitleH2_BusinessDomain = styled.h2<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "25px" : "70px")};
  text-align: center;
  font-weight: 600;
  color: #fff;
  letter-spacing: 14px;
  margin-top: 138px;
`;

const TitleH3_Description = styled.h3<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "18px" : "40px")};
  text-align: center;
  font-weight: 600;
  margin: 0;
  color: #fff;
  margin-top: 64px;
`;

const Description = styled.p<{ issmartsphone: boolean }>`
  font-size: ${({ issmartsphone }) => (issmartsphone ? "10px" : "20px")};
  text-align: left;
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: #fff;
`;
