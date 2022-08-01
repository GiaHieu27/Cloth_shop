import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import Helmet from "../../components/user/Layout/Helmet";
import Grid from "../../components/user/Grid";
import ProductCard from "../../components/user/ProductCard";
import ProductView from "../../components/user/ProductView";
import {
  Section,
  SectionTitle,
  SectionBody,
} from "../../components/user/Section";
import productData from "../../assets/fake-data/products";
import productSlice from "../../redux/slices/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProduct = productData.getProducts(8);

  useEffect(() => window.scrollTo(0, 0), [product]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      dispatch(productSlice.actions.PRODUCT_LIST_REQUEST());
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/allProducts`
      );

      dispatch(productSlice.actions.PRODUCT_LIST_SUCCESS(data));
    } catch (error) {
      dispatch(
        productSlice.actions.PRODUCT_LIST_ERROR(error.response.data.message)
      );
    }
  };

  return (
    <Helmet title={product.name}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Kham pha them</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProduct.map((product, i) => (
              <ProductCard
                key={i}
                name={product.name}
                price={Number(product.price)}
                img01={product.image01}
                img02={product.image02}
                slug={product.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default Product;
