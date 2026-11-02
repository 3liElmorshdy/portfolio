import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Elmorshedy | Full-Stack Developer",
  description:
    "Full-stack developer building end-to-end web applications with React, Next.js, Node.js, and MongoDB. ITI graduate specializing in secure authentication, REST APIs, and modern frontend development.",
  keywords: [
    "Ali Elmorshedy",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Ali Elmorshedy" }],
  creator: "Ali Elmorshedy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alielmorshedy.dev",
    title: "Ali Elmorshedy | Full-Stack Developer",
    description:
      "Full-stack developer building end-to-end web applications with React, Next.js, Node.js, and MongoDB.",
    siteName: "Ali Elmorshedy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Elmorshedy | Full-Stack Developer",
    description:
      "Full-stack developer building end-to-end web applications with React, Next.js, Node.js, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
