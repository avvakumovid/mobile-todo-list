import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategoriesItem, ICategory, ITask } from './../../shared/types';

const date = new Date().toString()

export const data: ICategoriesItem[] = [
    {
        id: '1',
        count: 40,
        name: 'business',
        progress: 0.74,
        color: '#bc2ac8',
    },
    {
        id: '2',
        count: 18,
        name: 'personal',
        progress: 0.2,
        color: '#096bff',
    },
]
export const tasks: ITask[] = [
    {
        id: '3',
        category: data[1],
        isDone: true,
        task: 'First view',
        date
    },
    {
        id: '5',
        category: data[0],
        isDone: false,
        task: 'Second test task view Second test task view',
        date
    },
]
export interface TaskState {
    tasks: ITask[]
    categories: ICategoriesItem[]
}

const initialState: TaskState = {
    tasks: tasks,
    categories: data
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


