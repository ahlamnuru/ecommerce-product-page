import { useState } from "react";
import type { ProductImage } from "../types";
import ThumbnailList from "./ThumbnailList";
import Lightbox from "./Lightbox";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

type GalleryProps = {
  images: ProductImage[];
};

function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function showPrevious() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function showNext() {
    setIndex((index + 1) % images.length);
  }

  function openLightbox() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setLightboxOpen(true);
    }
  }

  return (
    <div>
      <div className="relative">
        <button
          type="button"
          onClick={openLightbox}
          aria-label="Open image gallery"
          className="block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:cursor-zoom-in lg:rounded-2xl"
        >
          <img src={images[index].full} alt="Fall Limited Edition Sneakers" className="w-full" />
        </button>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-950 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:hidden"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-950 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:hidden"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      <ThumbnailList
        images={images}
        activeIndex={index}
        onSelect={setIndex}
        className="mt-8 hidden lg:grid"
      />

      {lightboxOpen && (
        <Lightbox images={images} startIndex={index} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}

export default Gallery;
