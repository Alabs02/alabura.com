// STYLES
import "./globals.scss";
import "lenis/dist/lenis.css";
import "../public/font-icons/icons.css";

import type { Metadata } from "next";
import clsx from "clsx";
import { RealViewport } from "@/real-viewport";
import { ReactLenis } from "@/lib/lenis";

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

const BASE_URL = "https://alabura.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alabura Usman | Engineering Vision to Reality",
    template: "%s | Alabura Usman",
  },
  description:
    "Explore the portfolio of Alabura Usman, a seasoned Full-Stack Engineer and AI enthusiast. With expertise in building scalable digital solutions and validating AI models, I blend strategic thinking with technical precision to deliver impactful results. Whether crafting robust applications or providing actionable feedback on large language models, I bring creativity, agility, and attention to detail to every project.",
  openGraph: {
    title: "Alabura Usman | Engineering Vision to Reality",
    description:
      "Dive into the world of Alabura Usman’s portfolio, where bold ideas are transformed into impactful digital solutions through grit, agility, and integrity.",
    url: BASE_URL,
    siteName: "Alabura Usman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/alabura.webp`,
        width: 1200,
        height: 630,
        alt: "Alabura Usman Portfolio - Engineering Vision to Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alabura Usman | Engineering Vision to Reality",
    description:
      "Discover how Alabura Usman crafts bespoke digital solutions through creativity and precision.",
    images: [`${BASE_URL}/images/alabura.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Alabura Usman",
    "Digital Solutions",
    "FullStack Engineer",
    "Senior Software Engineer",
    "LLM Validation Specialist",
    "AI Model Feedback Engineer",
    "AI/ML Engineer",
    "Generative AI Engineer",
    "Large Language Model Specialist",
    "Data Annotation Specialist",
    "AI System Tester",
    "Frontend Engineer",
    "Consultant",
    "IT Consultant",
    "Bespoke Software Solutions",
    "Web Development Portfolio",
    "Strategic Engineering",
    "Machine Learning Operations (MLOps)",
    "Prompt Engineering",
    "Usman",
    "Alabura",
    "usmanunfolds",
    "Alabs02",
    "Alabura Usman Aliyu",
    "AI-Assisted Development",
  ],
  authors: [
    {
      name: "Alabura Usman",
      url: BASE_URL,
    },
    {
      name: "Alabura Usman | LinkedIn Profile",
      url: "https://www.linkedin.com/in/usmanunfolds/",
    },
    {
      name: "Alabura Usman | Github Profile",
      url: "https://github.com/Alabs02",
    },
    {
      name: "Alabura Usman | Medium Blog",
      url: "https://medium.com/@alabura.usman",
    },
  ],
  themeColor: "#06b6d4",
};

export default function RootLayout({
  children,
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
        </body>
      </ReactLenis>
    </html>
  );
}
