import Main from '../components/screen/Main';
import { IRoute } from './navigation.types';
import NewTask from './../components/screen/NewTask';

export const routes: IRoute[] = [
    {
        name: 'Main',
        component: Main
    },
    {
        name: 'New Task',
        component: NewTask
    },
]