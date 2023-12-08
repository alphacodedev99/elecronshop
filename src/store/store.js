import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        userStore: userSlice,
        productStore: productSlice
    }
});

export default store;

