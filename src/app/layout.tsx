import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"], // Regular, Medium, Semibold, Bold
});

const siteUrl = getSiteUrl();

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Group Hedge",
  url: siteUrl.toString(),
  logo: `${siteUrl.toString().replace(/\/$/, "")}/images/hedgegroup-logo.png`,
  description:
    "Group Hedge delivers research, engineering, and supply solutions across oil & gas, mining, healthcare, and infrastructure sectors.",
  telephone: "+233244232566",
  sameAs: [
    "https://linkedin.com/company/abhedge",
    "https://twitter.com/abhedge",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Group Hedge",
  url: siteUrl.toString(),
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl.toString().replace(/\/$/, "")}/insights?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1628",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Group Hedge",
  title: {
    default: "AB Hedge | Research • Engineering • Supply Solutions",
    template: "%s | Group Hedge",
  },
  description:
    "Group Hedge provides research, engineering, and supply solutions across Oil & Gas, Mining, Healthcare, and Infrastructure sectors in Ghana and beyond.",
  keywords: [
    "Group Hedge",
    "Ghana engineering services",
    "industrial equipment supply",
    "oil and gas solutions",
    "mining technical services",
    "healthcare equipment procurement",
    "infrastructure supply chain",
    "Sapalon Ghana",
    "Country Wide procurement",
  ],
  authors: [{ name: "Group Hedge" }],
  creator: "Group Hedge",
  publisher: "Group Hedge",
  category: "Engineering and Industrial Services",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName: "Group Hedge",
    title: "Group Hedge | Research • Engineering • Supply Solutions",
    description:
      "Integrated research, engineering, and procurement capabilities serving critical industries across Ghana and beyond.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Group Hedge - Research, Engineering, Supply Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Hedge | Research • Engineering • Supply Solutions",
    description:
      "Integrated research, engineering, and procurement capabilities serving critical industries.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          outfit.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Premium dark mode default as desired
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
