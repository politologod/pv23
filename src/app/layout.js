import { Geist, Geist_Mono } from "next/font/google";
import "../css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Script from "next/script";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import FloatingCartButton from "@/components/floatingCartButton/FloatingCartButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PURAVIDA23 Tienda Online",
  description: "Venta y distribución de Agua Potable de la más alta calidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <head>
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <FloatingCartButton cartCount={3}/>
        <Footer />

      </body>

    </html>
  );
}
