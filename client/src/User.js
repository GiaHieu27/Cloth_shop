import { Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home";
import Product from "./pages/user/Product";
import Catalog from "./pages/user/Catalog";
import Cart from "./pages/user/Cart";
import Header from "./components/user/Layout/Header";
import Footer from "./components/user/Layout/Footer";
import Login from "./pages/user/Login";
import LoginAd from "./pages/admin/Login";
import ProductViewModal from "./components/user/ProductViewModal";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <Routes>
            {/* User */}
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />

            {/* Admin */}
            <Route path="/admin/login" element={<LoginAd />} />
          </Routes>
          <ProductViewModal />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
