import React from "react";
import {
  ProductsProvider,
  useProductsContext,
} from "../context/products_context";
import CartContent from "./CartContent";

const Cart = () => {
  const { isCartOpen, openCart, closeCart } = useProductsContext();

  return (
    <div className={isCartOpen ? "cart open" : "cart closed"}>
      {isCartOpen ? <CartContent /> : "Closed"}
    </div>
  );
};

export default Cart;
