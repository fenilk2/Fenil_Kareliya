import type { Metadata, Viewport } from "next";
import "./globals.css";
import CosmicMotion from "@/components/CosmicMotion";
import ChromaticScroll from "@/components/ChromaticScroll";

export const metadata: Metadata = {
  title: "Fenil Kareliya | Cybersecurity-Focused Developer",
  description:
    "The portfolio of Fenil Kareliya — a cybersecurity-focused developer, creative technologist, and builder exploring code, cosmic simulations, games, and digital safety.",
  applicationName: "Fenil Kareliya Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050611",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CosmicMotion />
        <ChromaticScroll />
        {children}
      </body>
    </html>
  );
}
