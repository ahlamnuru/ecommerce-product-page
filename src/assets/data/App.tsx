import { useState } from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import ProductInfo from "../components/ProductInfo";
import { product } from "./product";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="min-h-screen bg-white text-base text-blue-950">
      <Header
        product={product}
        cartQuantity={cartQuantity}
        onDeleteItem={() => setCartQuantity(0)}
        onCheckout={() => setCartQuantity(0)}
      />

      <main className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-32 lg:py-20">
        <Gallery images={product.images} />
        <ProductInfo
          product={product}
          onAddToCart={(quantity) => setCartQuantity(cartQuantity + quantity)}
        />
      </main>
    </div>
  );
}

export default App;
