import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategorySidebar } from "@/components/CategorySidebar";
import type { ReactNode } from "react";

export function StandardPageLayout({
  breadcrumb,
  sidebar = true,
  children,
}: {
  breadcrumb?: ReactNode;
  sidebar?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <div className="mx-auto max-w-[1000px] px-4 py-8">
          {breadcrumb}
          {sidebar ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
              <aside className="hidden lg:block">
                <CategorySidebar />
              </aside>
              <div>{children}</div>
            </div>
          ) : (
            children
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
