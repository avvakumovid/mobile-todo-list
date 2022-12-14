import { Feather } from '@expo/vector-icons';

export type TypeFeatherIconNames = keyof typeof Feather.glyphMap

export interface ICategory {
    id: string
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

export interface ITasksByCategoryItem {
    id: string,
    count: number
    category: ICategory
    progress: number
}