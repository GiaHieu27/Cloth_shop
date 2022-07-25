import { useState } from "react";
import { useSelector } from "react-redux";

import productData from "../assets/fake-data/products";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProduct, setCardProduct] = useState(
    productData.getCartItemsInfo(cartItems)
  );
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return <div>Cart</div>;
}

export default Cart;
