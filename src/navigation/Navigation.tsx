import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

import DrawerContent from '../components/ui/drawer-content/DrawerContent'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'

const Drawer = createDrawerNavigator<TypeRootStackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          overlayColor: 'transparent',
          drawerType: 'slide',
          sceneContainerStyle: {
            backgroundColor: '#1b2b59',
          },
          //unmountOnBlur: true,
        }}
        initialRouteName='Category'
        drawerContent={props => <DrawerContent {...props} />}
      >
        {routes.map(route => (
          //@ts-ignore
          <Drawer.Screen key={route.name} {...route} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
