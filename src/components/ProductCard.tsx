import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/toyota";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="text-center">
      <Link
        href={`/san-pham/${product.slug}`}
        className="block overflow-hidden border border-[#ebebeb] bg-white"
      >
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={300}
          height={220}
          className="mx-auto h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
      </Link>
      <Link
        href={`/san-pham/${product.slug}`}
        className="mt-2.5 block text-[13px] font-bold uppercase leading-tight text-[#446084] hover:text-primary"
      >
        {product.name}
      </Link>
      <p className="mt-1 text-[13px] font-bold text-primary">{product.price}</p>
    </div>
  );
}
