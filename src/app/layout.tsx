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
  title: "Armani Floorings - Best Marble & Granite Tiles in Kottakkal",
  description:
    "Armani Floorings in Kottakkal offers premium marble and granite tiles for homes and offices. Elegant flooring solutions with durability and style.",
  keywords:
    "marble tiles Kottakkal, granite tiles Kottakkal, Armani Floorings, floor shop Kottakkal, luxury flooring Kottakkal",
  openGraph: {
    title: "Armani Floorings - Best Marble & Granite Tiles in Kottakkal",
    description:
      "Elegant flooring solutions with premium marble and granite tiles in Kottakkal. Visit Armani Floorings for your dream floors.",
    url: "https://www.armanifloorings.com",
    siteName: "Armani Floorings",
    images: [
      {
        url: "https://www.armanifloorings.com/assets/3d-rendering-modern-luxury-hotel-office-reception-lounge-hall.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armani Floorings - Best Marble & Granite Tiles in Kottakkal",
    description:
      "Elegant flooring solutions with premium marble and granite tiles in Kottakkal. Visit Armani Floorings for your dream floors.",
    images: [
      "https://www.armanifloorings.com/assets/3d-rendering-modern-luxury-hotel-office-reception-lounge-hall.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
