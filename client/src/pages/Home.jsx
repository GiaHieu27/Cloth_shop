import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider/index";
import Policy from "../components/Policy";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { Section, SectionTitle, SectionBody } from "../components/Section";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import products from "../assets/fake-data/products";

function Home() {
  return (
    <Helmet title="Trang chu">
      <Slider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOutt={5000}
      />

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, i) => (
              <Policy
                key={i}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>top san pham ban chay</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {products.getProducts(4).map((product, i) => (
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

      <Section>
        <SectionTitle>san pham moi</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {products.getProducts(8).map((product, i) => (
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

      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>pho bien</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {products.getProducts(12).map((product, i) => (
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

export default Home;
