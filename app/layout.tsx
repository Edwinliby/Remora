import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Remora',
    default: 'Remora - Pregnancy Care & Support',
  },
  description: "A comprehensive guide for pregnancy care, support, and resources in Dawson County.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Remora - Pregnancy Care & Support',
    description: "A comprehensive guide for pregnancy care, support, and resources in Dawson County.",
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Remora Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remora - Pregnancy Care & Support',
    description: "A comprehensive guide for pregnancy care, support, and resources in Dawson County.",
    images: ['/logo.png'],
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
        className={`${montserrat.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
