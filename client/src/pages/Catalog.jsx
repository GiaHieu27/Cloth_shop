import { useCallback, useEffect, useRef, useState } from "react";

import Helmet from "../components/Helmet";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import productColor from "../assets/fake-data/product-color";
import productSize from "../assets/fake-data/product-size";

function Catalog() {
  const initFilters = {
    categories: [],
    colors: [],
    sizes: [],
  };
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilters);

  const filterRef = useRef(null);
  const showFilter = () => {
    filterRef.current.classList.toggle("active");
  };

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            categories: [...filter.categories, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, colors: [...filter.colors, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, sizes: [...filter.sizes, item.size] });
          break;
        default:
          return filter;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.categories.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, categories: newCategory });
          break;
        case "COLOR":
          const newColor = filter.colors.filter((e) => e !== item.color);
          setFilter({ ...filter, colors: newColor });
          break;
        case "SIZE":
          const newSize = filter.sizes.filter((e) => e !== item.size);
          setFilter({ ...filter, sizes: newSize });
          break;
        default:
          return filter;
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.categories.length > 0) {
      temp = temp.filter((obj) => filter.categories.includes(obj.categorySlug));
    }
    if (filter.colors.length > 0) {
      temp = temp.filter((obj) => {
        const check = obj.colors.find((color) => filter.colors.includes(color));
        return check !== undefined;
      });
    }
    if (filter.sizes.length > 0) {
      temp = temp.filter((obj) => {
        const check = obj.size.find((size) => filter.sizes.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => updateProducts(), [updateProducts]);

  return (
    <Helmet title="San pham">
      <div className="catalog">
        <div className="catalog_filter" ref={filterRef}>
          <div className="catalog_filter_close" onClick={() => showFilter()}>
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog_filter_widget">
            <div className="catalog_filter_widget_title">danh muc san pham</div>
            <div className="catalog_filter_widget_content">
              {category.map((item, i) => (
                <div className="catalog_filter_widget_content_item" key={i}>
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.categories.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog_filter_widget">
            <div className="catalog_filter_widget_title">mau sac</div>
            <div className="catalog_filter_widget_content">
              {productColor.map((item, i) => (
                <div className="catalog_filter_widget_content_item" key={i}>
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.colors.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog_filter_widget">
            <div className="catalog_filter_widget_title">kich thuoc</div>
            <div className="catalog_filter_widget_content">
              {productSize.map((item, i) => (
                <div className="catalog_filter_widget_content_item" key={i}>
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.sizes.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog_filter_widget">
            <div className="catalog_filter_widget_content">
              <Button size="sm" onClick={() => setFilter(initFilters)}>
                Xoa bo loc
              </Button>
            </div>
          </div>
        </div>

        <div className="catalog_filter_toggle">
          <Button size="sm" onClick={() => showFilter()}>
            bo loc
          </Button>
        </div>

        <div className="catalog_content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
