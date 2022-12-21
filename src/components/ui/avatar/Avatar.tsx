import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

interface IAvatar {
  img: string
}

const Avatar: FC<IAvatar> = ({ img }) => {
  return (
    <View className='w-[90px] h-[90px] rounded-full bg-transparent justify-center items-center mb-8'>
      <Progress.Circle
        size={96}
        progress={0.4}
        color={'#bc2ac8'}
        borderColor={'transparent'}
        unfilledColor={'rgba(255, 255, 255,0.06)'}
        strokeCap={'round'}
      />
      <Image
        className='w-20 h-20 rounded-full absolute'
        source={{
          uri: img,
        }}
      />
    </View>
  )
}

export default Avatar
