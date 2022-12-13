import React, { FC } from 'react'
import { Text, View } from 'react-native'

interface ILable {
  text: string
}

const Label: FC<ILable> = ({ text }) => {
  return (
    <Text className='uppercase text-xs tracking-widest text-gray-200 mb-2'>
      {text}
    </Text>
  )
}

export default Label
