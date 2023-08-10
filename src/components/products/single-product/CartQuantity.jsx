import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartQuantity = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <CartQuantityStyle>
      <div className="cart-button">
        <div className="quantity-toggle">
          <button onClick={() => setDecrease()}>
            <FaMinus />
          </button>
          <div className="quantity-number">{quantity}</div>
          <button onClick={() => setIncrease()}>
            <FaPlus />
          </button>
        </div>
      </div>
    </CartQuantityStyle>
  );
};

const CartQuantityStyle = styled.section`
  /* we can use it as a global one too  */
  .quantity-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .quantity-number {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default CartQuantity;
