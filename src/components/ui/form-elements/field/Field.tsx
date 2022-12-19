import cn from 'clsx'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
  control,
  name,
  rules,
  className,
  ...rest
}: IField<T>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            className={cn(
              'bg-white-200 border-gray  w-full border-2 rounded-lg pb-4 pt-2.5 px-4 my-1.5',
              error ? 'border-red' : 'border-gray'
            )}
          >
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={(value || '').toString()}
              className='text-black text-2xl '
              {...rest}
            />
          </View>
          <Text className='text-red'>{error?.message}</Text>
        </>
      )}
    />
  )
}

export default Field
