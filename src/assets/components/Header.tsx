import { useEffect, useRef, useState } from "react";
import type { Product } from "../types";
import { navLinks } from "../data/product";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import { CartIcon, MenuIcon } from "./Icons";
import avatar from "../images/image-avatar.png";

type HeaderProps = {
  product: Product;
  cartQuantity: number;
  onDeleteItem: () => void;
  onCheckout: () => void;
};

function Header({ product, cartQuantity, onDeleteItem, onCheckout }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setCartOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleCheckout() {
    onCheckout();
    setCartOpen(false);
  }

  return (
    <header className="relative z-30 mx-auto max-w-6xl lg:border-b lg:border-grey-300/50">
      <div className="flex items-center justify-between px-6 py-5 lg:h-28 lg:px-0 lg:py-0">
        <div className="flex items-center gap-4 lg:gap-14">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-grey-600 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>

          <a href="#" className="text-2xl font-bold tracking-tight text-blue-950 lg:text-3xl">
            sneakers
          </a>

          <nav className="hidden h-28 lg:block" aria-label="Main">
            <ul className="flex h-full gap-8">
              {navLinks.map((link) => (
                <li key={link} className="flex h-full">
                  <a
                    href="#"
                    className="flex items-center border-b-4 border-transparent text-grey-600 hover:border-orange-500 hover:text-blue-950"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-5 lg:gap-11">
          <div ref={cartRef} className="lg:relative">
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              aria-label={`Cart, ${cartQuantity} items`}
              aria-expanded={cartOpen}
              className="relative block text-grey-600 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
              <CartIcon className="h-6 w-6" />
              {cartQuantity > 0 && (
                <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 text-xs font-bold text-white">
                  {cartQuantity}
                </span>
              )}
            </button>

            {cartOpen && (
              <Cart
                product={product}
                quantity={cartQuantity}
                onDelete={onDeleteItem}
                onCheckout={handleCheckout}
              />
            )}
          </div>

          <img
            src={avatar}
            alt="Your profile"
            className="h-6 w-6 rounded-full border-2 border-transparent hover:border-orange-500 lg:h-12 lg:w-12"
          />
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Header;
