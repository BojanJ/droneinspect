import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DroneInspectMK - Професионални Дрон Услуги",
  description: "Професионални дрон услуги и обука во Македонија. Европски сертифицирани според регулативи 945/947. DJI Mavic 3 Pro.",
  keywords: ["дрон", "инспекција", "македонија", "обука", "DJI Mavic 3 Pro", "аерофотографија"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mk" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
