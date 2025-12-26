function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        
        <div>
          <h4 className="text-white font-semibold mb-3">NovaStore</h4>
          <p>
            Quality products built for everyday life. Trusted by thousands
            of customers worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>Shop</li>
            <li>Cart</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        © 2025 NovaStore. Demo project.
      </div>
    </footer>
  );
}

export default Footer;
