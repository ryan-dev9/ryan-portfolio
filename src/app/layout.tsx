import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Developer - Portfolio",
  description: "Modern, responsive portfolio website showcasing web development projects and skills. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: "portfolio, web developer, full stack developer, Next.js, React, TypeScript, Tailwind CSS",
  authors: [{ name: "Ryan Developer" }],
  creator: "Ryan Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryan.vercel.app",
    title: "Ryan  - Full Stack Developer Portfolio",
    description: "Modern, responsive portfolio website showcasing web development projects and skills.",
    siteName: "Ryan Developer - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan - Full Stack Developer Portfolio",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
