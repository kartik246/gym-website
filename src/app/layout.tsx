import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppDownloadPopup } from "@/components/ui/app-download-popup";

export const metadata: Metadata = {
  title: "Team Iron Fit Gym | Rajouri Garden, New Delhi",
  description: "Experience the ultimate fitness transformation at Team Iron Fit Gym, Shivaji Enclave, Rajouri Garden, New Delhi. Owned and led by Master Coach Sumit Khatri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-black text-white">
        <Navbar />
        {children}
        <Footer />
        <AppDownloadPopup />
      </body>
    </html>
  );
}
