import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    error: false,
    productPopup: null,
  },
  reducers: {
    PRODUCT_LIST_REQUEST: (state, action) => {
      state.loading = true;
    },
    PRODUCT_LIST_SUCCESS: (state, action) => {
      // if (action.payload) {
      //   state.loading = false;
      //   state.products = action.payload;
      // }
      state.products = action.payload;
      state.loading = true;
    },
    PRODUCT_LIST_FAIL: (state, action) => {
      if (action.payload) {
        state.loading = false;
        state.error = action.payload;
      }
    },
    // productPopup
    SET: (state, action) => {
      state.productPopup = action.payload;
    },
    REMOVE: (state, action) => {
      state.productPopup = null;
    },
  },
});

export default productSlice;
