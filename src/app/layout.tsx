// src/app/layout.tsx
import { Rubik } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "../styles/globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pedro Pièces SARL AU | Pièces de rechange engins BTP",
  description: "Pedro Pièces SARL AU : achat, vente, import et export de pièces de rechange pour engins BTP à Casablanca.",
};
export const description = "Pedro Pièces SARL AU : achat, vente, import et export de pièces de rechange pour engins BTP à Casablanca.";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <body className={rubik.className}>
        {/* <body > */}
        <Navbar />
        <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {children}
        </main>
        <div className="container mx-auto mt-12 px-4 sm:mt-16 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
