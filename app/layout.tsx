import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KTV Israel | ניקוי חלונות בגובה",
  
    openGraph: {
      title: "KTV Israel | ניקוי חלונות מקצועי",
      description: "הפתרון הטכנולוגי המתקדם בישראל לניקוי חלונות בגובה ובתים פרטיים",
      url: "https://ktv-site-iota.vercel.app",
      siteName: "KTV Israel",
      locale: "he_IL",
      type: "website",
    },
    description: "הפתרון הטכנולוגי המתקדם בישראל לניקוי חלונות בגובה ובתים פרטיים",
  verification: {
    google: "fsKjpHA48xBRm_zgTjQ1TYH4ssGZu1Emwpaevmw5qjo"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}  <Analytics />
  <GoogleAnalytics gaId="G-RXL0755MER" />
</body>
    </html>
  );
}
