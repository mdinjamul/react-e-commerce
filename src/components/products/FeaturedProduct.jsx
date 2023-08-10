import React from "react";
import { useProductsContextHook } from "../../hooks/context/productContext";
import styled from "styled-components";
import ProductGridCard from "./ProductGridCard";

const FeaturedProduct = () => {
  const { isLoading, featuredProducts } = useProductsContextHook();

  // console.log(featuredProducts);

  if (isLoading) {
    return (
      <center>
        <h3 className="loading container">Loading....</h3>;
      </center>
    );
  }
  return (
    <FeaturedProductStyle className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Featured Services</div>
        <div className="grid grid-three-column">
          {featuredProducts.map((currentProduct) => {
            return (
              <ProductGridCard key={currentProduct.id} {...currentProduct} />
            );
          })}
        </div>
      </div>
    </FeaturedProductStyle>
  );
};

const FeaturedProductStyle = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
`;
export default FeaturedProduct;
