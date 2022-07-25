import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./slices/cartItemsSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: { product: productSlice.reducer, cartItems: cartItemsSlice.reducer },
});

export default store;
