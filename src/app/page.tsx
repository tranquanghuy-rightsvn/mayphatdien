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
import Image from "next/image";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        <div className="mx-auto max-w-[1000px] px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[268px_1fr]">
            <aside className="hidden lg:block">
              <CategorySidebar />
            </aside>

            <div className="space-y-8">
              <section>
                <SectionHeading>Sản phẩm mới</SectionHeading>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Vioss</SectionHeading>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Innova</SectionHeading>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/images/quang-cao-toyota-da-nang-8193.jpg"
              alt=""
              width={1000}
              height={175}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#e6e6e6] pt-8 md:grid-cols-3">
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
