import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";

export const Component = () => {
  const newsJson = [
    {
      title:
        "【ビジネス】LINE公式アカウントについてのあれこれ教えちゃいます-その①-",
      thumbnail:
        "https://assets.st-note.com/production/uploads/images/132546569/rectangle_large_type_2_740b08e0d9668ecf0ac7c51e9c421789.png?width=800",
      showDate: "2024.3.4 16:56",
      link: "https://note.com/excelinc/n/n6869aa4cf971",
    },
    {
      title: "【ビジネス】知らないと損！Instagramのフォロワーの増やし方",
      thumbnail:
        "https://assets.st-note.com/production/uploads/images/132896657/rectangle_large_type_2_69b446afcc79c01adfe24517ac03462e.jpeg?width=800",
      showDate: "2024.3.4 18:55",
      link: "https://note.com/excelinc/n/n6c79b6c242f7",
    },
    {
      title: "成果を出すために欠かせない！Instagram運用の３つの基本",
      thumbnail:
        "https://assets.st-note.com/production/uploads/images/133609039/rectangle_large_type_2_3d8969850897041afb6ceb11282e5adc.png?width=600",
      showDate: "2024.3.12 12:09",
      link: "https://note.com/excelinc/n/na09abc17861c",
    },
  ];

  return (
    <StyledContainer>
      <StyledGridParent
        container
        spacing={8}
      >
        {newsJson.map((news, index) => (
          <StyledGridChild
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <StyledLink
              href={news.link}
              target="_blank"
              passHref
            >
              <CustomCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={news.thumbnail}
                  alt={news.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px" }}
                  >
                    {news.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px" }}
                  >
                    {news.showDate}
                  </Typography>
                </CardContent>
              </CustomCard>
            </StyledLink>
          </StyledGridChild>
        ))}
      </StyledGridParent>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 64px;

  @media (max-width: 480px) {
    margin-top: 36px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledGridParent = styled(Grid)``;

const StyledGridChild = styled(Grid)`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #171717;
  color: #fff;
  box-shadow: none;
`;
