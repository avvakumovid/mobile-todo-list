import Main from '../components/screen/Main';
import { IRoute } from './navigation.types';
import NewTask from './../components/screen/NewTask';


export const DrawerRoute: IRoute[] = [
    {
        name: 'Main',
        component: Main,
        icon: 'airplay'
    },
]


export const routes: IRoute[] = [
    ...DrawerRoute,
    {
        name: 'New Task',
        component: NewTask,
        icon: 'trash'
    },
]