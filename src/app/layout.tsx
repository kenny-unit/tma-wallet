import type { Metadata } from "next";

import "./globals.css";

import { inter, lato, poppins } from "@/src/fonts";

export const metadata: Metadata = {
  title: "TON Mini App",
  description: "TON Mini App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} ${inter.variable} font-lato antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
