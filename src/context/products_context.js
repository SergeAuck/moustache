import axios from "axios";
import React from "react";
import reducer from "../reducer/products_reducer";
import { useReducer, useEffect, useContext } from "react";

const initialState = {
  isCartOpen: false,
  loading: false,
  error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openCart = () => {
    dispatch({ type: "CART_OPEN" });
  };

  const closeCart = () => {
    dispatch({ type: "CART_CLOSE" });
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: singleProduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, openCart, closeCart, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
