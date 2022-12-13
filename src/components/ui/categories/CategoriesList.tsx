import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'

import { ICategoriesItem } from '@/shared/types'

import Label from '../label/Label'

import CategoriesItem from './CategoriesItem'

interface ICategoriesList {
  categories: ICategoriesItem[]
}

const CategoriesList: FC<ICategoriesList> = ({ categories }) => {
  const renderItem = ({ item }: { item: ICategoriesItem }) => (
    <CategoriesItem {...item} />
  )
  return (
    <View className='mb-4'>
      <Label text='categories' />
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoriesList
