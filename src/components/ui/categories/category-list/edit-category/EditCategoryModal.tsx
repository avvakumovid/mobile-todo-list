import { FC } from 'react';
import { StyleSheet, View } from 'react-native'

import EditCategory from './EditCategory'
import { IEditCategory } from './edit-category.interface'

interface IEditCategoryModal extends IEditCategory {}

const EditCategoryModal: FC<IEditCategoryModal> = ({ category, setIsShow }) => {
  return (
    <View
      style={[StyleSheet.absoluteFill]}
      className='w-full h-full bg-white-200 pt-36'
    >
      <EditCategory setIsShow={setIsShow} category={category} />
    </View>
  )
}

export default EditCategoryModal
