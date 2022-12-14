import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'

import { ITasksByCategoryItem } from '@/shared/types'

import Label from '../../label/Label'

import TasksByCategoryItem from './TasksByCategoryItem'

interface ICategoriesList {
  categories: ITasksByCategoryItem[]
}

const TaskListByCategory: FC<ICategoriesList> = ({ categories }) => {
  const renderItem = ({ item }: { item: ITasksByCategoryItem }) => (
    <TasksByCategoryItem {...item} />
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

export default TaskListByCategory
