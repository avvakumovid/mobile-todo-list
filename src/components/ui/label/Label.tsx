import cn from 'clsx'
import React, { FC } from 'react'
import { StyleProp, Text, TextProps, View } from 'react-native'

interface ILable {
  text: string
  className?: string
  style?: StyleProp<TextProps>
}

const Label: FC<ILable> = ({ text, className, style }) => {
  return (
    <Text
      className={cn(
        'uppercase text-xs tracking-widest text-gray-200 mb-2',
        className
      )}
      style={style}
    >
      {text}
    </Text>
  )
}

export default Label
