import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategorySidebar } from "@/components/CategorySidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import {
  FanpageWidget,
  NewsWidget,
  VideoWidget,
} from "@/components/HomeInfoWidgets";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        <div className="mx-auto max-w-[1200px] px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="hidden lg:block">
              <CategorySidebar />
            </aside>

            <div className="space-y-10">
              <section>
                <SectionHeading>Sản phẩm mới</SectionHeading>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Vios</SectionHeading>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Innova</SectionHeading>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 md:grid-cols-3">
            <NewsWidget />
            <VideoWidget />
            <FanpageWidget />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
