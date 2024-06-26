import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundRenderer from "./background-renderer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allen Snow",
  description: "Allen Snow's personal home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackgroundRenderer />
      </body>
    </html>
  );
}
