import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
