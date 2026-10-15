import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sukoon — Comfort Reimagined",
  description:
    "Handcrafted bean bags designed for the way you actually live, work, and unwind. Shop the Nest and Drop collections, or create custom branded bean bags for your business.",
  keywords: ["bean bag", "furniture", "comfort", "sukoon", "سكون", "custom", "B2B"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased">
        <LenisProvider>
          <CartProvider>
            <Header />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
          </CartProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
