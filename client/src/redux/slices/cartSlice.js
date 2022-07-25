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
      const item = state.cartItems.filter(
        (item) =>
          item.slug === newItem.slug &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (item.length > 0) {
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
            id: item[0].id,
            quantity: newItem.quantity + item[0].quantity,
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
    UPDATEITEM: (state, action) => {
      const itemUpdate = action.payload;
      const item = state.cartItems.filter(
        (item) =>
          item.slug === itemUpdate.slug &&
          item.color === itemUpdate.color &&
          item.size === itemUpdate.size
      );

      if (item.length > 0) {
        state.cartItems = state.cartItems.filter(
          (item) =>
            item.slug !== itemUpdate.slug ||
            item.color !== itemUpdate.color ||
            item.size !== itemUpdate.size
        );
        state.cartItems = [
          ...state.cartItems,
          {
            ...itemUpdate,
            id: item[0].id,
            // quantity: itemUpdate.quantity + item[0].quantity,
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
    REMOVEITEM: (state, action) => {
      const itemRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) =>
          item.slug !== itemRemove.slug ||
          item.color !== itemRemove.color ||
          item.size !== itemRemove.size
      );
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
