import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { categories } from './categories'

const StateSample5 = () => {

    const [categoryList, setcategoryList] = useState(categories);

    const orderByName = () => {
        let orderCategoryList = categoryList.sort((a,b) => a.name.localeCompare(b.name));
        console.log('orderCategoryList ', orderCategoryList);

        //setcategoryList(orderCategoryList)
        setcategoryList([...orderCategoryList])
    }

    const clearAll = () => {
        setcategoryList([]);
    }

    return (<>
        <Button title='Order By Name' onPress={() => orderByName()}></Button>
        <Button title='Clear All' onPress={() => clearAll()}></Button>
        <View>
            {
                categoryList.map((item) => <Text>{item.name}</Text>)
            }
        </View>
    </>

    )
}

export default StateSample5