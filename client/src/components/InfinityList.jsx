import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Grid from "./Grid";
import ProductCard from "./ProductCard";

function InfinityList({ data }) {
  const preLoad = 6; // items each load

  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  const [index, setIndex] = useState(0);

  const listRef = useRef(null);

  useEffect(() => {
    console.log(data);
    setProduct(data.slice(0, preLoad));
    setIndex(1);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight >=
        listRef.current.clientHeight + listRef.current.offsetTop + 200
      ) {
        console.log("cddvd");
        setLoad(true);
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(data.length / preLoad);
      const maxIndex = data.lenght % preLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = preLoad * index;
        const end = start + preLoad;
        setProduct(product.concat(data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, product, data]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {product.map((product, i) => (
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
  );
}

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
