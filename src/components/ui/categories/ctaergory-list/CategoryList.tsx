import { FC } from 'react'
import { FlatList } from 'react-native'

import { ICategory } from '@/shared/types'

import CategoryItem from './CategoryItem'

interface ICategoryList {
  categories: ICategory[]
}

const CategoryList: FC<ICategoryList> = ({ categories }) => {
  const renderItem = ({ item }: { item: ICategory }) => (
    <CategoryItem {...item} />
  )
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CategoryList
