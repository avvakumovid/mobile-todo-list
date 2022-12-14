import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Animated, {
  FadeInLeft,
  RollInLeft,
  SlideInLeft,
} from 'react-native-reanimated'

import { ICategory } from '@/shared/types'

import Button from './../../button/Button'

interface iCategoryItem extends ICategory {
  index: number
}

const CategoryItem: FC<iCategoryItem> = ({ color, name, index }) => {
  return (
    <Animated.View
      entering={FadeInLeft.duration(index * 100 + 100)}
      className='flex-row px-4 py-2 rounded-lg bg-white mb-2 border-2 border-gray justify-between items-center'
    >
      <View className='flex-row'>
        <View
          className='w-6 h-6 rounded-full justify-center items-center mt-1'
          style={{
            backgroundColor: color,
          }}
        >
          <View
            className='w-5 h-5 rounded-full border-2 border-white'
            style={{
              backgroundColor: color,
            }}
          ></View>
        </View>
        <Text className='ml-5 text-lg uppercase font-light tracking-widest text-black'>
          {name}
        </Text>
      </View>
      <View className='flex-row'>
        <Button bgSize={28} size={18} icon='edit-3' />
        <Button bgSize={28} size={18} icon='trash' />
      </View>
    </Animated.View>
  )
}

export default CategoryItem
