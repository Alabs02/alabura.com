// STYLES
import "./globals.scss";
import "lenis/dist/lenis.css";
import "../public/font-icons/icons.css";

import type { Metadata } from "next";
import clsx from "clsx";
import { RealViewport } from "@/real-viewport";
import { ReactLenis } from "@/lib/lenis";
import { Viewport } from "next";

import "@fontsource/inter/300.css";
import "@fontsource/inter/300-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/300-italic.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";

// PLUGINS
import { inter, poppins, bricolageGrotesque } from "@/plugins";
import { ImagePath } from "./constants";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const BASE_URL = "https://alabura.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alabura Usman | AI Solutions for Scalable Growth",
    template: "%s | Alabura Usman"
  },
  description:
    "Explore the portfolio of Alabura Usman, an expert in AI-driven solutions that scale and drive business growth. I specialize in creating AI-powered systems that automate operations, boost revenue, and reduce costs.",
  openGraph: {
    title: "Alabura Usman | AI Solutions for Scalable Growth",
    description:
      "Dive into Alabura Usman’s portfolio, where visionary ideas are turned into powerful AI-driven solutions that scale, drive revenue, and transform businesses.",
    url: BASE_URL,
    siteName: "Alabura Usman's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}${ImagePath.ALABURA_COM}`,
        width: 1200,
        height: 630,
        alt: "Alabura Usman Portfolio - AI Solutions for Scalable Growth"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Alabura Usman | AI Solutions for Scalable Growth",
    description:
      "Discover how Alabura Usman builds AI solutions that scale, automate, and drive business success.",
    images: [
      {
        width: 1200,
        height: 630,
        url: `${BASE_URL}/images/alabura.webp`,
        alt: "Alabura Usman Portfolio - AI Solutions for Scalable Growth"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  keywords: [
    "Alabura Usman",
    "AI Solutions",
    "AI Integration",
    "AI-Driven Systems",
    "Scalable AI Solutions",
    "AI Solutions for Business",
    "Revenue Boosting AI",
    "Cost Reducing AI",
    "Automated AI Operations",
    "Full-Stack Engineer",
    "Frontend Engineer",
    "AI/ML Engineer",
    "AI Consultant",
    "Generative AI Engineer",
    "Bespoke AI Solutions",
    "Business Growth with AI",
    "Strategic Engineering",
    "Machine Learning Operations (MLOps)",
    "AI Integration Specialist",
    "AI System Automation",
    "AI Engineering Consultant",
    "Web Development Portfolio",
    "Frontend Development"
  ],
  authors: [
    {
      name: "Alabura Usman",
      url: BASE_URL
    },
    {
      name: "Alabura Usman | LinkedIn Profile",
      url: "https://www.linkedin.com/in/usmanunfolds/"
    },
    {
      name: "Alabura Usman | Github Profile",
      url: "https://github.com/Alabs02"
    },
    {
      name: "Alabura Usman | Medium Blog",
      url: "https://medium.com/@alabura.usman"
    }
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  interactiveWidget: "resizes-visual",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" }
  ],
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={clsx(
        bricolageGrotesque.variable,
        inter.variable,
        poppins.variable,
        "scroll-smooth overflow-y-auto overflow-x-hidden"
      )}
      suppressHydrationWarning
    >
      <ReactLenis root>
        <body className="antialiased w-full min-h-screen flex flex-col items-center bg-background">
          <RealViewport />

          {children}

          <Analytics />
          <SpeedInsights />
        </body>
      </ReactLenis>
    </html>
  );
}
