import { View, Text } from 'react-native'
import React from 'react'

const ProductDetail = (props) => {

  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  )
}

export default ProductDetail