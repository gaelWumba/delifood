import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/details/About'

export default function RestaurantDetails({route}) {
  return (
    <View>
      <About route={route}/>
    </View>
  )
}