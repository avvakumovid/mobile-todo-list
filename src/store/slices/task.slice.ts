import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ITask, ITasksByCategoryItem } from './../../shared/types';
import { categories } from './category.slice';



export interface TaskState {
    tasks: ITask[]
    taskByCategories: ITasksByCategoryItem[]
}

const initialState: TaskState = {
    tasks: [],
    taskByCategories: []
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
        },
        updateTaskByCategory(state, action: PayloadAction<ICategory>) {

            let tasks = state.tasks.map(task => {
                if (task.category.id === action.payload.id) {
                    task.category = action.payload
                }
                return task
            })
            state.tasks = tasks
        },
        deleteTasksByCategories(state, action: PayloadAction<string>) {
            let tasks = state.tasks.filter(task => task.category.id !== action.payload)
            state.tasks = tasks

        }
    }
})


export default taskSlice.reducer

export const { addTask, removeTask, updateTask, toggleIsDoneTask, groupTaskByCategory, updateTaskByCategory, deleteTasksByCategories } = taskSlice.actions


