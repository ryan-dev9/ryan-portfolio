import type { Metadata, Viewport } from "next";
import { Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Geist } from "next/font/google";
import './global.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Parashar - Portfolio",
  description: "Modern, responsive portfolio website showcasing web development projects and skills. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: "portfolio, web developer, full stack developer, Next.js, React, TypeScript, Tailwind CSS",
  authors: [{ name: "Rudra Parashar" }],
  creator: "Rudra Parashar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryan.vercel.app",
    title: "Rudra  - Full Stack Developer Portfolio",
    description: "Modern, responsive portfolio website showcasing web development projects and skills.",
    siteName: "Rudra Parashar - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra - Full Stack Developer Portfolio",
    description: "Modern, responsive portfolio website showcasing web development projects and skills.",
    creator: "@ryan-dev9",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${orbitron.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
