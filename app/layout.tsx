import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "有留直希のポートフォリオサイト",
  description: "宮崎大学大学院工学研究科工学専攻先端情報コース修士1年 有留直希",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
