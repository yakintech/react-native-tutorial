import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { products } from './products'

const StateSample7 = () => {

    const [productList, setproductList] = useState(products);
    const [counter, setcounter] = useState(0);


    


    const renderItem = ({item}) => {
        return <>
            <Text>{item.name}</Text>
        </>
    }

  return (
    <View>
        <FlatList
            data={productList}
            renderItem={renderItem}
        />
    </View>
  )
}

export default StateSample7