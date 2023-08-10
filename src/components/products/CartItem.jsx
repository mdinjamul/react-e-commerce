import React, { useState } from "react";
import styled from "styled-components";
import PriceFormat from "../helper-components/PriceFormat";
import CartQuantity from "./single-product/CartQuantity";
import { FaTrash } from "react-icons/fa";
import { useCartContextHook } from "../../hooks/context/cartContext";

const CartItem = ({ id, name, image, color, price, quantity }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContextHook();

  return (
    <CartItemStyle>
      <div className="cart_heading grid grid-five-column">
        {/* Name and Image */}
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>Color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="cart-hide">
          <p>
            <PriceFormat price={price} />
          </p>
        </div>
        {/* Quantity */}
        <CartQuantity
          quantity={quantity}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrease(id)}
        />

        {/* Subtotal */}
        <div className="cart-hide">
          <p>
            <PriceFormat price={price * quantity} />
          </p>
        </div>
        <div>
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
      </div>
    </CartItemStyle>
  );
};

const CartItemStyle = styled.section``;
export default CartItem;
