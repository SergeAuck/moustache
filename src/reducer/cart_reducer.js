const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, mainSize, amount, product, name, imageURL } = action.payload;
    console.log(product);
    console.log(mainSize);
    const tempItem = state.cart.find((i) => i.id === id + mainSize); //looking for the same item in the cart

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + mainSize) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + mainSize,
        name: name,
        amount,
        imageURL: product.imageUrl,
        price: product.price,
        size: mainSize,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === "COUNT_CART_TOTALS") {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { price, amount } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_items: total_items, total_amount: total_amount };
  }

  //return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
