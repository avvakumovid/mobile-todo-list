import React, { FC, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Label from '../label/Label'

import { ITask } from './../../../shared/types'
import TaskItem from './TaskItem'

interface ITasksList {
  tasks: ITask[]
}

const TasksList: FC<ITasksList> = ({ tasks }) => {
  return (
    <>
      <Label text="today's tasks" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {[...tasks].reverse().map((item, index) => (
          <TaskItem key={item.id} {...item} index={index} />
        ))}
        <View className='flex-row w-full z-10 py-8 px-4 items-center bg-transparent rounded-2xl'></View>
      </ScrollView>
    </>
  )
}

export default TasksList
