import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import TrustSection from "../components/TrustSection";

function Home({ onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {/* HERO */}
      <Hero onShop={() => window.scrollTo({ top: 650, behavior: "smooth" })} />

      {/* PRODUCTS */}
      <section className="p-6 pt-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Products</h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        )}
      </section>

      {/* TRUST */}
      <TrustSection />
    </div>
  );
}

export default Home;
