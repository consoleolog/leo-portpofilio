import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "../../public/styles/global.scss";
import {Provider} from "@/app/provider";
import Navbar from "@/components/common/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CR",
  description: "CR Portpofilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Provider>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar></Navbar>
            {children}
          </body>
        </Provider>
    </html>
  );
}