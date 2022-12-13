import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import { ITask } from '@/shared/types'

import RippleButton from '../../button/RippleButton'
import { Calendar } from '../../calendar/Calendar'
import Field from '../../form-elements/field/Field'

import { useTypedNavigation } from './../../../../hooks/useTypedNavigate'
import { data } from './../../../../store/slices/task.slice'
import { AppDispatch } from '@/store'
import { addTask } from '@/store/slices/task.slice'

const TaskForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { goBack } = useTypedNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ITask>({
    defaultValues: {
      task: '',
      date: new Date().toString(),
      category: data[0],
      id: Math.random().toString(),
      isDone: false,
    },
  })

  const onSubmit = (data: ITask) => {
    dispatch(addTask(data))
    goBack()
  }

  return (
    <>
      <Field<ITask>
        name='task'
        control={control}
        placeholder='Enter new task'
        placeholderTextColor={'#cbd7fb'}
        selectionColor={'#cbd7fb'}
        cursorColor={'#cbd7fb'}
      />
      <Calendar setFromData={setValue} />
      <View className='mt-44'>
        <RippleButton
          color='#096bff'
          borderColor='#096bff'
          width={135}
          icon='chevron-up'
          text='New task'
          className='self-end z-1'
          onTap={handleSubmit(onSubmit)}
        />
      </View>
    </>
  )
}

export default TaskForm
