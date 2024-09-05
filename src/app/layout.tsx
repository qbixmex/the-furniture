import type { Metadata } from "next";
import { livvic, helveticaNeue, copperplate } from "@/fonts/fonts";
import { MainNavigation } from "./(components)";
import "./globals.css";
import clsx from "clsx";
import Footer from "./(components)/footer";
import { ScrollUp } from "./(components)/ui";

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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <ScrollUp />
      </body>
    </html>
  );
}
