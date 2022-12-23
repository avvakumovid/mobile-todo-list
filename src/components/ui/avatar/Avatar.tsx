import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { useSelector } from 'react-redux'

import { ITask } from './../../../shared/types'
import { RootState } from '@/store'

interface IAvatar {
  img: string
}

const Avatar: FC<IAvatar> = ({ img }) => {
  const { tasks } = useSelector((state: RootState) => state.task)

  return (
    <View className='w-[90px] h-[90px] rounded-full bg-transparent justify-center items-center mb-8'>
      <Progress.Circle
        size={96}
        progress={getProgress(tasks)}
        color={'#bc2ac8'}
        borderColor={'transparent'}
        unfilledColor={'rgba(255, 255, 255,0.06)'}
        strokeCap={'round'}
      />
      <Image
        className='w-20 h-20 rounded-full absolute'
        source={{
          uri: img ?? 'https://i.pravatar.cc/300',
        }}
      />
    </View>
  )
}

const getProgress = (tasks: ITask[]) => {
  if (tasks.length === 0) return 0
  let len = tasks.length
  let isDone = tasks.reduce((p, n) => {
    if (n.isDone) {
      return ++p
    }
    return p
  }, 0)
  return isDone / len
}

export default Avatar
