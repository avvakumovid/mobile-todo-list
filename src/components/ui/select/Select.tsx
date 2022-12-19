import { Feather } from '@expo/vector-icons'
import React, {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Noop, UseFormSetValue } from 'react-hook-form'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { ICategory, ITask } from '@/shared/types'

interface IKey {
  key: string
}
interface ISelect<T> {
  data: T[]
  render: (item: T) => JSX.Element
  value: T
  onChange?: (...event: any[]) => void
}

const Select = <T,>({ data, render, value, onChange }: ISelect<T>) => {
  const [selected, setSelected] = useState<T>(value)
  render
  const [items, setItems] = useState(data)
  const [h, setH] = useState(0)
  let height = useSharedValue(0)
  const styleHeight = useAnimatedStyle(() => ({
    height: height.value,
  }))
  useEffect(() => {
    height.value = withTiming(0)
    setSelected(value)
    setItems(
      data.filter(item => JSON.stringify(item) !== JSON.stringify(value))
    )
  }, [value])

  return (
    <View>
      <Pressable
        className='z-20 bg-white-200'
        onPress={() => {
          height.value = withTiming(height.value === 0 ? h * 4 + 16 : 0)
        }}
      >
        {render(selected)}
      </Pressable>

      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styleHeight,
          {
            zIndex: 10,
          },
        ]}
      >
        <ScrollView className='h-80' showsVerticalScrollIndicator={false}>
          <View
            onLayout={e => {
              setH(e.nativeEvent.layout.height)
            }}
            collapsable={false}
            className='z-20 bg-white-200 -mt-1 mb-2'
          >
            {render(selected)}
          </View>
          {items.map((item, index) => (
            <Pressable
              key={index}
              className='mb-1'
              onPress={() => {
                if (onChange) {
                  onChange(item)
                }

                height.value = withTiming(0)
              }}
            >
              {render(item)}
            </Pressable>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  )
}

export default Select
