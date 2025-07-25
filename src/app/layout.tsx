import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditi's Portfolio",
  description: "This is Aditi's portfolio website showcasing her work and skills.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3]`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl" style={{ borderRadius: '32px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }} />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
