import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const Select = () => {
  const [isShow, setIsShow] = useState(false)
  const [selected, setSelected] = useState('item-1')

  const styleHeight = useAnimatedStyle(() => ({
    height: withTiming(isShow ? 160 : 0),
  }))
  return (
    <View>
      <Pressable
        onPress={() => {
          setIsShow(!isShow)
        }}
        className='w-full h-10 z-20 flex-row justify-between items-center border border-gray rounded-lg  px-4'
      >
        <Text>{selected}</Text>
        <Feather name='chevron-down' size={22} />
      </Pressable>
      <Animated.View
        className='mt-9'
        style={[
          StyleSheet.absoluteFill,
          styleHeight,
          {
            zIndex: 10,
          },
        ]}
      >
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          className='rounded-b-2xl'
        >
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray bg-white-200 flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-2')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  bg-white-200 flex-row justify-between items-center    px-4'
          >
            <Text>item-2</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray bg-white-200  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelected('item-1')
              setIsShow(false)
            }}
            className='w-[97%] h-10 border-b border-gray  flex-row justify-between items-center px-4'
          >
            <Text>item-1</Text>
          </Pressable>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  )
}

export default Select
