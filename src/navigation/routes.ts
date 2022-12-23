import Main from '../components/screen/Main';
import { IRoute } from './navigation.types';
import NewTask from './../components/screen/NewTask';
import Category from './../components/screen/Category';
import ColorPicker from '@/components/ui/color-picker/ColorPicker';
import Task from '@/components/screen/Task';
import TasksByCategory from '@/components/screen/TasksByCategory';


export const DrawerRoute: IRoute[] = [
    {
        name: 'Main',
        component: Main,
        icon: 'home'
    },
    {
        name: 'Categories',
        component: Category,
        icon: 'archive'
    },
]


export const routes: IRoute[] = [
    ...DrawerRoute,
    {
        name: 'New Task',
        component: NewTask,
        icon: 'activity'
    },
    {
        name: 'Task',
        component: Task,
        icon: 'activity'
    },
    {
        name: 'TasksByCategory',
        component: TasksByCategory,
        icon: 'activity'
    },
    {
        name: 'Test',
        component: ColorPicker,
        icon: 'activity'
    }

]