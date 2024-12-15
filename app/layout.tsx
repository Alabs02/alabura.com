import type { Metadata } from "next";
import clsx from "clsx";

// PLUGINS
import { inter, poppins, workSans } from "@/plugins";

// STYLES
import "./globals.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  // metadataBase: new URL(baseUrl),
  // title: {
  //   default: 'Next.js Portfolio Starter',
  //   template: '%s | Next.js Portfolio Starter',
  // },
  // description: 'This is my portfolio.',
  // openGraph: {
  //   title: 'My Portfolio',
  //   description: 'This is my portfolio.',
  //   url: baseUrl,
  //   siteName: 'My Portfolio',
  //   locale: 'en_US',
  //   type: 'website',
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(workSans.variable, inter.variable, poppins.variable)}
    >
      <body className="antialiased min-h-screen w-full">{children}</body>
    </html>
  );
}
