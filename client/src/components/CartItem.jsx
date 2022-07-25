import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import numberWithCommas from "../utils/numberWithCommas";
import cartSlice from "../redux/slices/cartSlice";

function CartItem({ itemm }) {
  const dispatch = useDispatch();

  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(0);

  const handleQuantityUpdate = (type) => {
    if (type === "plus") {
      dispatch(
        cartSlice.actions.UPDATEITEM({ ...item, quantity: quantity + 1 })
      );
    } else {
      dispatch(
        cartSlice.actions.UPDATEITEM({
          ...item,
          quantity:
            quantity - 1 === 0
              ? dispatch(cartSlice.actions.REMOVEITEM(item))
              : quantity - 1,
        })
      );
    }
  };

  const handleRemoveItem = () => {
    dispatch(cartSlice.actions.REMOVEITEM(item));
    console.log("remove");
  };

  useEffect(() => {
    setItem(itemm);
    setQuantity(itemm.quantity);
  }, [itemm]);

  return (
    <div className="cart_item">
      <div className="cart_item_image">
        <img src={item?.product?.image01} alt="" />
      </div>

      <div className="cart_item_info">
        <div className="cart_item_info_name">
          <Link to={`/catalog/${item?.slug}`}>
            {`${item?.product?.title} - ${item?.color} - ${item?.size}`}
          </Link>
        </div>
        <div className="cart_item_info_price">
          {numberWithCommas(Number(item?.product?.price))}
        </div>
        <div className="cart_item_info_quantity">
          <div className="product_info_item_quantity">
            <div
              className="product_info_item_quantity_btn"
              onClick={() => handleQuantityUpdate("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product_info_item_quantity_input">{quantity}</div>
            <div
              className="product_info_item_quantity_btn"
              onClick={() => handleQuantityUpdate("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart_item_info_del" onClick={() => handleRemoveItem()}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
