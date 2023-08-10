import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

// create context
const AppContext = createContext();

// products api
const API = import.meta.env.VITE_PRODUCTS_API;

// provider
const AppProvider = ({ children }) => {
  // define iniitial data
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleProductDetails: {},
  };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetch products from api
  const getProducts = async (url) => {
    // set loging using reducer hook before load products
    dispatch({
      type: "SET_LOADING",
    });
    try {
      // api call to load products
      const res = await axios.get(url);
      const products = await res.data;

      // console.log(products);

      // dispatch products using reducer hook
      dispatch({
        type: "SET_API_DATA",
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: "API_ERROR",
      });
    }
  };

  // api call for single product
  const getSingleProduct = async (url) => {
    dispatch({
      type: "SET_SINGLE_PRODUCT_LOADING",
    });
    try {
      const res = await axios.get(url);
      const singleProductData = await res.data;

      dispatch({
        type: "SET_SINGLE_PRODUCT_API_DATA",
        payload: singleProductData,
      });
    } catch (error) {
      dispatch({
        type: "SINGLE_PRODUCT_API_ERROR",
      });
    }
  };

  // auto call api
  useEffect(() => {
    getProducts(API);
  }, []);

  // useEffect(() => {
  //   getSingleProduct(API);
  // }, []);
  // return app context provider
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks for import this AppContext to other page
const useProductsContextHook = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContextHook };
