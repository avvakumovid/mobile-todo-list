import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'

import { ICategory } from '@/shared/types'

interface ICategoryList {
  categories: ICategory[]
}

const CategoryList: FC<ICategoryList> = ({ categories }) => {
  const renderItem = ({ item }: { item: ICategory }) => <></>
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
