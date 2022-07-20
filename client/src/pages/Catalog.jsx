import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import productData from "../assets/fake-data/products";

function Catalog() {
  return (
    <Helmet title="San pham">
      <div className="catalog">
        <div className="catalog_filter">
          <div className="catalog_filter_widget">
            <div className="catalog_filter_widget_title">danh muc san pham</div>
            <div className="catalog_filter_widget_content"></div>
          </div>
        </div>
        
        <div className="catalog_content">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((product, i) => (
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
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
