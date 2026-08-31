"use client";

import { useState } from "react";
import type { Product } from "@/types/toyota";
import { productTabs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-1 border-b border-border">
        {productTabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={cn(
              "border-b-2 px-4 py-2.5 text-sm font-semibold uppercase transition-colors",
              i === active
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-6 text-sm leading-relaxed text-foreground">
        {active === 0 ? (
          <div className="space-y-3">
            <p className="text-base font-semibold">{product.description}</p>
            <p className="font-semibold">606.000.000 VND</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Số chỗ ngồi: {product.seats}</li>
              <li>Kiểu dáng: {product.bodyType}</li>
              <li>Nhiên liệu: {product.fuel}</li>
              <li>Xuất xứ: {product.origin}</li>
              {product.otherInfo.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground">Nội dung đang được cập nhật.</p>
        )}
      </div>
    </div>
  );
}
