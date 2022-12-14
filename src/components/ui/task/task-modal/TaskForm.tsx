import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { ICategory, ITask } from '@/shared/types'

import { getShortDate } from '@/utils/getShortDate'

import RippleButton from '../../button/RippleButton'
import { Calendar } from '../../calendar/Calendar'
import Field from '../../form-elements/field/Field'
import Label from '../../label/Label'
import Select from '../../select/Select'

import { useTypedNavigation } from './../../../../hooks/useTypedNavigate'
import { data } from './../../../../store/slices/task.slice'
import { AppDispatch } from '@/store'
import { addTask } from '@/store/slices/task.slice'

const defaultValues = {
  task: '',
  date: new Date().toString(),
  category: data[0],
  id: Math.random().toString(),
  isDone: false,
}

const TaskForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const { goBack } = useTypedNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ITask>({
    defaultValues,
  })

  const onSubmit = (data: ITask) => {
    data.date = Math.random().toString()
    dispatch(addTask(data))
    reset(defaultValues)
    goBack()
  }

  return (
    <>
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
      <View className='flex-row justify-around mt-3'>
        <Controller
          control={control}
          name='date'
          render={({ field: { value } }) => (
            <RippleButton
              onTap={() => {
                setIsShowCalendar(!isShowCalendar)
              }}
              icon='calendar'
              width={115}
              borderColor='#cbd7fb'
              text={getShortDate(new Date(value))}
              className='mb-2'
            />
          )}
        />
        <Controller
          control={control}
          name={'category'}
          render={({ field: { value, onChange, onBlur } }) => (
            <Select<ICategory>
              data={data}
              onChange={onChange}
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
                  <Text numberOfLines={1} className='text-base ml-2 text-black'>
                    {item.name}
                  </Text>
                </View>
              )}
              value={value}
            />
          )}
        />
      </View>
      <Calendar
        isShow={isShowCalendar}
        setIsShow={setIsShowCalendar}
        setFromData={setValue}
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
