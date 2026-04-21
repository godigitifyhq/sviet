import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

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
  metadataBase: new URL("https://sviet.ac.in"),
  title: {
    default: "SVIET | Swami Vivekanand Institute of Engineering & Technology",
    template: "%s | SVIET",
  },
  description: "Premier engineering and management college in Punjab, India.",
  keywords: [
    "SVIET",
    "engineering college Punjab",
    "B.Tech admissions",
    "MBA college Punjab",
    "SVIET Banur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
