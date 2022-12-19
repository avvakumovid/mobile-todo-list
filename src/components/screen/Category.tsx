import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { ICategory } from '@/shared/types'

import RippleButton from '../ui/button/RippleButton'
import CategoryList from '../ui/categories/category-list/CategoryList'
import EditCategoryModal from '../ui/categories/category-list/edit-category/EditCategoryModal'
import Layout from '../ui/layout/Layout'

import { RootState } from '@/store'

const Category: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const { categories } = useSelector((state: RootState) => state.category)
  const [isShow, setIsShow] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<ICategory>()
  const setEdit = (category: ICategory) => {
    setIsShow(true)
    setCurrentCategory(category)
  }
  return (
    <Layout navigation={navigation}>
      <View
        style={{
          maxHeight: '90%',
        }}
        className='mb-2'
      >
        <CategoryList setEdit={setEdit} categories={categories} />
      </View>
      <RippleButton
        icon='plus'
        className='self-end bg-gray'
        color='#fff'
        width={40}
        height={40}
        onTap={() => {
          setCurrentCategory(undefined)
          setIsShow(true)
        }}
      />
      {isShow && (
        <EditCategoryModal setIsShow={setIsShow} category={currentCategory} />
      )}
    </Layout>
  )
}

export default Category
