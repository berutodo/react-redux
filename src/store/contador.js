import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contador',
    initialState: 0,
    reducers: {
        incrementar(state) {
            return state + 1
        },
        reduzir(state) {
            return state - 1
        },
    }
})

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;