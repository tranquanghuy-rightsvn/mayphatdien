import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/data";

function WidgetHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 border-l-4 border-primary pl-3 text-base font-bold uppercase text-foreground">
      {children}
    </h3>
  );
}

export function NewsWidget() {
  return (
    <div>
      <WidgetHeading>Tin tức sự kiện</WidgetHeading>
      <ul className="space-y-4">
        {newsArticles.map((article) => (
          <li key={article.slug} className="flex gap-3">
            <Link href={`/${article.slug}`} className="shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                width={90}
                height={65}
                className="h-[65px] w-[90px] rounded object-cover"
              />
            </Link>
            <div>
              <Link
                href={`/${article.slug}`}
                className="line-clamp-2 text-sm font-semibold text-foreground hover:text-primary"
              >
                {article.title}
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                Hà Nội, ngày 09/07/2018 – {article.excerpt}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VideoWidget() {
  return (
    <div>
      <WidgetHeading>Video clip</WidgetHeading>
      <div className="flex aspect-video items-center justify-center rounded bg-muted/40 text-xs text-muted-foreground">
        Video đang được cập nhật
      </div>
    </div>
  );
}

export function FanpageWidget() {
  return (
    <div>
      <WidgetHeading>Fanpage</WidgetHeading>
      <div className="flex aspect-video items-center justify-center rounded bg-muted/40 text-xs text-muted-foreground">
        Fanpage đang được cập nhật
      </div>
    </div>
  );
}
