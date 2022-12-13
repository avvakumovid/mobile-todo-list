import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC } from 'react'
import { View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import RippleButton from '../ui/button/RippleButton'
import Layout from '../ui/layout/Layout'
import TaskForm from '../ui/task/task-modal/TaskForm'

const NewTask: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { goBack } = useTypedNavigation()
  return (
    <Layout isHeader={false} navigation={navigation}>
      <View className='justify-start h-full'>
        <RippleButton
          icon='x'
          borderColor='#cbd7fb'
          className='self-end mb-32'
          width={50}
          height={50}
          onTap={() => {
            goBack()
          }}
        />
        <TaskForm />
      </View>
    </Layout>
  )
}

export default NewTask
