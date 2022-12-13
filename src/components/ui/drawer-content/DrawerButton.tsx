import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import { IRoute } from '@/navigation/navigation.types'

interface IDrawerButton {
  route: IRoute
  routeNames: string
}

const DrawerButton: FC<IDrawerButton> = ({ route, routeNames }) => {
  const { navigate } = useTypedNavigation()
  return (
    <Pressable
      className='flex-row items-center'
      onPress={() => navigate(route.name)}
    >
      <Feather name={route.icon} size={22} color={'rgba(255,255,255, 0.3)'} />
      <Text
        className={cn(
          'ml-4 py-2 text-white text-base tracking-normal capitalize',
          { 'text-blue-200': routeNames == route.name }
        )}
      >
        {route.name}
      </Text>
    </Pressable>
  )
}

export default DrawerButton
