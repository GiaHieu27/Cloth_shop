import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  value: items,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    ADDITEM: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter(
        (item) =>
          item.slug === newItem.slug &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (duplicate.length > 0) {
        state.value = state.value.filter(
          (item) =>
            item.slug !== newItem.slug ||
            item.color !== newItem.color ||
            item.size !== newItem.size
        );
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
  },
});

export default cartItemsSlice;
