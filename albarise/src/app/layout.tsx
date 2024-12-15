import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社Excel inc. | クリエイティブの力で、この社会に熱狂と感動を。",
  description:
    "SNSを活用したマーケティングソリューションを軸に、各企業様に合ったサービスを幅広く展観しております。",
  metadataBase: new URL("https://www.excelinc-tokyo.com"),
  openGraph: {
    title:
      "株式会社Excel inc. | クリエイティブの力で、この社会に熱狂と感動を。",
    description:
      "SNSを活用したマーケティングソリューションを軸に、各企業様に合ったサービスを幅広く展観しております。",
    type: "website",
    url: new URL("https://www.excelinc-tokyo.com"),
    images: [
      {
        url: new URL("https://www.excelinc-tokyo.com/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: "Excel inc. | クリエイティブの力で、この社会に熱狂と感動を。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: new URL("https://www.excelinc-tokyo.com/twitter-image.png"),
        width: 1200,
        height: 630,
        alt: "Excel inc. | クリエイティブの力で、この社会に熱狂と感動を。",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="msapplication-TileColor"
          content="#da532c"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
