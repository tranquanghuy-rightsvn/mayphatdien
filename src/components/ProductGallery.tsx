"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/types/toyota";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  name,
}: {
  images: ProductImage[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[600/450] w-full overflow-hidden rounded-md bg-[#f7f7f7]">
        {current && (
          <Image
            src={current.src}
            alt={current.alt || name}
            fill
            className="object-contain"
            priority
          />
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={cn(
                "relative size-16 overflow-hidden rounded border-2",
                i === active ? "border-primary" : "border-transparent"
              )}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
