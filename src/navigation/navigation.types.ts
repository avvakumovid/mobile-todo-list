import { FC } from 'react'
import { Feather } from '@expo/vector-icons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { TypeFeatherIconNames } from '@/shared/types';

export type TypeRootStackParamList = {
    Main: undefined,
    ['New Task']: undefined
    ['Create Task']: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    component: FC<DrawerScreenProps<any>>
    icon: TypeFeatherIconNames
}

