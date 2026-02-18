import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://poojankaneriya.in"),
  title: "Poojan Kaneriya",
  description:
    "Portfolio of Poojan Kaneriya - Software Engineer focused on Android, React Native, full-stack systems, and applied AI/ML.",
  openGraph: {
    title: "Poojan Kaneriya",
    description:
      "Android + React Native + AWS engineer exploring practical AI/ML systems.",
    url: "https://poojankaneriya.in",
    siteName: "Poojan Kaneriya Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Poojan Kaneriya",
    description:
      "Android + React Native + AWS engineer exploring practical AI/ML systems."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
