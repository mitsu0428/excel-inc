import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " 株式会社アルバライズ / ALBARISE Inc.",
  description: "NAVIGATING THE WORLD.",
  metadataBase: new URL("https://www.albarise.jp"),
  openGraph: {
    title: " 株式会社アルバライズ / ALBARISE Inc.",
    description:
      "TikTok LIVE・プロモーション・制作についてのお問い合わせ、ご相談は弊社まで。",
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
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
