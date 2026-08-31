import { StandardPageLayout } from "@/components/StandardPageLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata = { title: "Sản phẩm – Toyota 01" };

export default function ShopPage() {
  return (
    <StandardPageLayout
      breadcrumb={
        <Breadcrumb
          items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]}
        />
      }
    >
      <h1 className="mb-6 text-xl font-bold uppercase text-foreground">
        Sản phẩm
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </StandardPageLayout>
  );
}
