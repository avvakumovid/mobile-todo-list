import React, { FC } from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import Animated, { FadeIn } from 'react-native-reanimated'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import { ITasksByCategoryItem } from '@/shared/types'

import RippleButton from './../../button/RippleButton'

const TasksByCategoryItem: FC<ITasksByCategoryItem> = ({
  count,
  progress,
  category: { color, name, id },
}) => {
  const { navigate } = useTypedNavigation()
  return (
    <Animated.View
      entering={FadeIn}
      className='w-32 h-20 justify-center items-center mr-2'
    >
      <RippleButton
        width={128}
        height={80}
        className='bg-white rounded-xl p-4 px-2  items-start justify-between'
        onTap={() => {
          navigate('TasksByCategory', { categoryId: id })
        }}
      >
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
      </RippleButton>
    </Animated.View>
  )
}

export default TasksByCategoryItem
