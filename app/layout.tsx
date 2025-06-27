import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WanderAlert – Real-Time Travel Advisory Checker",
  description:
    "Check travel safety advisories by country in seconds. Built for travelers who prioritize safety, awareness, and smart planning.",
  keywords: [
    "travel advisory",
    "travel alerts",
    "country safety levels",
    "safe travel",
    "smart traveler",
    "WanderAlert",
    "travel warnings",
    "trip planning",
  ],
  authors: [{ name: "Adrien Figard" }],
  creator: "Adrien Figard",
  openGraph: {
    title: "WanderAlert – Real-Time Travel Advisory Checker",
    description:
      "WanderAlert helps travelers stay informed with up-to-date global safety advisories. Know before you go.",
    url: "https://wanderalert.vercel.app/",
    siteName: "WanderAlert",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-gray-900 flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
