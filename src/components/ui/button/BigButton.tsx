import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Animated, Pressable, PressableProps, StyleProp } from 'react-native'
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import { TypeFeatherIconNames } from '@/shared/types'

interface IBigButton extends PressableProps {
  icon?: TypeFeatherIconNames
  style?: StyleProp<PressableProps>
  className?: string
  color?: string
  isShowBg?: boolean
  bgColor?: string
  borderColor?: string
}

const BigButton: FC<PropsWithChildren<IBigButton>> = ({
  icon,
  isShowBg = false,
  color = '#1b2b59',
  children,
  className,
  ...rest
}) => {
  const scale = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(scale.value, [0, 1], [0, 1.2]),
      },
    ],
  }))
  return (
    <Pressable
      {...rest}
      className={cn(
        'w-12 h-12 rounded-full border-2 justify-center items-center border-white/[0.06]',
        className
      )}
    >
      {icon && (
        <Feather
          name={icon}
          size={24}
          color={color}
          style={{ marginRight: 2 }}
        />
      )}
      {isShowBg && (
        <Animated.View
          className={'bg-gray-200 opacity-50 absolute -z-10 rounded-full '}
          style={[animatedStyle]}
        ></Animated.View>
      )}
      {children}
    </Pressable>
  )
}

export default BigButton
