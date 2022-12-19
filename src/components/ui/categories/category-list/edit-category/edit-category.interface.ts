import { ICategory } from '@/shared/types'
import { Dispatch, SetStateAction } from 'react'

export interface IEditCategoryForm {
    color: string
    name: string
    id: string
    isNew?: boolean
}


export interface IEditCategory {
    category?: ICategory
    setIsShow: Dispatch<SetStateAction<boolean>>
}