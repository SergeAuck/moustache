import React from "react";
import { useProductsContext } from "../context/products_context";
import Cart from "./Cart";
import { useCartContext } from "../context/cart_context";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { isCartOpen, openCart, closeCart } = useProductsContext();
  const { total_items } = useCartContext();
  const toggleCart = () => {
    isCartOpen ? closeCart() : openCart();
  };

  return (
    <div className="nav">
      <button type="button" className="btn" onClick={toggleCart}>
        <span className="btn-content-desktop">My Cart {total_items}</span>
        <span className="btn-content-mobile">
          <FiShoppingCart /> {total_items}
        </span>
      </button>
      <Cart />
      <Cart />
    </div>
  );
};

export default Navbar;
