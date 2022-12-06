import { ComponentType } from 'react'

export type TypeRootStackParamList = {
    Main: undefined,
    ['New Task']: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    component: ComponentType
}