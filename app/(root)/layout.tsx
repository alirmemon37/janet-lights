import Navbar from "@/components/General/Navbar";
import Footer from "@/components/General/Footer";

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
    <>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
