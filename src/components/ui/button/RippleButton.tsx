import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { StyleProp, Text, View } from 'react-native'

import { TypeFeatherIconNames } from '@/shared/types'

import Ripple from '../ripple/Ripple'

import { IRipple } from './../ripple/Ripple'

interface IRippleButton extends IRipple {
  text?: string
  icon?: TypeFeatherIconNames
  borderColor?: string
  height?: number
  width?: number
}

const RippleButton: FC<PropsWithChildren<IRippleButton>> = ({
  onTap,
  children,
  text,
  icon,
  color = '#7e89af',
  borderColor,
  className,
  style,
  width = 100,
  height = 40,
}) => {
  return (
    <Ripple
      className={cn(
        'rounded-full  justify-center items-center',
        {
          'border-2': borderColor,
        },
        className
      )}
      style={[
        style,
        {
          borderColor,
          width,
          height,
        },
      ]}
      onTap={onTap}
      color={color}
    >
      {text || icon ? (
        <View className='flex-row justify-center items-center py'>
          {icon && <Feather name={icon} color={color} size={20} />}
          {text && (
            <Text
              style={{
                color,
              }}
              className='text-base ml-2'
            >
              {text}
            </Text>
          )}
        </View>
      ) : (
        children
      )}
    </Ripple>
  )
}

export default RippleButton
