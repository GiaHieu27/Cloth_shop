import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:
    localStorage.getItem("cartItems") !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDITEM: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.cartItems.filter(
        (item) =>
          item.slug === newItem.slug &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (duplicate.length > 0) {
        state.cartItems = state.cartItems.filter(
          (item) =>
            item.slug !== newItem.slug ||
            item.color !== newItem.color ||
            item.size !== newItem.size
        );
        state.cartItems = [
          ...state.cartItems,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            ...newItem,
            id:
              state.cartItems.length > 0
                ? state.cartItems[state.cartItems.length - 1].id + 1
                : 1,
          },
        ];
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.cartItems.sort((a, b) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
    },
  },
});

export default cartSlice;
