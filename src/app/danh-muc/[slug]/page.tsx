import { notFound } from "next/navigation";
import { StandardPageLayout } from "@/components/StandardPageLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  return { title: `${category?.name ?? "Danh mục"} – Toyota 01` };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter(
    (p) => p.categorySlug === category.slug
  );

  return (
    <StandardPageLayout
      breadcrumb={
        <Breadcrumb
          items={[{ label: "Trang chủ", href: "/" }, { label: category.name }]}
        />
      }
    >
      <h1 className="mb-6 text-xl font-bold uppercase text-foreground">
        {category.name}
      </h1>
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {categoryProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Không tìm thấy sản phẩm nào.
        </p>
      )}
    </StandardPageLayout>
  );
}
