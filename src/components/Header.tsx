"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories, siteInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone, Search, X } from "@/components/icons";

const navItems = [
  { label: "TRANG CHỦ", href: "/" },
  { label: "GIỚI THIỆU", href: "/gioi-thieu" },
  { label: "SẢN PHẨM", href: "/cua-hang", hasDropdown: true },
  { label: "KHUYẾN MÃI", href: "/category/khuyen-mai" },
  { label: "TIN TỨC", href: "/category/tin-tuc" },
  { label: "LIÊN HỆ", href: "/lien-he" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src={siteInfo.logo}
            alt={siteInfo.name}
            width={312}
            height={74}
            className="h-[52px] w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2">
            <Phone className="size-4 text-foreground" />
            <span className="text-sm text-foreground">
              {siteInfo.hotline.split("–")[0].trim()}
            </span>
          </div>
          <div className="flex items-center rounded border border-border px-3 py-1.5">
            <input
              type="search"
              placeholder="Nhập từ khóa tìm kiếm..."
              className="w-48 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button aria-label="Tìm kiếm" className="text-foreground">
              <Search className="size-4" />
            </button>
          </div>
        </div>

        <button
          className="flex items-center gap-1.5 text-sm font-semibold text-foreground lg:hidden"
          aria-label="Mở menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-6" />
          Menu
        </button>
      </div>

      <nav className="hidden bg-white lg:block">
        <ul className="mx-auto flex max-w-[1200px] items-stretch px-4">
          {navItems.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li
                key={item.href}
                className={cn("group relative", i > 0 && "-ml-2")}
                style={{ zIndex: navItems.length - i }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 whitespace-nowrap bg-[#f2f2f2] px-6 py-3.5 text-sm font-bold uppercase text-[#446084] transition-colors hover:bg-white hover:text-primary",
                    active && "bg-white text-primary shadow-[0_2px_0_0_theme(colors.primary)]"
                  )}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)",
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="size-3.5" />}
                </Link>
                {item.hasDropdown && (
                  <div className="invisible absolute left-0 top-full z-50 w-56 rounded-md border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/danh-muc/${cat.slug}`}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                      >
                        <Image
                          src={cat.icon}
                          alt=""
                          width={28}
                          height={12}
                          className="h-3 w-7 object-contain"
                        />
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            aria-label="Đóng menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[85vw] overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <Image
                src={siteInfo.logo}
                alt={siteInfo.name}
                width={160}
                height={38}
                className="h-8 w-auto"
              />
              <button aria-label="Đóng menu" onClick={() => setMobileOpen(false)}>
                <X className="size-6 text-foreground" />
              </button>
            </div>
            <div className="flex items-center gap-2 border-b border-border p-4">
              <input
                type="search"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="w-full rounded-full border border-border px-3 py-1.5 text-sm outline-none"
              />
              <Search className="size-4 shrink-0 text-muted-foreground" />
            </div>
            <ul>
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block flex-1 px-4 py-3 text-sm font-bold uppercase text-[#446084]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        aria-label="Mở danh mục"
                        className="px-4 py-3"
                        onClick={() => setMobileProductsOpen((v) => !v)}
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            mobileProductsOpen && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && mobileProductsOpen && (
                    <ul className="bg-muted/50 pb-2">
                      {categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/danh-muc/${cat.slug}`}
                            className="block px-8 py-1.5 text-sm text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
