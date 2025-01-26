import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Kodchasan } from "next/font/google";
import { Nunito } from "next/font/google";
import { Toaster } from "@/Components/ui/toaster";
import Providers from "./providers";

const kodchasan = Kodchasan({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kodchasan",
});

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Clement Ojiguo",
  description: "A web application to showcase Clement Ojiguo portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${kodchasan.variable} ${nunito.variable}`}>
        <Providers>
          <div className="px-4 py-4 sm:px-6 sm:py-8 md:px-12 lg:px-16 md:py-10 max-w-7xl mx-auto">
            <Navbar />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
