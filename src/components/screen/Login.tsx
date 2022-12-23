import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import ImagePickerControl from '../ui/form-elements/image-picker/ImagePicker'
import Layout from '../ui/layout/Layout'

import RippleButton from './../ui/button/RippleButton'
import Field from './../ui/form-elements/field/Field'
import Label from './../ui/label/Label'
import { AppDispatch } from '@/store'
import { IUser, register } from '@/store/slices/auth.slice'

const Login: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { control, handleSubmit, setValue } = useForm<IUser>()
  const dispatch = useDispatch<AppDispatch>()
  const submit = (data: IUser) => {
    dispatch(register(data))
  }
  return (
    <Layout navigation={navigation} isHeader={false}>
      <View className='h-[90%]'>
        <Label text='Your name' />
        <Field<IUser>
          control={control}
          name='name'
          rules={{
            required: "Field can't be Empty",
          }}
          placeholder='Enter the name...'
        />
        <Label text='Avatar' />
        <ImagePickerControl
          rules={{
            required: "Avatar can't be Empty",
          }}
          control={control}
          name='pictures'
        />
      </View>
      <RippleButton
        icon='save'
        text='LOG IN'
        borderColor='#cbd7fb'
        width={110}
        className='self-end'
        onTap={handleSubmit(submit)}
      />
    </Layout>
  )
}

export default Login
