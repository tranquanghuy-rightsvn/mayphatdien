import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { ReactNode } from "react";

export function PolicyLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-white to-[#f2f2f2] py-6">
          <div className="mx-auto max-w-[1000px] px-4">
            <h1 className="text-xl text-foreground">{title}</h1>
          </div>
        </div>
        <div className="mx-auto min-h-[120px] max-w-[1000px] px-4 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
