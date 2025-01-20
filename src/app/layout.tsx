// src/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavTop } from "@/components/nav-top";
import NavBottom from "@/components/nav-bottom";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jacobhuber.me'),
  title: 'Jacob Huber',
  description: 'Jacob Huber\'s personal website',
  openGraph: {
    title: 'Jacob Huber',
    description: 'Welcome to Jacob Huber\'s personal website',
    images: '/default-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Huber',
    description: 'Jacob Huber\'s personal website',
    images: '/default-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavTop />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <NavBottom />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </ClerkProvider>
    </html>
  );
}