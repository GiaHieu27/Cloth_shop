import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";
import productSlice from "../redux/slices/productSlice";
import cartSlice from "../redux/slices/cartSlice";

function ProductView({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // if (!product) product = {};

  const [previewImg, setPreviewImg] = useState(product.image01);
  const [description, setDescription] = useState(false);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor("");
    setSize("");
  }, [product]);

  const handleQuantityChange = (type) => {
    if (type === "plus") setQuantity(quantity + 1);
    else setQuantity(quantity - 1 < 1 ? quantity : quantity - 1);
  };

  const check = () => {
    if (!color) {
      alert("Vui long chon mau sac");
      return;
    } else if (!size) {
      alert("Vui long chon kich thuoc");
      return;
    }
    return true;
  };

  const handleAddToCart = () => {
    if (check()) {
      alert("Da them san pham vao gio hang");
      dispatch(
        cartSlice.actions.ADDITEM({
          price: product.price,
          slug: product.slug,
          color: color,
          size: size,
          quantity,
        })
      );
    }
  };

  const handleGoToCart = () => {
    if (check()) {
      dispatch(productSlice.actions.REMOVE());
      navigate("/cart");
    }
  };

  return (
    <div className="product">
      <div className="product_images">
        <div className="product_images_list">
          <div
            className="product_images_list_item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product_images_list_item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>

        <div className="product_images_main">
          <img src={previewImg} alt="" />
        </div>

        <div className={`product-description ${description ? "expand" : ""}`}>
          <div className="product-description_title">Chi tiet san pham</div>
          <div
            className="product-description_content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description_toggle">
            <Button size="sm" onClick={() => setDescription(!description)}>
              {description ? "Thu gon" : "Xem them"}
            </Button>
          </div>
        </div>
      </div>

      <div className="product_info">
        <h1 className="product_info_title">{product.title}</h1>
        <div className="product_info_item">
          <span className="product_info_title_price">
            {numberWithCommas(product.price)}
          </span>
        </div>

        <div className="product_info_item">
          <div className="product_info_item_title">Mau sac</div>
          <div className="product_info_item_list">
            {product.colors.map((item, i) => (
              <span
                key={i}
                onClick={() => setColor(item)}
                className={`${color === item ? "active" : ""}`}
              >
                <div className={`circle bg-${item}`}></div>
              </span>
            ))}
          </div>
        </div>

        <div className="product_info_item">
          <div className="product_info_item_title">Kich thuoc</div>
          <div className="product_info_item_list">
            {product.size.map((item, i) => (
              <span
                key={i}
                onClick={() => setSize(item)}
                className={`${size === item ? "active" : ""}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="product_info_item">
          <div className="product_info_item_title">So luong</div>
          <div className="product_info_item_quantity">
            <div
              className="product_info_item_quantity_btn"
              onClick={() => handleQuantityChange("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product_info_item_quantity_input">{quantity}</div>
            <div
              className="product_info_item_quantity_btn"
              onClick={() => handleQuantityChange("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="product_info_item">
          <Button onClick={() => handleAddToCart()}>them vao gio hang</Button>
          <Button onClick={() => handleGoToCart()}>mua ngay</Button>
        </div>
      </div>
    </div>
  );
}

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
