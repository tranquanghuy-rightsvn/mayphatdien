"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "@/components/icons";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative aspect-[1000/445] w-full">
        {heroSlides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            className={cn(
              "object-cover transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      <button
        aria-label="Ảnh trước"
        onClick={() =>
          setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Ảnh kế tiếp"
        onClick={() => setIndex((i) => (i + 1) % heroSlides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((src, i) => (
          <button
            key={src}
            aria-label={`Ảnh ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2.5 rounded-full transition-colors",
              i === index ? "bg-white" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
