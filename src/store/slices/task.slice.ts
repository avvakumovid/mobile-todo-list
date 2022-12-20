import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ITask, ITasksByCategoryItem } from './../../shared/types';
import { categories } from './category.slice';


const date = new Date().toString()

export const data: ITasksByCategoryItem[] = [
    {
        id: '1',
        count: 40,
        progress: 0.74,
        category: categories[0]
    },
    {
        id: '2',
        count: 18,
        progress: 0.2,
        category: categories[1]
    },
    {
        id: '3',
        count: 18,
        progress: 0.2,
        category: categories[3]
    },
    {
        id: '4',
        count: 18,
        progress: 0.2,
        category: categories[2]
    },
    {
        id: '5',
        count: 18,
        progress: 0.2,
        category: categories[5]
    },
    {
        id: '6',
        count: 18,
        progress: 0.2,
        category: categories[4]
    },
]
export const tasks: ITask[] = [
    {
        id: '1',
        category: categories[0],
        isDone: true,
        task: 'First view',
        date
    },
    {
        id: '2',
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
        },
        updateTask(state, action: PayloadAction<ITask>) {
            let taskIndex = state.tasks.findIndex(task => task.id === action.payload.id)
            let tasks = [...state.tasks]
            tasks[taskIndex] = action.payload
            state.tasks = tasks
        },
        toggleIsDoneTask(state, action: PayloadAction<string>) {
            let taskIndex = state.tasks.findIndex(task => task.id === action.payload)
            let tasks = [...state.tasks]
            tasks[taskIndex].isDone = !tasks[taskIndex].isDone
            state.tasks = tasks
        },
    }
})


export default taskSlice.reducer

export const { addTask, removeTask, updateTask, toggleIsDoneTask } = taskSlice.actions


