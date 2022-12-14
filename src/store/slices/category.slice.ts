import { createSlice } from '@reduxjs/toolkit'
import { ICategory } from '@/shared/types';



export interface CategoryState {
    categories: ICategory[]
}

export const categories: ICategory[] = [
    {
        id: '1',
        name: 'business',
        color: '#bc2ac8',
    },
    {
        id: '2',
        name: 'personal',
        color: '#096bff',
    },
    {
        id: '3',
        name: '2ff211',
        color: '#2ff211',
    },
    {
        id: '4',
        name: 'd44211',
        color: '#d44211',
    },
    {
        id: '5',
        name: '896bff',
        color: '#896bff',
    },
    {
        id: '6',
        name: 'personal',
        color: '#e96bff',
    },
]

const initialState = {
    categories
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    }
})


export default categorySlice.reducer

export const { } = categorySlice.actions