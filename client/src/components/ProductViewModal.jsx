import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductView from "./ProductView";
import Button from "./Button";
import productData from "../assets/fake-data/products";
import productSlice from "../redux/slices/productSlice";

function ProductViewModal() {
  const productSlug = useSelector((state) => state.product.productPopup);
  const dispatch = useDispatch();

  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div className={`product-view_modal ${!product ? "" : "active"}`}>
      <div className="product-view_modal_content">
        {product && <ProductView product={product} />}
        <div className="product-view_modal_content_close">
          <Button
            size="sm"
            onClick={() => dispatch(productSlice.actions.REMOVE())}
          >
            dong
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductViewModal;
