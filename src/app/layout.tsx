import type { Metadata } from "next";
import { Sora, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://blindspot-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BlindSpot",
    template: "%s | BlindSpot",
  },
  description:
    "BlindSpot is a free, open-source macOS app that delivers instant AI answers through a floating overlay completely hidden from every screen recorder. Supports OpenAI, Anthropic, Gemini, and local Ollama models.",
  keywords: [
    "AI overlay macOS",
    "screen recorder invisible",
    "AI assistant hidden",
    "BlindSpot app",
    "Ollama macOS",
    "OpenAI macOS overlay",
    "NSWindowSharingNone",
    "invisible AI tool",
  ],
  authors: [{ name: "BlindSpot" }],
  creator: "BlindSpot",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "BlindSpot",
    title: "BlindSpot — AI Answers Invisible to Screen Recorders",
    description:
      "A free macOS app that puts AI answers in a floating overlay no screen recorder can capture. Works with OpenAI, Anthropic, Gemini, and Ollama.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlindSpot — AI overlay for macOS, invisible to screen recorders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlindSpot — AI Answers Invisible to Screen Recorders",
    description:
      "A free macOS app that puts AI answers in a floating overlay no screen recorder can capture. Works with OpenAI, Anthropic, Gemini, and Ollama.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BlindSpot",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS 14+",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "BlindSpot is a free macOS app that delivers AI answers through a floating overlay excluded from screen capture at the compositor level via NSWindowSharingNone. Supports OpenAI, Anthropic, Gemini, and local Ollama models.",
    url: BASE_URL,
    downloadUrl: "https://github.com/Nainounen/blind-spot/releases/latest",
    license: "https://github.com/Nainounen/blind-spot/blob/main/LICENSE",
    featureList: [
      "Invisible to screen recorders via NSWindowSharingNone",
      "Works in every macOS app via the Accessibility API",
      "Supports OpenAI, Anthropic, Gemini, and Ollama",
      "API keys stored locally with mode 600",
      "One-line Homebrew install",
    ],
    sameAs: [
      "https://github.com/Nainounen/blind-spot",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BlindSpot",
    url: BASE_URL,
    description:
      "BlindSpot is a free, open-source macOS app that puts AI answers in a floating overlay no screen recorder can capture.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlindSpot",
    url: BASE_URL,
    sameAs: [
      "https://github.com/Nainounen/blind-spot",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
