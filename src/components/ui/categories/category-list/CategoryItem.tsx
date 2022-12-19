import { Dispatch, FC, SetStateAction } from 'react'
import { Text, View } from 'react-native'
import Animated, {
  FadeInLeft,
  FadeInRight,
  RollOutRight,
} from 'react-native-reanimated'
import { useDispatch } from 'react-redux'

import { ICategory } from '@/shared/types'

import Button from './../../button/Button'
import { AppDispatch } from '@/store'
import { removeCategory } from '@/store/slices/category.slice'

interface iCategoryItem {
  category: ICategory
  index: number
  setEdit: (category: ICategory) => void
}

const CategoryItem: FC<iCategoryItem> = ({ category, index, setEdit }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <Animated.View
      entering={FadeInLeft.duration(index * 100 + 100)}
      exiting={RollOutRight}
      className='flex-row px-4 py-2 rounded-lg bg-white mb-2 border-2 border-gray justify-between items-center'
    >
      <View className='flex-row'>
        <View
          className='w-6 h-6 rounded-full justify-center items-center mt-1'
          style={{
            backgroundColor: category.color,
          }}
        >
          <View
            className='w-5 h-5 rounded-full border-2 border-white'
            style={{
              backgroundColor: category.color,
            }}
          ></View>
        </View>
        <Text className='ml-5 text-lg uppercase font-light tracking-widest text-black'>
          {category.name}
        </Text>
      </View>
      <View className='flex-row'>
        <Button
          bgSize={28}
          size={18}
          icon='edit-3'
          onPress={() => {
            setEdit(category)
          }}
        />
        <Button
          bgSize={28}
          size={18}
          icon='trash'
          onPress={() => {
            dispatch(removeCategory(category.id))
          }}
        />
      </View>
    </Animated.View>
  )
}

export default CategoryItem
