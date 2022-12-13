import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { TypeFeatherIconNames } from '@/shared/types'

interface IButton extends PressableProps {
  icon?: TypeFeatherIconNames
  className?: string
  color?: string
  bgSize?: number
  isShowBg?: boolean
}

const Button: FC<PropsWithChildren<IButton>> = ({
  icon,
  className,
  color = '#7e89af',
  children,
  onPress,
  bgSize = 40,
  isShowBg = true,
  ...rest
}) => {
  const scale = useSharedValue(0)
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(scale.value, [0, 1], [0, 1.2]),
      },
    ],
  }))
  return (
    <Pressable
      className={cn('w-8 h-8 justify-center items-center', className)}
      {...rest}
      onPress={e => {
        if (onPress) {
          onPress(e)
        }
        if (isShowBg) {
          scale.value = withSpring(1)
          scale.value = withDelay(400, withTiming(0))
        }
      }}
    >
      {icon && <Feather name={icon} size={24} color={color} />}

      {isShowBg && (
        <Animated.View
          className={'bg-gray-200 opacity-50 absolute -z-10 rounded-full '}
          style={[
            style,
            {
              width: bgSize,
              height: bgSize,
            },
          ]}
        ></Animated.View>
      )}
      {children}
    </Pressable>
  )
}

export default Button
