import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import * as HearderNavigation from "./components/HeaderNavigation";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "EXCEL Inc.",
  description: "（株）EXCEL Inc.オフィシャルサイト",
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
