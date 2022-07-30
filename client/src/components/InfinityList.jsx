import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Grid from "./Grid";
import ProductCard from "./ProductCard";

function InfinityList({ products }) {
  const preLoad = 6; // items each load

  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  const [index, setIndex] = useState(0);

  const listRef = useRef(null);

  useEffect(() => {
    setProduct(products.slice(0, preLoad));
    setIndex(1);
  }, [products]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(products.length / preLoad);
      const maxIndex = products.lenght % preLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = preLoad * index;
        const end = start + preLoad;
        setProduct(product.concat(products.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, product, products]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {product.map((item, i) => (
          <ProductCard
            key={i}
            name={item.name}
            price={Number(item.price)}
            img01={item.image01}
            img02={item.image02}
            slug={item.slug}
          />
        ))}
      </Grid>
    </div>
  );
}

InfinityList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default InfinityList;
