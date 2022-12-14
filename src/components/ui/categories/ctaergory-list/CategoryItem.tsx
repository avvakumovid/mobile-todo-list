import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { ICategory } from '@/shared/types'

const CategoryItem: FC<ICategory> = ({ color, name }) => {
  return (
    <View className='flex-row px-4 py-2 rounded-sm bg-white'>
      <View
        className='w-8 h-8 rounded-full'
        style={{
          backgroundColor: color,
        }}
      />
      <Text className='ml-2 text-lg text-black'>{name}</Text>
    </View>
  )
}

export default CategoryItem
