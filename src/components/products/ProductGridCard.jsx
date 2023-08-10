import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PriceFormat from "../helper-components/PriceFormat";

const ProductGridCard = (currentProduct) => {
  const { id, name, image, price, category } = currentProduct;

  return (
    <ProductGridCardStyle>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price">
                <PriceFormat price={price} />
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </ProductGridCardStyle>
  );
};

const ProductGridCardStyle = styled.section`
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default ProductGridCard;
