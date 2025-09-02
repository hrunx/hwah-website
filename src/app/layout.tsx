import type { Metadata } from "next";
import { Sora, Oxanium } from "next/font/google";
import "./globals.css";
import Stars from "@/components/Stars";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const bodyFont = Sora({ subsets: ["latin"], display: "swap" });
const display = Oxanium({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "HWAH Industries LLC (KSA): Holding + Systems Studio — Agentic AI, IoT, Automations",
  description:
    "Saudi-born holdco with OpenAI Beta Access and Google Cloud Innovator status. We design, build, and operate agentic AI platforms, internal copilots, IoT telemetry, and Workspace automations.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://www.hwah.net"),
  openGraph: {
    title: "HWAH Industries LLC — Holding + Systems Studio",
    description:
      "Agentic AI platforms, internal copilots, IoT telemetry, and Workspace automations.",
    images: ["/brand/hwah-logo-gold.jpg"],
    url: "https://www.hwah.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.className} ${display.variable} antialiased`}>
        <Stars />
        <div className="relative z-10">
          <Nav />
          {children}
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
