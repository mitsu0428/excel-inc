import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import * as HearderNavigation from "./components/HeaderNavigation";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "株式会社Excel inc. | クリエイティブの力で、この社会に熱狂と感動を。",
  description:
    "SNSを活用したマーケティングソリューションを軸に、各企業様に合ったサービスを幅広く展観しております。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          property="og:image"
          content="<generated>"
        />
        <meta
          property="og:image:type"
          content="<generated>"
        />
        <meta
          property="og:image:width"
          content="<generated>"
        />
        <meta
          property="og:image:height"
          content="<generated>"
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

      <StyledComponentsRegistry>
        <body>
          <HearderNavigation.Component />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
