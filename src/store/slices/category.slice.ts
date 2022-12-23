import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '@/shared/types';
import { colors } from '@/shared/colors';


export interface CategoryState {
    categories: ICategory[]
}

export const categories: ICategory[] = [
    {
        id: '1',
        name: 'business',
        color: colors[0],
    },
    {
        id: '2',
        name: 'personal',
        color: colors[1],
    },

]

const initialState = {
    categories
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        editCategory(state, action: PayloadAction<ICategory>) {
            let index = state.categories.findIndex(category => category.id === action.payload.id)

            let categories = [...state.categories]

            categories[index] = action.payload
            state.categories = categories
        },
        removeCategory(state, action: PayloadAction<string>) {
            state.categories = state.categories.filter(category => category.id !== action.payload)
        },
        addCategory(state, action: PayloadAction<ICategory>) {
            state.categories = [...state.categories, action.payload]
        }
    }
})


export default categorySlice.reducer

export const { editCategory, removeCategory, addCategory } = categorySlice.actions