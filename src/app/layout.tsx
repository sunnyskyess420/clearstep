import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearstep-mocha.vercel.app",
  ),
  title: "ClearStep — Five free coping and DBT tools in one calm place",
  description:
    "ClearStep is one home for five free tools: Calm Router, Worry Window, Glimmer Journal, Emotion Mapper and DBT Skills Reference. Each card names the approach it is built on — DBT, CBT, polyvagal theory or self-monitoring.",
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
    title: "ClearStep — Five free coping and DBT tools in one calm place",
    description:
      "Five free tools for coping in the moment and building skills over time — DBT, CBT and polyvagal-based.",
    siteName: "ClearStep",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClearStep — free coping and DBT tools in one place.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStep — Five free coping and DBT tools in one calm place",
    description:
      "Five free tools for coping in the moment and building skills over time.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${hankenGrotesk.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
