import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
    name: 'home',
    initialState: {
        data: null
    },
    reducers: {
        handleProducts(state, action) {
            state.data = action.payload
        }
    }
})

export const { handleProducts } = homeSlice.actions
export default homeSlice.reducer