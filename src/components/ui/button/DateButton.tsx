import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface IDateButton extends PressableProps {
  text: string
}

const DateButton: FC<IDateButton> = ({ text, ...rest }) => {
  return (
    <Pressable
      className='flex-row px-2 py-2 border-2 border-gray-200 w-24 rounded-full  justify-around items-center mt-4'
      {...rest}
    >
      <Feather name='calendar' color='#cbd7fb' size={16} />
      <Text className='text-gray'>{text}</Text>
    </Pressable>
  )
}

export default DateButton
