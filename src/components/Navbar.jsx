import { useCart } from "../context/CartContext";

function Navbar({ onNavigate }) {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white">
      
      {/* Trust strip */}
      <div className="bg-black text-white text-xs text-center py-1">
        Free Shipping on orders over $50 · 7-Day Easy Returns · Secure Checkout
      </div>

      {/* Main navbar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Brand */}
          <div
            onClick={() => onNavigate("home")}
            className="text-2xl font-extrabold tracking-tight cursor-pointer"
          >
            NOVA<span className="text-blue-600">STORE</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <button className="hover:text-black" onClick={() => onNavigate("home")}>
              Shop
            </button>
            <button className="hover:text-black" onClick={() => onNavigate("cart")}>
              Cart
            </button>
            <button className="hover:text-black" onClick={() => onNavigate("checkout")}>
              Checkout
            </button>
          </div>

          {/* Cart */}
          <div
            onClick={() => onNavigate("cart")}
            className="relative cursor-pointer flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13l-4-8m5 16a1 1 0 11-2 0 1 1 0 012 0zm12 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
