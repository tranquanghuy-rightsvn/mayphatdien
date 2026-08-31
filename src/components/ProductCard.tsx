import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/toyota";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="text-center">
      <Link
        href={`/san-pham/${product.slug}`}
        className="block overflow-hidden rounded-md bg-[#f7f7f7]"
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={247}
          height={296}
          className="mx-auto h-auto w-full object-cover transition-transform hover:scale-105"
        />
      </Link>
      <Link
        href={`/san-pham/${product.slug}`}
        className="mt-3 block text-sm font-medium text-[#446084] hover:text-primary hover:underline"
      >
        {product.name}
      </Link>
      <p className="mt-1 text-sm font-bold text-primary">{product.price}</p>
    </div>
  );
}
