import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
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
      desc: "LINE公式アカウントのメリットやデメリット、注意点などをご説明します!!",
      link: "https://note.com/excelinc/n/n6869aa4cf971",
      hashtags: [
        "#ビジネス",
        "#SNS",
        "#ビジネススキル",
        "#Instagram",
        "#LINE",
        "#SNSマーケティング",
        "#tiktok",
        "#LINEスタンプ",
        "#PR",
        "#SNS活用",
        "#Design",
        "#SNS集客",
        "#アカウント",
        "#LINE公式アカウント",
        "#公式",
        "#ユーザー",
        "#Instagram運用",
        "#LINELIVE",
        "#promotion",
      ],
    },
    {
      title:
        "【ビジネス】LINE公式アカウントについてのあれこれ教えちゃいます-その①-",
      thumbnail:
        "https://assets.st-note.com/production/uploads/images/132546569/rectangle_large_type_2_740b08e0d9668ecf0ac7c51e9c421789.png?width=800",
      showDate: "2024.3.4 16:56",
      desc: "LINE公式アカウントのメリットやデメリット、注意点などをご説明します!!",
      link: "https://note.com/excelinc/n/n6869aa4cf971",
      hashtags: [
        "#ビジネス",
        "#SNS",
        "#ビジネススキル",
        "#Instagram",
        "#LINE",
        "#SNSマーケティング",
        "#tiktok",
        "#LINEスタンプ",
        "#PR",
        "#SNS活用",
        "#Design",
        "#SNS集客",
        "#アカウント",
        "#LINE公式アカウント",
        "#公式",
        "#ユーザー",
        "#Instagram運用",
        "#LINELIVE",
        "#promotion",
      ],
    },
    {
      title:
        "【ビジネス】LINE公式アカウントについてのあれこれ教えちゃいます-その①-",
      thumbnail:
        "https://assets.st-note.com/production/uploads/images/132546569/rectangle_large_type_2_740b08e0d9668ecf0ac7c51e9c421789.png?width=800",
      showDate: "2024.3.4 16:56",
      desc: "LINE公式アカウントのメリットやデメリット、注意点などをご説明します!!",
      link: "https://note.com/excelinc/n/n6869aa4cf971",
      hashtags: [
        "#ビジネス",
        "#SNS",
        "#ビジネススキル",
        "#Instagram",
        "#LINE",
        "#SNSマーケティング",
        "#tiktok",
        "#LINEスタンプ",
        "#PR",
        "#SNS活用",
        "#Design",
        "#SNS集客",
        "#アカウント",
        "#LINE公式アカウント",
        "#公式",
        "#ユーザー",
        "#Instagram運用",
        "#LINELIVE",
        "#promotion",
      ],
    },
  ];

  return (
    <Container sx={{ padding: "20px" }}>
      <Grid
        container
        spacing={2}
      >
        {newsJson.map((news, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Card sx={{ height: "500px" }}>
              <CardMedia
                component="img"
                height="140"
                image={news.thumbnail}
                alt={news.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {news.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {news.showDate}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {news.desc}
                </Typography>
                <Button
                  size="small"
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  READ MORE
                </Button>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {news.hashtags.join(" ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
