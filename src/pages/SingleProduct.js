import React from "react";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useProductsContext } from "../context/products_context";
import { useEffect, useContext } from "react";
import AddToCart from "../Components/AddToCart";

const SingleProduct = () => {
  const {
    loading,
    error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  const { id, title, description, price, imageURL } = product;

  return (
    <div className="section section-center page">
      <div className="product-center">
        <section className="content">
          {" "}
          <img src={imageURL} alt="main image" className="main" />
        </section>
        <div>
          {" "}
          <h2>{title}</h2>
          <h4>${price}.00</h4>
          <p>{description}</p>
          <hr />
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
