import type { Metadata } from "next";
import { livvic, helveticaNeue, copperplate } from "@/fonts/fonts";
import { MainNavigation } from "./(components)";
import "./globals.css";
import clsx from "clsx";
import Footer from "./(components)/footer";

export const metadata: Metadata = {
  title: "TH Furniture",
  description: "Furniture for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="32x32" />
      </head>
      <body className={clsx([
        livvic.variable,
        helveticaNeue.variable,
        copperplate.variable,
      ])}>
        <div className="layout">
          <MainNavigation />
          <div className="h-3 bg-gray-300/90" />
          <main className="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
