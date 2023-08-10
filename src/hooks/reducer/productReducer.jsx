const productReducer = (state, action) => {
  // set data by condition
  switch (action.type) {
    // loading before products load
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    //   load products
    case "SET_API_DATA":
      // filter out featured products
      const featuredData = action.payload.filter((currentProduct) => {
        return currentProduct.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData,
      };
    //   handle error
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // loading before single products load
    case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    //   load single products
    case "SET_SINGLE_PRODUCT_API_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProductDetails: action.payload,
      };

    //   handle single product page error
    case "SINGLE_PRODUCT_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
