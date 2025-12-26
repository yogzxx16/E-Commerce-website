<div className="fade-in">
  ...
</div>
import { useCart } from "../context/CartContext";

function ProductDetail({ product, onBack }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto p-6 pt-12 grid md:grid-cols-2 gap-10">
      
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 object-contain"
        />
      </div>

      {/* Info */}
      <div>
        <button
          onClick={onBack}
          className="text-sm text-gray-500 mb-4"
        >
          ← Back to products
        </button>

        <h1 className="text-2xl font-bold mb-2">
          {product.title}
        </h1>

        <p className="text-xl font-semibold text-blue-600 mb-4">
          ${product.price}
        </p>

        <p className="text-gray-700 mb-6">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetail;
