import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KTV Working Drone",
  description: "ניקוי חלונות וחזיתות בגובה באמצעות רחפנים",
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
      <body>{children}</body>
    </html>
  );
}
