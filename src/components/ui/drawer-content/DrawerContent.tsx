import { Feather } from '@expo/vector-icons'
import {
  DrawerContentComponentProps,
  useDrawerStatus,
} from '@react-navigation/drawer'
import React, { FC, useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import { routes } from '../../../navigation/routes'
import Avatar from '../avatar/Avatar'
import BigButton from '../button/BigButton'

import DrawerButton from './DrawerButton'

const DrawerContent: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const { navigate } = useTypedNavigation()

  return (
    <SafeAreaView className='z-10 bg-black h-full border border-black'>
      <View className='pl-8 py-12'>
        <BigButton
          onPress={() => {
            navigation.toggleDrawer()
          }}
          icon='chevron-left'
          color='#fff'
          className='self-end bg-black'
        />
        <Avatar />
        <Text className='text-white text-3xl w-2/3 mb-6 font-medium'>
          Olivia Mitchell
        </Text>
        {routes.map(route => (
          <DrawerButton key={route.name} route={route} routeNames={'s'} />
        ))}
      </View>
    </SafeAreaView>
  )
}

export default DrawerContent
