import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Dorneles - Tech Lead",
  description: "Sou um { Tech Lead } e estou na área há mais de 5 anos, trabalhei em projetos nos quais impactam mais de 2 milhões de clientes. Desenvolvo soluções eficazes e personalizadas para atender suas necessidades.",
  keywords: 'Tech Lead, Experiência, Projetos, Impacto, Clientes, Soluções eficazes, Personalização, Desenvolvimento, Inovação, Liderança, Tecnologia, Resultados, Atendimento às necessidades, Mais de 5 anos, Escalabilidade'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
