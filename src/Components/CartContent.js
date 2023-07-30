import React from "react";
import { useCartContext } from "../context/cart_context";

import CartItem from "./CartItem";

const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
    </>
  );
};
export default CartContent;
