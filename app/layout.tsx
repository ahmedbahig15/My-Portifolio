import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const font = Inter({weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Ahmed's portifolio",
  description: "Portifolio built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}
        suppressHydrationWarning
      >
      <ResponsiveNav />  
      { children }
      <Footer/>
      <ScrollToTop/>
      </body>
    </html>
  );
}
