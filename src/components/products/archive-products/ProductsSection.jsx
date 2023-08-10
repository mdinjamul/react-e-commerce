import React from "react";
import { useFilterContexHook } from "../../../hooks/context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContexHook();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

// const ProductListStyle = styled.section``;
export default ProductList;
