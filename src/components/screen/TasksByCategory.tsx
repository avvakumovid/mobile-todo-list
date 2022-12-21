import { DrawerScreenProps } from '@react-navigation/drawer'
import { useRoute } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import Layout from '../ui/layout/Layout'
import TasksList from '../ui/task/TasksList'

import { useTypedRoute } from './../../hooks/useTypedRoute'
import { ITask } from './../../shared/types'
import TaskListByCategory from './../ui/categories/tasks-by-category/TaskListByCategory'
import { RootState } from '@/store'

const TasksByCategory: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { tasks } = useSelector((state: RootState) => state.task)
  const [tasksByCategory, setTasksByCategory] = useState<ITask[]>([])
  const [label, setLabel] = useState('')
  const { params } = useTypedRoute<'TasksByCategory'>()
  useEffect(() => {
    let tasksByCategory = tasks.filter(
      task => task.category.id === params.categoryId
    )
    if (tasksByCategory.length > 0) {
      setLabel(tasksByCategory[0].category.name)
      setTasksByCategory(tasksByCategory)
    } else {
      setLabel('')
      setTasksByCategory([])
    }
  }, [params, tasks])
  return (
    <Layout navigation={navigation}>
      {tasksByCategory.length > 0 ? (
        <TasksList label={label + ` tasks`} tasks={tasksByCategory} />
      ) : (
        <Text className='text-blue text-2xl'>Tasks not founded!</Text>
      )}
    </Layout>
  )
}

export default TasksByCategory
