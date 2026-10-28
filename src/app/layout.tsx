import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { CityProvider } from "@/context/CityContext";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { CitySelector } from "@/components/popups/CitySelector";
import { CallbackRequest } from "@/components/popups/CallbackRequest";
import { NeedServicePopup } from "@/components/popups/NeedServicePopup";
import { CookieConsent } from "@/components/popups/CookieConsent";
import { SplashScreen } from "@/components/shared/SplashScreen";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kreeta Nursing Service | Home Healthcare in Delhi NCR",
    template: "%s | Kreeta Nursing Service",
  },
  description:
    "Trusted home healthcare services in Delhi NCR. Qualified nurses, trained caretakers, physiotherapy, medical equipment on rent, and lab tests at home. Available 24x7. Call 8865888772.",
  keywords: [
    "home nursing Delhi NCR",
    "nurse at home Noida",
    "caretaker for elderly",
    "physiotherapy at home Delhi",
    "medical equipment on rent Delhi",
    "home healthcare services",
    "nursing care at home",
  ],
  authors: [{ name: "Kreeta Nursing Service" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kreetanursingservice.com",
    siteName: "Kreeta Nursing Service",
    title: "Kreeta Nursing Service | Trusted Healthcare, At Your Doorstep",
    description:
      "Professional home healthcare services across Delhi NCR. Qualified nurses, caretakers, physiotherapy, equipment, and lab tests — 24x7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Kreeta Nursing Service",
    "url": "https://kreetanursingservice.com",
    "telephone": "8865888772",
    "email": "info@kreetanursingservice.com",
    "description": "Professional home healthcare, nursing care, caretaker, physiotherapy, and medical equipment rental serving Delhi NCR 24x7.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SF-214, 2nd Floor, Gaur City Center, Near DTDC, Sector 4",
      "addressLocality": "Noida Extension, Greater Noida West",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201318",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.57,
      "longitude": 77.44
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Greater Noida" },
      { "@type": "City", "name": "Gurgaon" },
      { "@type": "City", "name": "Faridabad" },
      { "@type": "City", "name": "Ghaziabad" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5FSFCX83');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FSFCX83"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <CityProvider>
          <CartProvider>
            {/* Splash Screen */}
            <SplashScreen />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 pb-16 md:pb-0">{children}</main>

            {/* Footer */}
            <Footer />

            {/* Global UI Elements */}
            <WhatsAppButton />
            <BackToTop />
            <MobileBottomBar />

            {/* Popups */}
            <CitySelector />
            <NeedServicePopup />
            <CallbackRequest />
            <CookieConsent />
          </CartProvider>
        </CityProvider>
      </body>
    </html>
  );
}
