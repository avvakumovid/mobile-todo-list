import {
  DrawerNavigationProp,
  useDrawerProgress,
} from '@react-navigation/drawer'
import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { SafeAreaView, View } from 'react-native'
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useTypedNavigation } from '@/hooks/useTypedNavigate'

import RippleButton from '../button/RippleButton'
import Header from '../header/Header'

interface ILayout {
  className?: string
  navigation: DrawerNavigationProp<any, string | number | symbol, undefined>
  isPlusButton?: boolean
  isHeader?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  className,
  navigation,
  isHeader = true,
  isPlusButton = false,
}) => {
  const progress = useDrawerProgress() as SharedValue<number>
  const { top, bottom } = useSafeAreaInsets()
  const { navigate } = useTypedNavigation()
  const scale = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 0.8],
          Extrapolate.EXTEND
        ),
      },
    ],
  }))

  return (
    <View
      style={{
        flex: 1,
      }}
      className='z-10 rounded-xl '
    >
      <Animated.View
        className={cn('px-8 flex-1 bg-white-200  rounded-3xl ', className)}
        style={[
          scale,
          {
            paddingTop: top + 30,
            paddingBottom: bottom + 30,
            marginTop: -20,
            marginBottom: -20,
          },
        ]}
      >
        {isHeader && <Header navigation={navigation} />}
        {isPlusButton && (
          <View className='absolute bottom-12 right-6 z-40'>
            <RippleButton
              icon='plus'
              className=' bg-blue-200'
              color='#fff'
              width={50}
              height={50}
              onTap={() => {
                navigate('New Task')
              }}
            />
          </View>
        )}
        <View className='h-full'>{children}</View>
      </Animated.View>
    </View>
  )
}

export default Layout
