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
  title: "SattarCutZZZ - Expert Barber in Burlington, Ontario",
  description: "Top-notch grooming meets expert service. Solo barber and taper specialist in Burlington offering haircuts, beard trims, and line ups. Book online 24/7.",
  keywords: "barber, Burlington Ontario, haircut, beard trim, line up, taper, men's grooming, barbershop",
  openGraph: {
    title: "SattarCutZZZ - Expert Barber in Burlington, Ontario",
    description: "Top-notch grooming meets expert service. Book your appointment today!",
    url: "https://sattarcutzzz.com",
    siteName: "SattarCutZZZ",
    type: "website",
  },
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
