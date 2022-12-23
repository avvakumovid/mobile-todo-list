import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetValue,
} from 'react-hook-form'
import { Image, Text, View } from 'react-native'

import ava from '../../../../../assets/avatar.png'

import RippleButton from './../../button/RippleButton'

interface ImagePickerControl<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'ValueAsDate' | 'setValueAs' | 'disabled'
  >
}

const ImagePickerControl = <T extends Record<string, any>>({
  control,
  name,
  rules,
}: ImagePickerControl<T>) => {
  const [image, setImage] = useState<string>('')

  const pickImage = async (onChange: (...event: any[]) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.canceled) {
      onChange(result.assets[0].uri)
      setImage(result.assets[0].uri)
    }
  }
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <View
          className='justify-between items-start flex-row py-2  w-full'
          style={{
            height: 200,
          }}
        >
          <RippleButton
            icon='upload'
            text='upload'
            onTap={() => {
              pickImage(onChange)
            }}
            borderColor='#cbd7fb'
            width={110}
          />
          {error && <Text className='text-red'>{error?.message}</Text>}
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
              className='rounded-lg'
            />
          )}
        </View>
      )}
    />
  )
}

export default ImagePickerControl
