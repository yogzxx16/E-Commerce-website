<div className="fade-in">
  ...
</div>
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  
if (cart.length === 0) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">No items to checkout</h2>
      <p className="text-gray-600 mt-2">
        Add products to your cart before proceeding.
      </p>
    </div>
  );
}


  if (submitted) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Order Placed 🎉</h1>
        <p className="mt-2">Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="Full Name"
          className="w-full border p-2"
        />
        <input
          required
          placeholder="Address"
          className="w-full border p-2"
        />
        <input
          required
          placeholder="Phone Number"
          className="w-full border p-2"
        />
        <button className="w-full bg-green-600 text-white py-2">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
