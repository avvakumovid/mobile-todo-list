import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'

import { ICategory } from '@/shared/types'

import RippleButton from './../../button/RippleButton'
import CategoryItem from './CategoryItem'

interface ICategoryList {
  categories: ICategory[]
}

const CategoryList: FC<ICategoryList> = ({ categories }) => {
  const renderItem = ({ item, index }: { item: ICategory; index: number }) => (
    <CategoryItem {...item} index={index} />
  )
  return (
    <>
      <View
        style={{
          maxHeight: '90%',
        }}
        className='mb-2'
      >
        <FlatList
          data={[...categories]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <RippleButton
        icon='plus'
        className='self-end bg-gray'
        color='#fff'
        width={40}
        height={40}
        onTap={() => {}}
      />
    </>
  )
}

export default CategoryList
