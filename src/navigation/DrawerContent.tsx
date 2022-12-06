import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { routes } from './routes'
import { useTypedNavigation } from '@/hooks/useTypedNavigate'

const DrawerContent = () => {
  const { navigate } = useTypedNavigation()
  return (
    <SafeAreaView className="z-10">
      {routes.map(route => (
        <Pressable key={route.name} onPress={() => navigate(route.name)}>
          <Text className="py-2">{route.name}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default DrawerContent
