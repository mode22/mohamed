import type { Metadata, Viewport } from "next";
import { Tajawal, Aref_Ruqaa, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic-heading",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-english",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2a2420",
};

export const metadata: Metadata = {
  title: "حفل زفاف محمد & علا",
  description: "يسعدنا دعوتكم لحضور حفل زفافنا - محمد و علا - الجمعة 07 أغسطس 2026",
  keywords: ["wedding", "invitation", "زفاف", "دعوة", "محمد", "علا"],
  openGraph: {
    title: "حفل زفاف محمد & علا",
    description: "يسعدنا دعوتكم لحضور حفل زفافنا",
    type: "website",
    locale: "ar_SA",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${arefRuqaa.variable} ${cormorant.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen font-[family-name:var(--font-arabic)]">
        {children}
      </body>
    </html>
  );
}
