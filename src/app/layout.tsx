import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Dorneles - Desenvolvedor Front-End",
  description:
    "Veja meu trabalho! Sou um desenvolvedor front-end e aqui você encontra meus projetos online. Desfrute de designs modernos e sites interativos!"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
