import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { FC } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import { DrawerRoute, routes } from '../../../navigation/routes'
import Avatar from '../avatar/Avatar'
import BigButton from '../button/BigButton'

import DrawerButton from './DrawerButton'
import { RootState } from '@/store'

const DrawerContent: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const {
    user: { name, pictures },
  } = useSelector((state: RootState) => state.auth)
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
        <Avatar img={pictures} />
        <Text className='text-white text-3xl w-2/3 mb-6 font-medium'>
          {name}
        </Text>
        {DrawerRoute.map(route => (
          <DrawerButton key={route.name} route={route} routeNames={'s'} />
        ))}
      </View>
    </SafeAreaView>
  )
}

export default DrawerContent
