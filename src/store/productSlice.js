import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        category: [],
        currentCategory: 'smartphones',
    },
    reducers: {
        categoryHandler: (state, action) => {
            state.category = action.payload;
        },
        productsHandler: (state, action) => {

            state.products = action.payload;

        },
        currentCategoryHandler: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
})

export const { categoryHandler, productsHandler, currentCategoryHandler } = productSlice.actions;
export default productSlice.reducer;