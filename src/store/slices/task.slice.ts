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
    {
        id: '3',
        category: categories[1],
        isDone: false,
        task: 'Second test task view Second test task view',
        date
    },

    {
        id: '4',
        category: categories[1],
        isDone: true,
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
            let cIndex = state.taskByCategories.findIndex(c => {
                return c.id == tasks[taskIndex].category.id
            })
            let p = 100 / state.taskByCategories[cIndex].count
            let taskByCategories = state.taskByCategories
            if (tasks[taskIndex].isDone) {
                taskByCategories[cIndex].progress += (p / 100)
            } else {
                taskByCategories[cIndex].progress -= (p / 100)
            }
            state.taskByCategories = taskByCategories
        },
        groupTaskByCategory(state) {
            let groupByCategories = new Map<string, ITask[]>()

            state.tasks.forEach(task => {
                let id = task.category.id
                groupByCategories.set(id, [...groupByCategories.get(id) || [], task])
            })
            let task = [...groupByCategories.values()]
            let f = task.map((t, i) => {
                let count = t.length
                let isDone = t.reduce((a, n) => n.isDone ? a + 1 : a, 0)
                let percent = isDone / count
                return {
                    id: t[0].category.id,
                    count: count,
                    progress: percent,
                    category: t[0].category
                }
            })

            state.taskByCategories = f
        }
    }
})


export default taskSlice.reducer

export const { addTask, removeTask, updateTask, toggleIsDoneTask, groupTaskByCategory } = taskSlice.actions


