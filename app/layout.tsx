import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://treetopsylhet.com"),
  title: "TreeTop Sylhet | Adventure Farm 20 Min from Osmani Airport",
  description: "Zipline, kayak, archery, horse riding and overnight cottages at Sylhet's wildest day out. Open daily. 20 minutes from Osmani Airport.",
  alternates: {
    canonical: "https://treetopsylhet.com",
  },
  openGraph: {
    type: "website",
    siteName: "TreeTop Sylhet",
    locale: "en_BD",
    title: "TreeTop Sylhet | Adventure Farm 20 Min from Osmani Airport",
    description: "Zipline, kayak, archery, horse riding and overnight cottages at Sylhet's wildest day out. Open daily. 20 minutes from Osmani Airport.",
    url: "https://treetopsylhet.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TreeTop Sylhet | Adventure Farm 20 Min from Osmani Airport",
    description: "Zipline, kayak, archery, horse riding and overnight cottages at Sylhet's wildest day out. Open daily. 20 minutes from Osmani Airport.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-inter text-charcoal bg-offWhite antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
