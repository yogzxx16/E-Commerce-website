import { useCart } from "../context/CartContext";

function ProductCard({ product, onSelect }) {
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => onSelect(product)}
      className="border rounded-lg p-4 bg-white cursor-pointer
           transition-all duration-300
           hover:-translate-y-1 hover:shadow-xl"

    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-4"
      />

      <h3 className="text-sm font-semibold line-clamp-2">
        {product.title}
      </h3>

      <p className="text-lg font-bold mt-2 text-blue-600">
        ${product.price}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation(); // 🔴 VERY IMPORTANT
          addToCart(product);
        }}
       className="mt-3 w-full bg-black text-white py-2 rounded
           transition-all duration-200
           hover:bg-gray-900
           active:scale-95"
     >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
