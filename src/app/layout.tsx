import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Stars from "@/components/Stars";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HWAH Industries — Endless Possibilities",
  description:
    "AI & automation, IoT telemetry, and data systems delivered security-first.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://hwah.net"),
  openGraph: {
    title: "HWAH Industries",
    description:
      "Build once. Automate forever. AI copilots, IoT telemetry, and clean data pipelines.",
    images: ["/brand/hwah-logo-gold.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Stars />
        <div className="relative z-10">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
