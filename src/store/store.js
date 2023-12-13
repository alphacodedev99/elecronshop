import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        userStore: userSlice,
        productStore: productSlice,
        cartStore: cartSlice
    }
});

export default store;

