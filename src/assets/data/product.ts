import type { Product } from "../types";
import image1 from "../images/image-product-1.jpg";
import image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2.jpg";
import image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3.jpg";
import image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4.jpg";
import image4Thumbnail from "../images/image-product-4-thumbnail.jpg";

export const product: Product = {
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125,
  discount: 50,
  originalPrice: 250,
  images: [
    { full: image1, thumbnail: image1Thumbnail },
    { full: image2, thumbnail: image2Thumbnail },
    { full: image3, thumbnail: image3Thumbnail },
    { full: image4, thumbnail: image4Thumbnail },
  ],
};

export const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
