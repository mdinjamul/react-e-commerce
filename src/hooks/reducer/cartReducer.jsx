const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, quantity, product } = action.payload;

      // if product already exist then increase quantity only
      let checkExistingProduct = state.cart.find(
        (currentItem) => currentItem.id === id + color
      );
      if (checkExistingProduct) {
        let searchExistingProduct = state.cart.map((currentItem) => {
          if (currentItem.id === id + color) {
            let newQuantity = currentItem.quantity + quantity;
            // check quantity with stock
            if (newQuantity >= currentItem.stock) {
              newQuantity = currentItem.stock;
            }
            return {
              ...currentItem,
              quantity: newQuantity,
            };
          } else {
            return currentItem;
          }
        });
        return {
          ...state,
          cart: searchExistingProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color: color,
          quantity: quantity,
          image: product.image[0].url,
          price: product.price,
          stock: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    // set cart quantity toggle
    // decrease
    case "SET_DECREMENT":
      let searchProductQuantityDecrement = state.cart.map((currentItem) => {
        if (currentItem.id === action.payload) {
          let decreaseQuantity = currentItem.quantity - 1;
          if (decreaseQuantity <= 1) {
            decreaseQuantity = 1;
          }
          return {
            ...currentItem,
            quantity: decreaseQuantity,
          };
        } else {
          return currentItem;
        }
      });
      return { ...state, cart: searchProductQuantityDecrement };

    // inrease
    case "SET_INCREMENT":
      let searchProductQuantityIncrement = state.cart.map((currentItem) => {
        if (currentItem.id === action.payload) {
          let increaseQuantity = currentItem.quantity + 1;
          if (increaseQuantity >= currentItem.stock) {
            increaseQuantity = currentItem.stock;
          }
          return {
            ...currentItem,
            quantity: increaseQuantity,
          };
        } else {
          return currentItem;
        }
      });
      return { ...state, cart: searchProductQuantityIncrement };

    // remove item from cart
    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (currentItem) => currentItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    // clear cart
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // update total cart item
    case "UPDATE_TOTAL_ITEM":
      let updatedCartItem = state.cart.reduce(
        (initialValue, currentElement) => {
          let { quantity } = currentElement;
          initialValue = initialValue + quantity;
          return initialValue;
        },
        0
      );
      return {
        ...state,
        total_item: updatedCartItem,
      };

    // total cart value
    case "UPDATE_TOTAL_CART_VALUE":
      let updateTotalCartValue = state.cart.reduce(
        (initialValue, currentElement) => {
          let { price, quantity } = currentElement;
          initialValue = initialValue + price * quantity;
          return initialValue;
        },
        0
      );
      return {
        ...state,
        subtotal: updateTotalCartValue,
      };
  }
  return state;
};

export default cartReducer;
