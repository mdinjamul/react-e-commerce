import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import PriceFormat from "../helper-components/PriceFormat";
import { PrimaryButton } from "../Buttons/PrimaryButton";

const ProductListCard = (currentProduct) => {
  const { id, name, image, price, category, description } = currentProduct;

  return (
    <ProductGridCardStyle>
      <div className="card grid grid-two-column" key={id}>
        <NavLink to={`/singleproduct/${id}`}>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </NavLink>
        <div className="card-data">
          <NavLink to={`/singleproduct/${id}`}>
            <h3>{name}</h3>
          </NavLink>
          <p>
            <PriceFormat price={price} />
          </p>
          <p>{description.slice(0, 90)}...</p>
          <NavLink to={`/singleproduct/${id}`} className="btn-main">
            <PrimaryButton className="btn">See More</PrimaryButton>
          </NavLink>
        </div>
      </div>
    </ProductGridCardStyle>
  );
};

const ProductGridCardStyle = styled.section`
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem 0;
      padding: 0.8rem 1.8rem;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ProductListCard;
