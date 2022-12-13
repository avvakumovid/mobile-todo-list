import React, { FC, PropsWithChildren } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

export interface IRipple {
  style?: StyleProp<ViewStyle>
  onTap?: () => void
  className?: string
  color?: string
}

const Ripple: FC<PropsWithChildren<IRipple>> = ({
  onTap,
  style,
  className,
  children,
  color = 'rgba(0,0,0,0.2)',
}) => {
  const centerX = useSharedValue(0)
  const centerY = useSharedValue(0)
  const scale = useSharedValue(0)

  const aRef = useAnimatedRef<View>()
  const width = useSharedValue(0)
  const height = useSharedValue(0)

  const rippleOpacity = useSharedValue(1)

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: tapEvent => {
        const layout = measure(aRef)

        width.value = layout.width
        height.value = layout.height

        centerX.value = tapEvent.x
        centerY.value = tapEvent.y

        rippleOpacity.value = 0.4
        scale.value = 0
        scale.value = withTiming(1, { duration: 1000 })
        rippleOpacity.value = withTiming(0, { duration: 1000 })
      },
      onActive: () => {
        if (onTap) runOnJS(onTap)()
      },
      onFinish: () => {},
    })

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2)
    const translateX = centerX.value - circleRadius
    const translateY = centerY.value - circleRadius
    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: color,
      zIndex: 100,
      position: 'absolute',
      transform: [
        {
          translateX,
        },
        {
          translateY,
        },
        {
          scale: scale.value,
        },
      ],
    }
  })
  return (
    <View className={className} ref={aRef} collapsable={false}>
      <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <Animated.View style={[style, { overflow: 'hidden' }]}>
          <View>{children}</View>
          <Animated.View style={rStyle} />
        </Animated.View>
      </TapGestureHandler>
    </View>
  )
}

export default Ripple
