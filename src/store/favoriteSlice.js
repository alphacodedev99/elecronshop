import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
        favoriteTotal: 0
    },
    reducers: {
        saveFavoriteHandler: (state, action) => {
            let copyArray = [...state.favorite];
            let findIndex = null;

            copyArray.find((el, index) => {
                if (el.id === action.payload.id) {
                    findIndex = index
                    return
                }
            })


            if (findIndex === null) {
                copyArray.push({ ...action.payload, activeFav: true })
                state.favoriteTotal++;
            } else {
                copyArray.splice(findIndex, 1);
                state.favoriteTotal--;
            }

            state.favorite = copyArray;

        }
    }
})

export const { saveFavoriteHandler } = favoriteSlice.actions;
export default favoriteSlice.reducer;