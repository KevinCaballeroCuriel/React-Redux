const initialState = {
  products: [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
    { id: 4, name: "Producto 4" },
  ],
  cart: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      const { idProduct, name } = action;

      if (state.cart.findIndex((product) => product.id === idProduct) !== -1) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === idProduct
              ? { ...product, quantity: (product.quantity += 1) }
              : product
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { id: idProduct, name: name, quantity: 1 }],
      };
    default:
      return state;
  }
};
