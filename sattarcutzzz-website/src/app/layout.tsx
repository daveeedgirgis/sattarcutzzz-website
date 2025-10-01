import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
