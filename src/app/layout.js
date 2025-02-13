import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from "next/font/google";

import "./globals.css";

const quicksand = Quicksand({
  variable: "--quicksand",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OT Benchmark",
  description: "Conquor your next OT Benchmark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>{children}</body>
    </html>
  );
}
