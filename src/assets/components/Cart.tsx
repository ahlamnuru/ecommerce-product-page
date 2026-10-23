import type { Product } from "../types";
import { formatPrice } from "../utils/formatPrice";
import { DeleteIcon } from "./Icons";

type CartProps = {
  product: Product;
  quantity: number;
  onDelete: () => void;
  onCheckout: () => void;
};

function Cart({ product, quantity, onDelete, onCheckout }: CartProps) {
  return (
    <div className="absolute inset-x-2 top-full z-40 mt-2 rounded-xl bg-white shadow-2xl lg:inset-x-auto lg:right-0 lg:mt-6 lg:w-90">
      <h2 className="border-b border-grey-300/50 p-6 font-bold text-blue-950">Cart</h2>

      {quantity === 0 ? (
        <p className="flex h-44 items-center justify-center font-bold text-grey-600">
          Your cart is empty.
        </p>
      ) : (
        <div className="p-6">
          <div className="flex items-center gap-4">
            <img
              src={product.images[0].thumbnail}
              alt=""
              className="h-12 w-12 shrink-0 rounded-md"
            />
            <p className="flex-1 text-grey-600">
              {product.name}
              <br />
              {formatPrice(product.price)} x {quantity}{" "}
              <span className="font-bold text-blue-950">
                {formatPrice(product.price * quantity)}
              </span>
            </p>
            <button
              type="button"
              onClick={onDelete}
              aria-label="Remove item from cart"
              className="text-grey-300 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <DeleteIcon className="h-5 w-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={onCheckout}
            className="mt-6 h-14 w-full rounded-lg bg-orange-500 font-bold text-white hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
