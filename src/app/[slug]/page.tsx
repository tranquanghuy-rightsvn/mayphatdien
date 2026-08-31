import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySidebar } from "@/components/CategorySidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { newsArticles, policyPages } from "@/lib/data";

export function generateStaticParams() {
  return [
    ...newsArticles.map((a) => ({ slug: a.slug })),
    ...policyPages.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  const policy = policyPages.find((p) => p.slug === slug);
  return { title: `${article?.title ?? policy?.title ?? "Trang"} – Toyota 01` };
}

export default async function FlatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  const policy = policyPages.find((p) => p.slug === slug);

  if (!article && !policy) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1000px] px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              { label: article?.title ?? policy?.title ?? "" },
            ]}
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <aside>
              <CategorySidebar />
            </aside>
            {article ? (
              <article>
                <h1 className="mb-2 text-2xl font-bold text-foreground">
                  {article.title}
                </h1>
                <p className="mb-4 text-xs text-muted-foreground">
                  Đăng ngày {article.date} bởi {article.author}
                </p>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={500}
                  className="mb-6 w-full rounded-md object-cover"
                />
                <div className="space-y-4 text-sm leading-relaxed text-foreground">
                  {article.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ) : (
              <article>
                <h1 className="mb-4 text-2xl font-bold uppercase text-foreground">
                  {policy?.title}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Nội dung đang được cập nhật.
                </p>
              </article>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
