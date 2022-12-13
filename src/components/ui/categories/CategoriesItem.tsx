import React, { FC } from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

import { ICategoriesItem } from '@/shared/types'

const CategoriesItem: FC<ICategoriesItem> = ({
  count,
  name,
  progress,
  color,
}) => {
  return (
    <View className='w-32 h-20 bg-white rounded-xl p-4 px-2  items-start justify-between mr-2'>
      <Text className='text-xs text-gray-200 -mb-1'>{count} tasks</Text>
      <Text className='text-base text-black capitalize'>{name}</Text>
      <Progress.Bar
        progress={progress}
        width={112}
        height={3}
        borderColor={'transparent'}
        unfilledColor={'rgba(203, 215, 251, .15)'}
        borderRadius={20}
        color={color}
      />
    </View>
  )
}

export default CategoriesItem