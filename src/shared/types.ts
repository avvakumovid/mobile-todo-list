import { Feather } from '@expo/vector-icons';

export type TypeFeatherIconNames = keyof typeof Feather.glyphMap

export interface ICategory {
    name: string
    color: string
}

export interface ITask {
    id: string
    task: string
    isDone: boolean
    category: ICategory
    date: string
}

export interface ICategoriesItem {
    id: string,
    count: number
    name: string
    progress: number
    color: string
}