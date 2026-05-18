import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script"; // new added

export const metadata: Metadata = {
  title: "Garnet Big Data - Data Strategy & Analytics",
  description: "Building tomorrow's Data-Driven organization today, by empowering businesses to unlock revenue through data transformation. Custom dashboards, analytics, and data strategy.",
  verification: {
    google: '2iCu6TQieaU--3as5AsNBJhviHrlIv2OZrqUc0qoKxE',
  },
  keywords: [
    "data analytics Nigeria",
    "data analytics Africa",
    "fashion brand dashboards",
    "SME data strategy",
    "business intelligence Nigeria",
    "business intelligence Africa",
    "data transformation",
    "inventory analytics",
    "sales tracking dashboard"
  ],
  authors: [{ name: "Garnet Big Data" }],
  openGraph: {
    title: "Garnet Big Data - Data Strategy & Analytics",
    description: "Custom data services for buinesses, SMEs, and startups",
    url: "https://www.garnetbigdata.com",
    siteName: "Garnet Big Data",
    images: [
      {
        url: "https://www.garnetbigdata.com/GARNET5.png", // Create this!
        width: 1200,
        height: 630,
        alt: "Garnet Big Data"
      }
    ]
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define Organization schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Garnet BigData',
    'alternateName': 'Garnet Big Data',
    'url': 'https://www.garnetbigdata.com',
    'logo': 'https://www.garnetbigdata.com/GARNET5.png',
    'email': 'hello@garnetbigdata.com',
    'sameAs': [
      'https://www.linkedin.com/company/garnet-bigdata',
      'https://www.instagram.com/garnetbigdata',
      'https://twitter.com/garnetbigdata',
      'https://medium.com/@garnetbigdata'
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        
        {/* Google Analytics - No installation required */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-53GEJZXRMD" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-53GEJZXRMD');
          `}
        </Script>
      </head>
      <body className="bg-white overflow-x-hidden flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
