import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

import DrawerContent from './DrawerContent'
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
				}}
				initialRouteName='Main'
				drawerContent={props => <DrawerContent />}
			>
				{routes.map(route => (
					<Drawer.Screen key={route.name} {...route} />
				))}
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
