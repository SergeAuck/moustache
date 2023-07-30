import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { id, sizeOptions = [] } = product;
  const [mainSize, setMainSize] = useState(null);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(null);

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    if (!mainSize) {
      setError(true);
    } else {
      addToCart(id, mainSize, amount, product);
      setError(false);
    }
  };

  return (
    <>
      <div className="sizes">
        <span>
          Size : {mainSize ? mainSize : error ? "please pick a size" : "*"}
        </span>
        <div>
          {sizeOptions.map((size, index) => {
            const { id, label } = size;
            return (
              <button
                key={index}
                className={`${
                  mainSize === label ? "size-btn active" : "size-btn"
                }`}
                onClick={() => setMainSize(label)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          add to cart
        </button>
      </div>
    </>
  );
};

export default AddToCart;
