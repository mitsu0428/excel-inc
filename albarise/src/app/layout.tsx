import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " ALBARISE Inc.",
  description: "NAVIGATING THE WORLD.",
  metadataBase: new URL("https://www.albarise.jp"),
  openGraph: {
    title: " ALBARISE Inc.",
    description: "世界をマーケティングにより先導する。",
    type: "website",
    url: new URL("https://www.albarise.jp"),
    images: [
      {
        url: new URL("https://www.albarise.jp/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: "ALBARISE Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: new URL("https://www.albarise.jp/twitter-image.png"),
        width: 1200,
        height: 630,
        alt: "ALBARISE Inc.",
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
