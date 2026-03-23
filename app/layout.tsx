import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";

import { SiteNav } from "@/components/navigation/site-nav";

import "./globals.css";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const sansFont = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SVIET College Platform",
  description:
    "Admissions funnel, events, CMS, and admin dashboard built with Next.js App Router and Server Actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--surface)] text-[var(--ink-900)]">
        <SiteNav />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-10">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-6xl border-t border-[var(--line)] px-6 py-6 text-sm text-[var(--ink-700)]">
          Built for scalable admissions, content, and events operations.
        </footer>
      </body>
    </html>
  );
}
