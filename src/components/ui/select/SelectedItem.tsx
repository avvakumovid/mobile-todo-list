import React, { ReactElement } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface ISelectedItem extends PressableProps {
  component: ReactElement
}

const SelectedItem = () => {
  return (
    <Pressable className='w-[97%] h-10 border-b border-gray bg-white-200 flex-row justify-between items-center px-4'>
      <Text>item-1</Text>
    </Pressable>
  )
}

export default SelectedItem
