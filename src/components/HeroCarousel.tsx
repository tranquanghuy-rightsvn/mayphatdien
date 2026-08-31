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
    <div className="mx-auto w-full max-w-[1000px] px-4">
      <div className="relative aspect-[1000/445] w-full overflow-hidden">
        {heroSlides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            className={cn(
              "object-cover object-center transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        <button
          aria-label="Ảnh trước"
          onClick={() =>
            setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
          }
          className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 lg:left-6 lg:size-10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          aria-label="Ảnh kế tiếp"
          onClick={() => setIndex((i) => (i + 1) % heroSlides.length)}
          className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 lg:right-6 lg:size-10"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((src, i) => (
            <button
              key={src}
              aria-label={`Ảnh ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "size-3 rounded-full border border-white/80 transition-all",
                i === index
                  ? "bg-white shadow"
                  : "bg-transparent hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
