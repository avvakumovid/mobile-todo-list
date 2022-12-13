import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { ICategory, ITask } from '@/shared/types'

import RippleButton from '../../button/RippleButton'
import { Calendar } from '../../calendar/Calendar'
import Field from '../../form-elements/field/Field'
import Label from '../../label/Label'
import Select from '../../select/Select'

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
      <Label text='Task' />
      <Field<ITask>
        name='task'
        control={control}
        rules={{
          required: `Field can't be Empty`,
        }}
        placeholder='Enter new task'
        placeholderTextColor={'#cbd7fb'}
        selectionColor={'#cbd7fb'}
        cursorColor={'#cbd7fb'}
      />

      <Label text='Time' className='mt-4' />
      <Calendar setFromData={setValue} />
      <Label text='Category' className='mt-4' />
      <Select<ICategory>
        data={data}
        render={item => (
          <View
            key={item.name}
            className=' h-10 w-32  flex-row rounded-full justify-start px-2 items-center border-2 border-gray'
          >
            <View
              className='w-6 h-6 rounded-full'
              style={{
                backgroundColor: item.color,
              }}
            ></View>
            <Text className='text-base ml-2 text-black'>{item.name}</Text>
          </View>
        )}
        setValue={setValue}
      />

      <View className='mt-44'>
        <RippleButton
          color='#096bff'
          borderColor='#096bff'
          className='self-end z-1'
          onTap={handleSubmit(onSubmit)}
          width={75}
        >
          <Text className='text-blue-200 uppercase'>Add</Text>
        </RippleButton>
      </View>
    </>
  )
}

export default TaskForm
