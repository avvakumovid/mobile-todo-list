import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import Layout from '../ui/layout/Layout'

const Category: FC<DrawerScreenProps<any>> = ({ navigation }) => {
  return <Layout navigation={navigation}></Layout>
}

export default Category
