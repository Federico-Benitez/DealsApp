import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { DealsProvider } from "@/context/DealsContext";
import TotalPriceBanner from "@/components/totalPrice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deals App",
  description: "Best deals!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DealsProvider>
          <Header />
          {children}
          <TotalPriceBanner />
          <Footer />
        </DealsProvider>
      </body>
    </html>
  );
}
