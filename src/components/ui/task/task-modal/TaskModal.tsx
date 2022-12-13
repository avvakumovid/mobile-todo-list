import { useState } from 'react'
import { Modal, View } from 'react-native'

import BigButton from '../../button/BigButton'
import Layout from '../../layout/Layout'

import TaskForm from './TaskForm'

const TaskModal = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <View>
      <Modal statusBarTranslucent animationType='slide' visible={isShow}>
        <View className='w-full h-full  py-12 px-8'>
          <BigButton
            className='self-end bg-white border-gray mb-40'
            icon='x'
            color='#000'
            onPress={() => {
              setIsShow(prev => !prev)
            }}
          />
          <TaskForm />
        </View>
      </Modal>
      <BigButton
        className='absolute right-8 bottom-8 bg-blue-200 z-30'
        icon='plus'
        color='#fff'
        onPress={() => {
          setIsShow(prev => !prev)
        }}
      />
    </View>
  )
}

export default TaskModal
