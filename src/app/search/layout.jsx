import SearchHeader from "@/components/SearchHeader";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebPulse",
  description: "Search Engine App",
};

export default function SearchLayout({ children }) {
  return (
    <div className={inter.className}>
      <SearchHeader />

      {children}
    </div>
  );
}
