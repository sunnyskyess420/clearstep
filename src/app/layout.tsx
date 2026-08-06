import type { Metadata } from "next";
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
  title: "ClearStep — Practical DBT Tools for Real-Life Coping",
  description:
    "Free DBT tools that help in the moment and over time. Coping skills menus, skill references, and a structured learning platform — all in one place.",
  keywords: [
    "DBT",
    "dialectical behavior therapy",
    "coping skills",
    "mental health",
    "mindfulness",
    "distress tolerance",
    "emotion regulation",
    "interpersonal effectiveness",
    "ClearStep",
  ],
  authors: [{ name: "ClearStep" }],
  openGraph: {
    title: "ClearStep — Practical DBT Tools for Real-Life Coping",
    description:
      "Free DBT tools that help in the moment and over time.",
    siteName: "ClearStep",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1080,
        height: 1080,
        alt: "ClearStep — Free DBT tools for real-life coping, learning, and support.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStep — Practical DBT Tools for Real-Life Coping",
    description:
      "Free DBT tools that help in the moment and over time.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
