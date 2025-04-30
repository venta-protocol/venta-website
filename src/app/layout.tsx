import "../styles/globals.css";
// import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-roboto",
// });

export const metadata: Metadata = {
  title: "Venta – Empowered Sales",
  description:
    "Venta is a Solana-based POS and payments system designed to improve your margins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-[#0f172a] via-[#1a1a33] to-[#1b1034] text-white">
        {children}
      </body>
    </html>
  );
}
