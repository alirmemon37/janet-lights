import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/General/Navbar";
import Footer from "@/components/General/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Janet Lights",
  description: "Check out our latest products and services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
