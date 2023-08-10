import { useEffect, useContext, createContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartData");
  // if (localCartData == []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }

  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  shipping_fee: 50,
  subtotal: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, quantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, product },
    });
  };

  // cart quantity toggle
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // remove item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // save cart data to local storage
  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL_ITEM" });
    dispatch({ type: "UPDATE_TOTAL_CART_VALUE" });
    localStorage.setItem("cartData", JSON.stringify(state.cart));
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContextHook = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContextHook };
