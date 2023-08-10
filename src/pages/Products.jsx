import React from "react";
import styled from "styled-components";
import FilterSection from "../components/products/archive-products/FilterSection";
import ProductsSection from "../components/products/archive-products/ProductsSection";
import ProductSort from "../components/products/archive-products/ProductSort";

const Products = () => {
  return (
    <ProductsStyle>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <ProductSort />
          </div>
          <div className="main-product">
            <ProductsSection />
          </div>
        </section>
      </div>
    </ProductsStyle>
  );
};

const ProductsStyle = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Products;
