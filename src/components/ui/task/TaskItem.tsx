import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  Layout,
  SharedValue,
  SlideOutRight,
  ZoomIn,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { useDispatch } from 'react-redux'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import Button from '../button/Button'
import RippleButton from '../button/RippleButton'

import { ITask } from './../../../shared/types'
import { AppDispatch } from '@/store'
import { removeTask } from '@/store/slices/task.slice'

interface ITaskItem extends ITask {
  index: number
}

const TaskItem: FC<ITaskItem> = ({
  task,
  category,
  isDone,
  id,
  index,
  date,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [done, setDone] = useState(isDone)
  const [timer, setTimer] = useState<NodeJS.Timeout>()
  const { navigate } = useTypedNavigation()
  const a = useDerivedValue(() => {
    return done ? withSpring(1) : withTiming(0)
  })
  const color = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      a.value,
      [0, 1],
      [category.color, '#cbd7fb']
    )
    return {
      backgroundColor,
    }
  })
  const text = useAnimatedStyle(() => {
    const color = interpolateColor(a.value, [0, 1], ['#1b2b59', '#cbd7fb'])
    return {
      color,
    }
  })
  const scale = useAnimatedStyle(() => {
    const scale = interpolate(a.value, [0, 0.5, 1], [1, 0, 1])
    const backgroundColor = interpolateColor(
      a.value,
      [0, 1],
      ['white', 'transparent']
    )
    return {
      transform: [
        {
          scale,
        },
      ],
      backgroundColor,
    }
  })
  const x = useSharedValue(0)
  const time = async (x: SharedValue<number>) => {
    let timer = setTimeout(() => {
      dispatch(removeTask(id))
    }, 1000)
    setTimer(timer)
  }
  const scaleX = useAnimatedStyle(() => {
    return {
      scaleX: withTiming(done ? 1 : 0),
    }
  })

  const pathAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: x.value,
      },
    ],
  }))
  const tap = Gesture.Pan()
    .onStart(e => {})
    .onUpdate(({ translationX }) => {
      x.value = translationX <= 0 ? translationX : 0
    })
    .onEnd(() => {
      if (x.value <= -70) {
        x.value = withTiming(-1000)
        runOnJS(time)(x)
      } else {
        x.value = withTiming(0)
      }
    })
    .activeOffsetX([-10, 10])
    .failOffsetX(0)

  return (
    <Animated.View
      entering={ZoomIn.delay(index * 100 + 100)}
      exiting={SlideOutRight}
      layout={Layout.mass(3000)}
      className='overflow-hidden pb-2 rounded-2xl'
    >
      <GestureDetector gesture={tap}>
        <Animated.View
          style={pathAnimatedStyle}
          className='flex-row w-full z-10 py-3 px-4 items-center bg-white rounded-2xl'
        >
          <Button
            isShowBg={false}
            color={category?.color || '#cbd7fb'}
            onPress={() => {
              setDone(!done)
            }}
          >
            <Animated.View
              className='w-6 h-6 rounded-full items-center justify-center z-20'
              style={[color]}
            >
              <Animated.View
                className='w-5 h-5 rounded-full items-center justify-center'
                style={[scale]}
              >
                <Feather
                  name='check'
                  size={18}
                  color={done ? 'white' : 'transparent'}
                  style={{
                    marginTop: 1,
                  }}
                />
              </Animated.View>
            </Animated.View>
          </Button>
          <Pressable
            onPress={() => {
              navigate('Task', { id: id })
            }}
            className='ml-5 w-[85%] '
          >
            <Animated.Text
              style={text}
              numberOfLines={1}
              className={cn('text-lg w-max  ')}
            >
              {task}
            </Animated.Text>
            <Animated.View
              className='w-max h-[1px] bg-black absolute top-1/2 '
              style={scaleX}
            />
          </Pressable>
        </Animated.View>
      </GestureDetector>
      <View className='flex-row w-full items-center rounded-2xl  justify-between py-3 px-4 z-1 bg-white-200 absolute'>
        <View className='flex-row items-center'>
          <Feather name='trash-2' color={'#cbd7fb'} size={20} />
          <Text className='text-base text-gray ml-4'>The task was deleted</Text>
        </View>

        <RippleButton
          onTap={() => {
            clearTimeout(timer)
            x.value = withTiming(0)
          }}
          borderColor='#cbd7fb'
          width={70}
          height={30}
        >
          <Text className='text-sm text-black font-medium px-2.5'>UNDO</Text>
        </RippleButton>
      </View>
    </Animated.View>
  )
}

export default TaskItem
