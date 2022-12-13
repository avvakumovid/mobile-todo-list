import { DrawerNavigationProp } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Button from '../button/Button'

interface IHeader {
  navigation: DrawerNavigationProp<any, string | number | symbol, undefined>
}

const Header: FC<IHeader> = ({ navigation }) => {
  return (
    <Pressable
      className='flex-row justify-between items-center pb-2 '
      onPress={() => {
        navigation.openDrawer()
      }}
    >
      <View className='w-4/5 flex-row z-50'>
        <Button
          icon='menu'
          onPress={() => {
            navigation.openDrawer()
          }}
        />
      </View>
      <View className='flex-row '>
        <Button
          icon='search'
          onPress={() => {
            navigation.toggleDrawer()
          }}
        />
        <Button
          icon='bell'
          onPress={() => {
            navigation.toggleDrawer()
          }}
        />
      </View>
    </Pressable>
  )
}

export default Header
