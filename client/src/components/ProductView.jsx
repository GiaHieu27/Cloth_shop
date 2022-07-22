import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function ProductView({ product }) {
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [description, setDescription] = useState(false);

  useEffect(() => setPreviewImg(product.image01), [product.image01]);

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
    </div>
  );
}

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
