import { Light } from "@/types/light";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Light;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="product_card cursor-pointer">
        <Image
          src={product.image}
          width={310}
          height={310}
          className="w-full rounded-md mb-2"
          alt={product.name}
        />
        <span className="font-medium font-inter text-xs text-gray-500 tracking-widest">
          {product.company?.toUpperCase()}
        </span>
        <h3 className="text-base sm:text-lg font-satoshi font-semibold text-gray-900">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
