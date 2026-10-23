import { useState } from "react";
import type { Product } from "../types";
import { formatPrice } from "../utils/formatPrice";
import { CartIcon, MinusIcon, PlusIcon } from "./Icons";

type ProductInfoProps = {
  product: Product;
  onAddToCart: (quantity: number) => void;
};

function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    if (quantity === 0) {
      return;
    }

    onAddToCart(quantity);
    setQuantity(0);
  }

  return (
    <div className="px-6 pb-12 pt-6 lg:px-0 lg:py-0">
      <p className="text-xs font-bold uppercase tracking-widest text-orange-500 lg:text-sm">
        {product.company}
      </p>
      <h1 className="mt-4 text-3xl font-bold leading-tight text-blue-950 lg:mt-6 lg:text-5xl lg:leading-tight">
        {product.name}
      </h1>
      <p className="mt-5 leading-relaxed text-grey-600 lg:mt-8 lg:text-base">
        {product.description}
      </p>

      <div className="mt-6 flex items-center justify-between lg:mt-8 lg:flex-col lg:items-start lg:gap-2">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold text-blue-950">{formatPrice(product.price)}</p>
          <p className="rounded-md bg-orange-100 px-2 py-0.5 font-bold text-orange-500">
            {product.discount}%
          </p>
        </div>
        <p className="font-bold text-grey-300 line-through">{formatPrice(product.originalPrice)}</p>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:mt-8 lg:flex-row">
        <div className="flex h-14 items-center justify-between rounded-lg bg-grey-50 px-5 lg:w-40">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
            aria-label="Decrease quantity"
            className="text-orange-500 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            <MinusIcon className="h-3 w-3" />
          </button>
          <span className="font-bold text-blue-950" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
            className="text-orange-500 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            <PlusIcon className="h-3 w-3" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="flex h-14 flex-1 items-center justify-center gap-4 rounded-lg bg-orange-500 font-bold text-white shadow-lg shadow-orange-500/40 hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <CartIcon className="h-5 w-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
