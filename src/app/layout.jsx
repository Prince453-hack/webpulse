import Footer from "../components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebPulse",
  description: "Search Engine App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen ">
        {children}
        <Footer />
      </body>
    </html>
  );
}
