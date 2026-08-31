import Image from "next/image";
import { StandardPageLayout } from "@/components/StandardPageLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { aboutContent } from "@/lib/data";

export const metadata = { title: "Giới thiệu – Toyota 01" };

export default function AboutPage() {
  return (
    <StandardPageLayout
      breadcrumb={
        <Breadcrumb
          items={[{ label: "Trang chủ", href: "/" }, { label: "Giới thiệu" }]}
        />
      }
    >
      <article>
        <h1 className="mb-1 text-2xl font-bold uppercase text-foreground">
          {aboutContent.title}
        </h1>
        <p className="mb-6 text-sm font-semibold text-primary">
          {aboutContent.subtitle}
        </p>
        <div className="relative mb-6 aspect-[3872/1673] w-full overflow-hidden rounded-md">
          <Image
            src={aboutContent.image}
            alt={aboutContent.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </StandardPageLayout>
  );
}
