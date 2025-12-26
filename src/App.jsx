import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <Navbar onNavigate={setPage} />

      {page === "home" && (
        <Home onSelectProduct={(product) => {
          setSelectedProduct(product);
          setPage("details");
        }} />
      )}

      {page === "details" && (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setPage("home")}
        />
      )}

      {page === "cart" && <Cart />}
      {page === "checkout" && <Checkout />}

      <Footer />
    </div>
  );
}

export default App;
