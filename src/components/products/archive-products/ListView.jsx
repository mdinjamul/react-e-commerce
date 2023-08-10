import React from "react";
import styled from "styled-components";

import ProductListCard from "../ProductListCard";

const ListView = ({ products }) => {
  //   console.log(products);
  return (
    <ListViewStyle className="section">
      <div className="container grid">
        {products.map((currentProduct, id) => {
          return <ProductListCard key={id} {...currentProduct} />;
        })}
      </div>
    </ListViewStyle>
  );
};

const ListViewStyle = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: flex-start;
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
      /* margin-top: 1.5rem; */
      width: 30rem;
      transition: all 0.2s linear;
      margin: 1.3rem;
    }
  }
`;

export default ListView;
