import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
    reducer: {
        userStore: userSlice,
        productStore: productSlice,
        cartStore: cartSlice,
        favoriteStore: favoriteSlice
    }
});

export default store;

