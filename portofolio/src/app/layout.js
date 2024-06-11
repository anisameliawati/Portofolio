import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anisa's Portofolio",
  description: "Portofolio of Anisa Meliawati (Full Stack Web Developer)",
  // icons: {
  //   icon: "/icon.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
