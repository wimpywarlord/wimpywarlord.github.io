import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kshitij Dhyani - Tjay",
  description: "Building Gradbro to 1M MRR. Former Rivian, YC, Illumio. I write about React development, macOS productivity, and building with AI.",
  keywords: ["Kshitij Dhyani", "Tjay", "Software Engineer", "Gradbro", "YC", "React Developer", "Full Stack Developer"],
  authors: [{ name: "Kshitij Dhyani" }],
  creator: "Kshitij Dhyani",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kshitijdhyani.com",
    siteName: "Kshitij Dhyani",
    title: "Kshitij Dhyani - Tjay",
    description: "Building Gradbro to 1M MRR. Former Rivian, YC, Illumio. I write about React development, macOS productivity, and building with AI.",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kshitij Dhyani",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@type_kshitij",
    creator: "@type_kshitij",
    title: "Kshitij Dhyani - Tjay",
    description: "Building Gradbro to 1M MRR. Former Rivian, YC, Illumio. I write about React development, macOS productivity, and building with AI.",
    images: ["/assets/logo.jpg"],
  },

  // Icons and manifest
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/assets/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/assets/site.webmanifest",

  // Additional metadata
  metadataBase: new URL("https://kshitijdhyani.com"),
  alternates: {
    canonical: "/",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
