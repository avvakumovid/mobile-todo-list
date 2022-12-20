import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import RippleButton from '@/components/ui/button/RippleButton'
import Field from '@/components/ui/form-elements/field/Field'

import { colors } from '@/shared/colors'

import Select from '../../../select/Select'

import { IEditCategory, IEditCategoryForm } from './edit-category.interface'
import { AppDispatch } from '@/store'
import { addCategory, editCategory } from '@/store/slices/category.slice'

const EditCategory: FC<IEditCategory> = ({ category, setIsShow }) => {
  const [isNew, setIsNew] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const defaultValues = {
    color:
      colors[colors.findIndex(color => color === category?.color)] ?? colors[0],
    name: category?.name ?? '',
    id: category?.id ?? Math.random().toString(),
  }

  const { control, handleSubmit, setValue } = useForm<IEditCategoryForm>({
    defaultValues,
  })

  const submit = (data: IEditCategoryForm) => {
    if (isNew) {
      dispatch(addCategory(data))
    } else {
      dispatch(editCategory(data))
      setIsShow(false)
    }
    setIsNew(false)
  }
  useEffect(() => {
    setValue(
      'color',
      colors[colors.findIndex(color => color === category?.color)] ?? colors[0]
    )
    if (!category) {
      setIsNew(true)
    }
  }, [category])
  return (
    <View className='w-full h-40 bg-white-200'>
      <View className='flex-row w-full overflow-auto justify-center items-center py-2 px-2'>
        <Controller
          control={control}
          name='color'
          render={({ field: { onChange, name, value } }) => (
            <Select<string>
              value={value}
              data={colors}
              onChange={onChange}
              render={item => (
                <View className='bg-black/5 rounded-lg h-10 w-10 justify-center mr-2 -my-2 mb-4 items-center'>
                  <View
                    className='w-8 h-8 rounded-full  justify-center items-center '
                    style={{ backgroundColor: item }}
                  >
                    <View
                      className='w-6 h-6 rounded-full border-2 border-white-200'
                      style={{ backgroundColor: item }}
                    />
                  </View>
                </View>
              )}
            />
          )}
        />
        <View className='w-full'>
          <Field<IEditCategoryForm>
            placeholder='Enter the name of category'
            rules={{
              required: "Field can't be Empty",
            }}
            control={control}
            name='name'
            placeholderTextColor={'#cbd7fb'}
            selectionColor={'#cbd7fb'}
            cursorColor={'#cbd7fb'}
          />
        </View>
      </View>
      <View className='flex-row self-end'>
        <RippleButton
          icon='save'
          className='bg-gray '
          color='#fff'
          width={40}
          height={40}
          onTap={handleSubmit(submit)}
        />
        <RippleButton
          icon='x'
          className='bg-gray ml-2'
          color='#fff'
          width={40}
          height={40}
          onTap={() => {
            setIsShow(false)
          }}
        />
      </View>
    </View>
  )
}

export default EditCategory
