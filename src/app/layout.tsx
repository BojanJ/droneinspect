import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "DroneInspectMK - Професионални Дрон Услуги",
  description: "Професионални дрон услуги и обука во Македонија. Европски сертифицирани според регулативи 945/947. DJI Mavic 4 Pro.",
  keywords: ["дрон", "инспекција", "македонија", "обука", "DJI Mavic 4 Pro", "аерофотографија"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="mk" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
