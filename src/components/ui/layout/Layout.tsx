import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cn from 'clsx';

interface ILayout {
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  className,
  style,
}) => {
  return (
    <SafeAreaView className='flex-1 z-20'>
      <View className={cn('pt-5 flex-1', className)} style={style}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;
