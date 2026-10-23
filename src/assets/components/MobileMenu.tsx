import { useEffect } from "react";
import { navLinks } from "../data/product";
import { CloseIcon } from "./Icons";

type MobileMenuProps = {
  onClose: () => void;
};

function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 bg-black/75 lg:hidden">
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        onClick={(e) => e.stopPropagation()}
        className="h-full w-2/3 max-w-xs bg-white p-6"
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close menu"
          className="text-grey-600 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <ul className="mt-12 flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={onClose}
                className="text-lg font-bold text-blue-950 hover:text-orange-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
