import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokeNext",
  icon: "/favicon.ico",
  description: "Pokedex de Pokemons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <div className="main-container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
