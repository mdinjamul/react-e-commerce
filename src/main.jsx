import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./hooks/context/productContext";
import { FilterContextProvider } from "./hooks/context/filterContext";
import App from "./App";
import { CartProvider } from "./hooks/context/cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
