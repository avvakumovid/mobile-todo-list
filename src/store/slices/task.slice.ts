import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ITask, ITasksByCategoryItem } from './../../shared/types';
import { categories } from './category.slice';

const date = new Date().toString()

export const data: ITasksByCategoryItem[] = [
    {
        id: '1',
        count: 40,
        progress: 0.74,
        categoryId: '1'
    },
    {
        id: '2',
        count: 18,
        progress: 0.2,
        categoryId: '2'
    },
    {
        id: '3',
        count: 18,
        progress: 0.2,
        categoryId: '3'
    },
    {
        id: '4',
        count: 18,
        progress: 0.2,
        categoryId: '4'
    },
    {
        id: '5',
        count: 18,
        progress: 0.2,
        categoryId: '5'
    },
    {
        id: '6',
        count: 18,
        progress: 0.2,
        categoryId: '6'
    },
]
export const tasks: ITask[] = [
    {
        id: '3',
        category: categories[0],
        isDone: true,
        task: 'First view',
        date
    },
    {
        id: '5',
        category: categories[1],
        isDone: false,
        task: 'Second test task view Second test task view',
        date
    },
]
export interface TaskState {
    tasks: ITask[]
    taskByCategories: ITasksByCategoryItem[]
}

const initialState: TaskState = {
    tasks: tasks,
    taskByCategories: data
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>) {
            state.tasks = [...state.tasks, action.payload]
        },
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})


export default taskSlice.reducer

export const { addTask, removeTask } = taskSlice.actions


