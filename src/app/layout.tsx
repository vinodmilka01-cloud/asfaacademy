import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/AOSInit";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACADEMY OF SPORTS AND FINE ARTS | Empowering Every Athlete",
  description: "ASFA focuses on empowering athletes from underprivileged, tribal, rural, and differently-abled communities across India. Building international-level athletes through inclusive training.",
  keywords: ["Sports Academy", "NGO", "Athletics", "Paralympics", "Wheelchair Sports India", "Nenavath Vinod", "Telangana Sports"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistSans.variable} font-sans antialiased`}
      >
        <AOSInit />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
