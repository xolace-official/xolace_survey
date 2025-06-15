import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xolace Survey",
  description: "A simple survey to help us understand your needs and improve Xolace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolageGrotesque.className}`}>
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
