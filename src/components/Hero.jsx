<div className="fade-in">
  ...
</div>
function Hero({ onShop }) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Everyday Products, <br />
            <span className="text-blue-600">Built for Real Life</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Discover quality essentials trusted by thousands of customers.
            Simple. Reliable. Delivered to your door.
          </p>

          <button
            onClick={onShop}
            className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-900"
          >
            Shop Now
          </button>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
            <span>🚚 Free Shipping</span>
            <span>🔄 7-Day Returns</span>
            <span>🔒 Secure Checkout</span>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Lifestyle products"
            className="rounded-lg shadow"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

