import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { colors } from '@/shared/colors'
import { ICategory } from '@/shared/types'

import Select from './../../select/Select'
import { RootState } from '@/store'

interface ICategoriesSelect {
  value: ICategory
  onChange: (...event: any[]) => void
}

const CategoriesSelect: FC<ICategoriesSelect> = ({ value, onChange }) => {
  const { categories } = useSelector((state: RootState) => state.category)
  return (
    <Select<ICategory>
      data={categories}
      onChange={onChange}
      render={item => (
        <View
          key={item.name}
          className=' h-10 w-32 bg-white-200 flex-row rounded-full justify-start px-2 items-center border-2 border-gray'
        >
          <View
            className='w-6 h-6 rounded-full justify-center items-center'
            style={{
              backgroundColor: item.color,
            }}
          >
            <View
              className='w-5 h-5 rounded-full border-2 border-white'
              style={{
                backgroundColor: item.color,
              }}
            ></View>
          </View>
          <Text numberOfLines={1} className='text-base ml-2 text-black'>
            {item.name}
          </Text>
        </View>
      )}
      value={value}
    />
  )
}

export default CategoriesSelect
