import Helmet from "../components/Helmet";
import { Section, SectionTitle, SectionBody } from "../components/Section";
import productData from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

function Product(props) {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProduct = productData.getProducts(8);

  useEffect(() => window.scrollTo(0, 0), [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>{product.title}</SectionBody>
      </Section>
      <Section>
        <SectionTitle>Kham pha theme</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProduct.map((product, i) => (
              <ProductCard
                key={i}
                img01={product.image01}
                img02={product.image02}
                name={product.title}
                price={Number(product.price)}
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
