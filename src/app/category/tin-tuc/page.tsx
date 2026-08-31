import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySidebar } from "@/components/CategorySidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { newsArticles } from "@/lib/data";

export const metadata = { title: "Tin tức – Toyota 01" };

export default function NewsListPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4 py-8">
          <Breadcrumb
            items={[{ label: "Trang chủ", href: "/" }, { label: "Tin tức" }]}
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <aside>
              <CategorySidebar />
            </aside>
            <div>
              <h1 className="mb-6 text-xl font-bold uppercase text-foreground">
                Tin tức
              </h1>
              <div className="space-y-6">
                {newsArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row"
                  >
                    <Link href={`/${article.slug}`} className="shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={220}
                        height={160}
                        className="h-[160px] w-[220px] rounded-md object-cover"
                      />
                    </Link>
                    <div>
                      <Link
                        href={`/${article.slug}`}
                        className="text-lg font-bold text-foreground hover:text-primary"
                      >
                        {article.title}
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Đăng ngày {article.date} bởi {article.author}
                      </p>
                      <p className="mt-2 text-sm text-foreground">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
