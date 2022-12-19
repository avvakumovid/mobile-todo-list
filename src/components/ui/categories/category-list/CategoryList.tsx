import { FC, useMemo } from 'react'
import { FlatList } from 'react-native'

import { ICategory } from '@/shared/types'

import CategoryItem from './CategoryItem'

interface ICategoryList {
  categories: ICategory[]
  setEdit: (category: ICategory) => void
}

const CategoryList: FC<ICategoryList> = ({ categories, setEdit }) => {
  const renderItem = useMemo(
    () =>
      ({ item, index }: { item: ICategory; index: number }) =>
        <CategoryItem setEdit={setEdit} category={item} index={index} />,
    []
  )
  return (
    <FlatList
      data={[...categories]}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CategoryList
