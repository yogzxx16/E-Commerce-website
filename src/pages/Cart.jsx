<div className="fade-in">
  ...
</div>
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6">
        Looks like you haven’t added anything yet.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Start Shopping
      </button>
    </div>
  );
}


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>${item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 border"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 border"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </h2>
    </div>
  );
}

export default Cart;
