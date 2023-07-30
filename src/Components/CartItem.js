import React from "react";

const CartItem = ({ id, imageURL, name, amount, price, size }) => {
  return (
    <div className="title">
      <img
        src="https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg"
        alt="Classic Tee"
        className="img-cart"
      />

      <div className="info-cart">
        <h5>Classic Tee</h5>
        <h5>
          {amount} x ${price}.00
        </h5>
        <p className="size">
          Size : <span>{size}</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
