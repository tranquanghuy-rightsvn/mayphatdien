import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Toyota Đà Nẵng - Đại lý Toyota chính hãng",
  description:
    "Toyota Đà Nẵng - Đại lý ủy quyền Toyota. Vios, Camry, Corolla Altis, Fortuner, Hilux, Innova, Land Cruiser, Yaris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
