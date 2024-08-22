import type { Metadata } from "next";
import { livvic, helveticaNeue, copperplate } from "@/fonts/fonts";
import { MainNavigation } from "./(components)";
import "./globals.css";
import clsx from "clsx";

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
      <body className={clsx([
        livvic.variable,
        helveticaNeue.variable,
        copperplate.variable,
      ])}>
        <div className="layout">
          <MainNavigation />
          <main className="main">
            {children}
          </main>
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} The Furniture</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
