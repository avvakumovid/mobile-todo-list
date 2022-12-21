import React, { FC, useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { ITasksByCategoryItem } from '@/shared/types'

import Label from '../../label/Label'

import TasksByCategoryItem from './TasksByCategoryItem'
import { RootState } from '@/store'

const TaskListByCategory: FC = () => {
  const { taskByCategories } = useSelector((state: RootState) => state.task)
  const renderItem = useMemo(
    () =>
      ({ item }: { item: ITasksByCategoryItem }) =>
        <TasksByCategoryItem {...item} />,
    []
  )
  return (
    <View className='mb-4'>
      <Label text='categories' />
      <FlatList
        data={taskByCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default TaskListByCategory
