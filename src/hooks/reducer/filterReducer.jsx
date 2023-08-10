const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTERED_PRODUCTS":
      // price max and min value
      let priceArray = action.payload.map(
        (currentElement) => currentElement.price
      );
      const maxPrice = Math.max(...priceArray);
      const minPrice = Math.min(...priceArray);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          minPrice: minPrice,
          price: maxPrice,
        },
      };
    // set grid view true
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    // set list view true
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    // Product sorting
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    // sorting conditions
    case "SORTING_PRODUCTS":
      let { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProductByPrice = (a, b) => {
        // sort by lowest price
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        // sort by highest price
        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        // sort by a-z
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        // sort by z-a
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      const newSortData = tempSortProduct.sort(sortingProductByPrice);
      // console.log(newSortData);

      // return sorted values
      return {
        ...state,
        filter_products: newSortData,
      };

    // update filter values
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // filter products
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      // console.log(all_products);

      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currentElement) => {
          return currentElement.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (currentElement) =>
            currentElement.category.toLowerCase() === category.toLowerCase()
        );
      }
      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (currentElement) =>
            currentElement.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (colors !== "all") {
        tempFilterProducts = tempFilterProducts.filter((currentElement) =>
          currentElement.colors.includes(colors)
        );
      }

      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (currentElement) => currentElement.price == price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (currentElement) => currentElement.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    // clear filters
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
