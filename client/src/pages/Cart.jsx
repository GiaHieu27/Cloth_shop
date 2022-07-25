import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import productData from "../assets/fake-data/products";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from "../components/Helmet";
import numberWithCommas from "../utils/numberWithCommas";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [cartProducts, setCardProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCardProducts(productData.getCartItemsInfo(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  return (
    <Helmet title="Gio hang">
      <div className="cart">
        <div className="cart_info">
          <div className="cart_info_txt">
            <p>Ban dang co {totalProducts} san pham trong gio hang</p>
            <div className="cart_info_txt_price">
              <span>Thanh tien </span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>

          <div className="cart_info_btn">
            <Button size="block">dat hang</Button>
            <Link to="/catalog">
              <Button size="block">tiep tuc mua hang</Button>
            </Link>
          </div>
        </div>

        <div className="cart_list">
          {cartProducts &&
            cartProducts.length > 0 &&
            cartProducts.map((item) => <CartItem key={item.id} itemm={item} />)}
        </div>
      </div>
    </Helmet>
  );
}

export default Cart;
