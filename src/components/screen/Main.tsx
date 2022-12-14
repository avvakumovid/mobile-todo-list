import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import CategoriesList from '../ui/categories/tasks-by-category/TaskListByCategory'
import Layout from '../ui/layout/Layout'
import TasksList from '../ui/task/TasksList'

import { RootState } from '@/store'

const Main: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { tasks, categories } = useSelector((state: RootState) => state.task)
  return (
    <Layout isPlusButton navigation={navigation}>
      <Text className='text-3xl text-black font-medium mb-4'>
        What's up, Olivia!
      </Text>
      <CategoriesList categories={categories} />
      <TasksList tasks={tasks} />
    </Layout>
  )
}

export default Main
