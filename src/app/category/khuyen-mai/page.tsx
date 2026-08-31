import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySidebar } from "@/components/CategorySidebar";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = { title: "Khuyến mãi – Toyota 01" };

export default function PromotionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4 py-8">
          <Breadcrumb
            items={[{ label: "Trang chủ", href: "/" }, { label: "Khuyến mãi" }]}
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <aside>
              <CategorySidebar />
            </aside>
            <div>
              <h1 className="mb-6 text-xl font-bold uppercase text-foreground">
                Khuyến mãi
              </h1>
              <p className="text-sm text-muted-foreground">
                Hiện chưa có chương trình khuyến mãi nào.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
