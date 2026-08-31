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
      <div className="aspect-video overflow-hidden rounded">
        <iframe
          src="https://www.youtube.com/embed/M17OKq6_qi8?feature=oembed"
          title="Video clip"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function FanpageWidget() {
  return (
    <div>
      <WidgetHeading>Fanpage</WidgetHeading>
      <div className="aspect-video overflow-hidden rounded">
        <iframe
          src="https://www.facebook.com/v2.9/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&tabs=timeline&width=340&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
          title="Fanpage"
          className="h-full w-full"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allow="encrypted-media"
        />
      </div>
    </div>
  );
}
