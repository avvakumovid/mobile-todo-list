import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import Login from '@/components/screen/Login'

import DrawerContent from '../components/ui/drawer-content/DrawerContent'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import { RootState } from '@/store'

const Drawer = createDrawerNavigator<TypeRootStackParamList>()

const Navigation = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth)
  return (
    <NavigationContainer>
      {isAuth ? (
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            overlayColor: 'transparent',
            drawerType: 'slide',
            sceneContainerStyle: {
              backgroundColor: '#1b2b59',
            },
            unmountOnBlur: true,
          }}
          initialRouteName='Main'
          drawerContent={props => <DrawerContent {...props} />}
        >
          {routes.map(route => (
            //@ts-ignore
            <Drawer.Screen key={route.name} {...route} />
          ))}
        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator
          screenOptions={{
            swipeEnabled: false,
            headerShown: false,
          }}
          initialRouteName='Auth'
          drawerContent={props => <DrawerContent {...props} />}
        >
          <Drawer.Screen
            name='Auth'
            //@ts-ignore
            component={Login}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  )
}

export default Navigation
