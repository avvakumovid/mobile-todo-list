'worklet'
'worklet'
'worklet'
'worklet'

import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { FC, useCallback, useRef } from 'react'
import { Dimensions, Pressable, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  color as c,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

const COLORS = [
  'black',
  'yellow',
  'red',
  'purple',
  'blue',
  'cyan',
  'green',

  'orange',

  'white',
]

const BACKGROUND_COLORS = 'rgba(0,0,0,0.9)'

const { width } = Dimensions.get('window')
const CIRCLE_SIZE = width * 0.8
const PICKER_WIDTH = width * 0.9

const CIRCLE_PICKER_SIZE = 45
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2

interface IColorPicker extends LinearGradientProps {
  maxWidth: number
  onColorChange: (color: string | number) => void
}

const ColorPicker: FC<IColorPicker> = ({
  colors,
  start,
  end,
  style,
  maxWidth,
  onColorChange,
}) => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const scale = useSharedValue(1)
  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, 0),
      maxWidth - CIRCLE_PICKER_SIZE
    )
  })
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, context) => {
      context.x = adjustedTranslateX.value
      translateY.value = withSpring(-CIRCLE_PICKER_SIZE)
      scale.value = withSpring(1.2)
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x
    },
    onEnd: () => {
      translateY.value = withSpring(0)
      scale.value = withSpring(1)
    },
  })

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: adjustedTranslateX.value },
      {
        translateY: translateY.value,
      },
      {
        scale: scale.value,
      },
    ],
  }))

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = colors.map(
      (_, index) => (index / colors.length) * maxWidth
    )

    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors
    )

    runOnJS(onColorChange)(backgroundColor)
    return { backgroundColor }
  })

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={{ justifyContent: 'center' }}>
        <LinearGradient colors={colors} start={start} end={end} style={style} />
        <Animated.View
          style={[
            {
              position: 'absolute',
              backgroundColor: '#fff',
              width: CIRCLE_PICKER_SIZE,
              height: CIRCLE_PICKER_SIZE,
              borderRadius: CIRCLE_PICKER_SIZE / 2,
              justifyContent: 'center',
              alignItems: 'center',
            },
            rStyle,
          ]}
        >
          <Animated.View
            style={[
              {
                width: INTERNAL_PICKER_SIZE,
                height: INTERNAL_PICKER_SIZE,
                borderRadius: CIRCLE_PICKER_SIZE / 2,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
              },
              rInternalPickerStyle,
            ]}
          />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  )
}

const Test = () => {
  const pickedColor = useSharedValue<string | number>(COLORS[0])
  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pickedColor.value,
    }
  })
  const onColorChange = useCallback((color: string | number) => {
    pickedColor.value = color
  }, [])

  return (
    <>
      <View
        style={{
          flex: 3,
          backgroundColor: BACKGROUND_COLORS,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={[
            {
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
            },
            rStyle,
          ]}
        >
          <Pressable className='w-10 h-10 bg-white-200' onPress={() => {}} />
        </Animated.View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: BACKGROUND_COLORS,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ColorPicker
          colors={COLORS}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: 40,
            width: PICKER_WIDTH,
            borderRadius: 20,
          }}
          maxWidth={PICKER_WIDTH}
          onColorChange={onColorChange}
        />
      </View>
    </>
  )
}
export default Test
