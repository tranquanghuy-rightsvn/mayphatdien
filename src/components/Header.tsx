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
    <header
      className="relative z-50"
      style={{
        backgroundImage: "url(/images/bg-header.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={siteInfo.logo}
            alt={siteInfo.name}
            width={312}
            height={74}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden flex-col items-end gap-2 lg:flex">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1.5">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-black">
                <Phone className="size-2.5 text-white" fill="white" />
              </span>
              <span className="text-[13.6px] font-normal text-black">
                {siteInfo.hotline.split("–")[0].trim()}
              </span>
            </div>
            <div className="flex items-center overflow-hidden rounded border border-[#dddddd] bg-white">
              <input
                type="search"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="w-[240px] bg-transparent px-3 py-2 text-[13px] outline-none placeholder:text-[#999]"
              />
              <button
                aria-label="Tìm kiếm"
                className="flex h-9 w-10 items-center justify-center bg-primary text-white hover:bg-[#cc0000]"
              >
                <Search className="size-4" />
              </button>
            </div>
          </div>

          <nav>
            <ul className="flex items-stretch">
              {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 whitespace-nowrap px-5 py-[13px] text-[13px] font-bold uppercase tracking-wide text-[#716f6b] transition-colors hover:text-primary",
                    active && "font-bold text-[rgba(17,17,17,0.85)]"
                  )}
                  style={{
                    backgroundImage: active
                      ? "url(/images/menu-rollover.png)"
                      : "url(/images/menu-arrow.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: active ? "100% 100%" : "100% 0%",
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
                      className="block flex-1 px-4 py-3 text-[13px] font-bold uppercase text-[#666666]"
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
