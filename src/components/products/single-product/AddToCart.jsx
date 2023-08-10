import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { HiCheck } from "react-icons/hi";
import CartQuantity from "./CartQuantity";
import { NavLink } from "react-router-dom";
import { useCartContextHook } from "../../../hooks/context/cartContext";

const AddToCart = ({ product }) => {
  if (product == undefined) {
    return <p>unable to get data</p>;
  }

  const { addToCart } = useCartContextHook();
  const { id, stock, colors } = product;

  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  return (
    <AddToCartStyle>
      <div className="colors">
        <p>
          Colors:
          {colors.map((currentColor, index) => {
            return (
              <PrimaryButton
                key={index}
                style={{ backgroundColor: currentColor }}
                className={
                  color === currentColor ? "btnStyle active" : "btnStyle"
                }
                onClick={() => {
                  setColor(currentColor);
                }}
              >
                {color === currentColor ? (
                  <HiCheck className="checkStyle" />
                ) : null}
              </PrimaryButton>
            );
          })}
        </p>
      </div>
      {/* Add to cart section */}
      <CartQuantity
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink
        to="/cart"
        onClick={() => addToCart(id, color, quantity, product)}
      >
        <PrimaryButton>Add to Cart</PrimaryButton>
      </NavLink>
    </AddToCartStyle>
  );
};

const AddToCartStyle = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    padding: 0;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }

  .checkStyle {
    color: #fff;
  }
`;
export default AddToCart;
