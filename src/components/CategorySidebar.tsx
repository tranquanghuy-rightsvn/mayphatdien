import Image from "next/image";
import Link from "next/link";
import { categories, saleContacts } from "@/lib/data";
import { SidebarHeading } from "@/components/SectionHeading";
import { Mail, Phone } from "@/components/icons";

export function CategorySidebar() {
  return (
    <div className="space-y-6">
      <div>
        <SidebarHeading>Danh mục sản phẩm</SidebarHeading>
        <ul className="divide-y divide-border border border-t-0 border-border">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/danh-muc/${cat.slug}`}
                className="block px-4 py-2.5 text-sm uppercase text-foreground hover:bg-muted hover:text-primary"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SidebarHeading>Hỗ trợ bán hàng</SidebarHeading>
        <div className="border border-t-0 border-border p-4">
          <div className="relative mb-4 h-[94px] w-[244px] max-w-full">
            <Image
              src="/images/bg_hotro.png"
              alt="Hotline"
              fill
              className="object-contain"
            />
            <span className="absolute bottom-2 left-[92px] text-sm font-bold text-primary">
              094.999.92.95
            </span>
          </div>

          <div className="space-y-4">
            {saleContacts.map((sale) => (
              <div
                key={sale.name}
                className="border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <a href={sale.zaloUrl} target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                    <Image src="/images/zalo.png" alt="Zalo" width={26} height={25} />
                  </a>
                  <a href={sale.skypeUrl} aria-label="Skype">
                    <Image src="/images/skype.png" alt="Skype" width={26} height={25} />
                  </a>
                  <a href={sale.viberUrl} aria-label="Viber">
                    <Image src="/images/viber.png" alt="Viber" width={22} height={22} />
                  </a>
                  <span className="ml-1 text-sm font-bold text-foreground">
                    {sale.name}
                  </span>
                </div>
                <div className="mb-1 flex items-center gap-2 text-sm text-primary">
                  <Phone className="size-3.5" />
                  <a href={`tel:${sale.phone}`} className="hover:underline">
                    {sale.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-3.5" />
                  <a href={`mailto:${sale.email}`} className="hover:underline">
                    {sale.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SidebarHeading>Quảng cáo</SidebarHeading>
        <div className="border border-t-0 border-border">
          <Image
            src="/images/e5-2168.png"
            alt="Quảng cáo"
            width={280}
            height={318}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
