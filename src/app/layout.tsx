import type { Metadata } from "next";
import { livvic, helveticaNeue, copperplate } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Furniture",
  description: "Furniture for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.variable} ${helveticaNeue.variable} ${copperplate.variable}`}>
        {children}
      </body>
    </html>
  );
}
