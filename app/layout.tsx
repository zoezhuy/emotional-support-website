import type { Metadata } from "next";
import "./globals.css";
import { Disclaimer } from "@/components/disclaimer";

export const metadata: Metadata = {
  title: "Emotional Support Companion",
  description: "A calm and private space for emotional support and reflection."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="app-shell">{children}</div>
        <Disclaimer />
      </body>
    </html>
  );
}
