import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "../../public/styles/normalize.css";
import "@/styles/global.scss";
import {Provider} from "@/app/provider";
import {Container} from "@/util/container";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CR",
  description: "CR Portpofilo",
};

export const container = new Container();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
        <Provider>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
              {children}
            </body>
        </Provider>
    </html>
  );
}