
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
    name: string
    pictures: string
}

const initialState = {
    isAuth: false,
    user: {
        name: '',
        pictures: ''
    }
}

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        register(state, action: PayloadAction<IUser>) {
            state.user = action.payload
            state.isAuth = true
        }
    }
})

export default authSlice.reducer

export const { register } = authSlice.actions