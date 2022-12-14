import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import CategoryList from '../ui/categories/category-list/CategoryList'
import Layout from '../ui/layout/Layout'

import { RootState } from '@/store'

const Category: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { categories } = useSelector((state: RootState) => state.category)
  return (
    <Layout navigation={navigation}>
      <CategoryList categories={categories} />
    </Layout>
  )
}

export default Category
