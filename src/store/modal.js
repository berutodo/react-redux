import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        openModal(state) {
            return state = true
        },
        closeModal(state) {
            return state = false
        }
    }
})

export const { openModal, closeModal } = slice.actions;
export default slice.reducer