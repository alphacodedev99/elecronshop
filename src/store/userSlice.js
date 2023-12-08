import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        // ovde logujemo!
        loggedUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('elUser', JSON.stringify(action.payload));
            localStorage.setItem('elToken', JSON.stringify(action.payload.token));
        },
        restoreUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            state.user = {};
            localStorage.removeItem('elUser');
            localStorage.removeItem('elToken');
        }

    }
})

export const { loggedUser, restoreUser, clearUser } = userSlice.actions;
export default userSlice.reducer;