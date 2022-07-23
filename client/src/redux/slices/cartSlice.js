import { createSlice } from "@reduxjs/toolkit";

const item =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];

const initialState = {
  value: item,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDITEM: (state, action) => {
      const newItem = action.payload;
      const duplicate = findItem(state.value, newItem);

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem);
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
                ? state.value[state.value.length - 1].id
                : 1,
          },
        ];
      }

      localStorage.setItem("cartItem", JSON.stringify(sortItem(state.value)));
    },
  },
});

const findItem = (arr, item) => {
  arr.filter(
    (e) =>
      e.slug === item.slug && e.color === item.color && e.size === item.size
  );
};

const delItem = (arr, item) => {
  arr.filter(
    (e) =>
      e.slug !== item.slug || e.color !== item.color || e.size !== item.size
  );
};

const sortItem = (arr) => {
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

export default cartSlice;
