const products_reducer = (state, action) => {
  if (action.type === "CART_OPEN") {
    return { ...state, isCartOpen: true };
  }
  if (action.type === "CART_CLOSE") {
    return { ...state, isCartOpen: false };
  }

  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
