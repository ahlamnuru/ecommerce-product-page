import type { ProductImage } from "../types";

type ThumbnailListProps = {
  images: ProductImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
};

function ThumbnailList({ images, activeIndex, onSelect, className = "" }: ThumbnailListProps) {
  return (
    <ul className={`grid grid-cols-4 gap-4 ${className}`}>
      {images.map((image, index) => {
        const active = index === activeIndex;

        return (
          <li key={image.thumbnail}>
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={active}
              className={`relative block w-full overflow-hidden rounded-lg border-2 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                active ? "border-orange-500" : "border-transparent"
              }`}
            >
              <img src={image.thumbnail} alt="" className="w-full" />
              {active && <span className="absolute inset-0 bg-white/70"></span>}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ThumbnailList;
