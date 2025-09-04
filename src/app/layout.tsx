// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

// Import fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", // make it available in CSS
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "My Project",
  description: "Next.js project with two fonts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${roboto.variable}`}>
      <body className="font-manrope">{children}</body>
    </html>
  );
}
