import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import { ICategory } from '@/shared/types'

import RippleButton from '../ui/button/RippleButton'
import CategoriesSelect from '../ui/categories/categories-select/CategoriesSelect'
import Label from '../ui/label/Label'

import { useTypedRoute } from './../../hooks/useTypedRoute'
import { ITask } from './../../shared/types'
import Layout from './../ui/layout/Layout'
import { AppDispatch, RootState } from '@/store'
import { updateTask } from '@/store/slices/task.slice'

const Task: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const [text, setText] = useState('')
  const [task, setTask] = useState<ITask>({} as ITask)
  const [category, setCategory] = useState<ICategory>({} as ICategory)
  const { params } = useTypedRoute<'Task'>()
  const { tasks } = useSelector((state: RootState) => state.task)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (params.id) {
      let task = tasks.find(task => task.id == params.id)

      if (task) {
        setTask(task)
        setText(task.task)
        setCategory(task.category)
      }
    }
  }, [params, tasks])

  return (
    <Layout isHeader={false} navigation={navigation}>
      <Label text='category' />
      <View className='mb-4'>
        <CategoriesSelect value={category} onChange={setCategory} />
      </View>
      <Label text='task' />
      <ScrollView
        style={{
          maxHeight: '85%',
        }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          className='text-black text-4xl'
          multiline
          value={text}
          onChangeText={setText}
          cursorColor='#cbd7fb'
          selectionColor='#cbd7fb'
        />
      </ScrollView>
      <View className='flex-row items-center self-end'>
        <RippleButton
          icon='save'
          className='bg-gray '
          color='#fff'
          width={40}
          height={40}
          onTap={() => {
            dispatch(updateTask({ ...task, task: text, category }))
            navigation.goBack()
          }}
        />
        <RippleButton
          icon='x'
          className='bg-gray ml-2'
          color='#fff'
          width={40}
          height={40}
          onTap={() => {
            navigation.goBack()
          }}
        />
      </View>
    </Layout>
  )
}

export default Task
