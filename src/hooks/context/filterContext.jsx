import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContextHook } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};
const FilterContextProvider = ({ children }) => {
  const { isLoading, products } = useProductsContextHook();

  if (isLoading) {
    return (
      <center>
        <h3 className="loading container">Loading....</h3>;
      </center>
    );
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // get user sorting value and pass to reducer
  const sorting = (event) => {
    const userSortValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userSortValue });
    // console.log(userSortValue);
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // clear filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // filter
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  // call when sorting input changed by user
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTERED_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// create custom hooks
const useFilterContexHook = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContexHook };
