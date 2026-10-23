import { useEffect, useState } from "react";
import type { ProductImage } from "../types";
import ThumbnailList from "./ThumbnailList";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

type LightboxProps = {
  images: ProductImage[];
  startIndex: number;
  onClose: () => void;
};

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  function showPrevious() {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setIndex((current) => (current + 1) % images.length);
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((current) => (current - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((current) => (current + 1) % images.length);
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product image gallery"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-136">
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close gallery"
          className="mb-5 ml-auto block text-white hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="relative">
          <img src={images[index].full} alt="Product" className="w-full rounded-2xl" />

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="absolute -left-7 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-950 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute -right-7 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-950 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <ThumbnailList
          images={images}
          activeIndex={index}
          onSelect={setIndex}
          className="mx-auto mt-8 w-5/6"
        />
      </div>
    </div>
  );
}

export default Lightbox;
