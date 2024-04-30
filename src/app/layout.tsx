import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.scss";
import SmoothScrolling from "@/components/smoothscroll";

export const metadata: Metadata = {
  title: "Glozio",
  description: "Create your next portfolio",
};

export default async function RootLayout(
  {
    children
  }: {
    children: React.ReactNode;
  }
) {

  return (

    <html lang="en">
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
