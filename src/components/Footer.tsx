import Link from "next/link";
import { footerLinks, siteInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#f4f4f4] pt-10 pb-6 text-sm text-foreground">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 sm:grid-cols-3">
        <div>
          <h3 className="mb-3 text-base font-bold text-[#446084]">
            {siteInfo.companyName}
          </h3>
          <p className="mb-1">Trụ sở : {siteInfo.address}</p>
          <p className="mb-1">Email: {siteInfo.email}</p>
          <p className="mb-1">
            Hotline:{" "}
            <span className="font-bold text-primary">{siteInfo.hotline}</span>
          </p>
          <p>Website: {siteInfo.website}</p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-[#446084]">
            CHÍNH SÁCH
          </h3>
          <ul className="space-y-1.5">
            {footerLinks.policies.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="hover:text-primary hover:underline"
                >
                  » {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-[#446084]">HỖ TRỢ</h3>
          <ul className="space-y-1.5">
            {footerLinks.support.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="hover:text-primary hover:underline"
                >
                  » {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] border-t border-border px-4 pt-4 text-xs text-muted-foreground">
        © Bản quyền thuộc về {siteInfo.name} Thiết kế bởi{" "}
        <a
          href="https://webmatrix.vn/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#446084]"
        >
          WEBMATRIX.VN
        </a>
      </div>
    </footer>
  );
}
