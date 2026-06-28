import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fraunces, dmSans } from "./fonts";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Fasih Ahmad  — Full-Stack Developer",
  description:
    "Full-stack web and mobile developer specializing in React, Node.js, and Flutter for startups and growing businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <div style={{ paddingTop: "64px" }}>{children}
          <GoogleAnalytics gaId="G-3SHL9CKX0V" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
