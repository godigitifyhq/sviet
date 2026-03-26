import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { MainNavbar, SiteFooter, TopUtilityBar } from "@/components/shared/site-chrome";

import "./globals.css";

const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const sansFont = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SVIET",
  description: "SVIET admissions, placements, programs, events and campus life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <TopUtilityBar />
        <MainNavbar />
        <main className="bg-white">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
