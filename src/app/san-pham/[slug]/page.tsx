import { notFound } from "next/navigation";
import { StandardPageLayout } from "@/components/StandardPageLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductTabs } from "@/components/ProductTabs";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return { title: `${product?.name ?? "Sản phẩm"} – Toyota 01` };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.categorySlug);
  const relatedProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <StandardPageLayout
      breadcrumb={
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            {
              label: category?.name ?? "Sản phẩm",
              href: `/danh-muc/${product.categorySlug}`,
            },
            { label: product.name },
          ]}
        />
      }
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            {product.name}
          </h1>
          <p className="mb-4 text-2xl font-bold text-primary">
            {product.price}
          </p>
          <dl className="space-y-1.5 text-sm text-foreground">
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Lượt xem:</dt>
              <dd>{product.views}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Màu sắc:</dt>
              <dd>{product.colors.join(", ")}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Năm sản xuất:</dt>
              <dd>{product.year}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Tình trạng:</dt>
              <dd>{product.condition}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Bảo hành:</dt>
              <dd>{product.warranty}</dd>
            </div>
          </dl>
          <button className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground hover:opacity-90">
            Liên hệ tư vấn
          </button>
        </div>
      </div>

      <ProductTabs product={product} />

      {relatedProducts.length > 0 && (
        <section className="mt-10">
          <SectionHeading>Sản phẩm tương tự</SectionHeading>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </StandardPageLayout>
  );
}
