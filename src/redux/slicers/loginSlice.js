import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: {
            name: '',
            email: '',
            password: ''
        }
    },
    reducers: {
        handleLogin(state, action) {
            state.login = action.payload
        }
    }
})

export const { handleLogin } = loginSlice.actions
export default loginSlice.reducer