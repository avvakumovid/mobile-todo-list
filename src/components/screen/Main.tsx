import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC, useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import CategoriesList from '../ui/categories/tasks-by-category/TaskListByCategory'
import Layout from '../ui/layout/Layout'
import TasksList from '../ui/task/TasksList'

import { AppDispatch, RootState } from '@/store'
import { groupTaskByCategory } from '@/store/slices/task.slice'

const Main: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { tasks } = useSelector((state: RootState) => state.task)
  const {
    user: { name },
  } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(groupTaskByCategory())
  }, [])
  return (
    <Layout isPlusButton navigation={navigation}>
      <Text className='text-3xl text-black font-medium mb-4'>
        What's up, {name}!
      </Text>
      <CategoriesList />
      <TasksList label='all tasks' tasks={tasks} />
    </Layout>
  )
}

export default Main
