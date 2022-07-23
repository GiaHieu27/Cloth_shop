import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { value: null },
  reducers: {
    SET: (state, action) => {
      state.value = action.payload;
    },
    REMOVE: (state, action) => {
      state.value = null;
    },
  },
});

export default productSlice;
