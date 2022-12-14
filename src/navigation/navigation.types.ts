import { FC } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TypeFeatherIconNames } from '@/shared/types';

export type TypeRootStackParamList = {
    Main: undefined,
    ['New Task']: undefined
    Task: undefined
    Category: undefined
    Test: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    component: FC<DrawerScreenProps<any>>
    icon: TypeFeatherIconNames
}

