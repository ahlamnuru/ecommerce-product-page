export type ProductImage = {
  full: string;
  thumbnail: string;
};

export type Product = {
  company: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  originalPrice: number;
  images: ProductImage[];
};
