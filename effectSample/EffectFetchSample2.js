import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const EffectFetchSample2 = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/contacts')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })
    }

    const deleteItem = (id) => {

        fetch(`https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/contacts/${id}`, {method:'DELETE'})
        .then(res => {
            if(res.status == 200){
                getProducts();
            }
        })

    }

    const renderItem = ({item}) => {
        return <>
            <Text>{item.firstName}</Text>
            <Button title='Delete' onPress={() => deleteItem(item.id)}></Button>
        </>
    }

    return (
        <View>
            <FlatList
                data={products}
                renderItem={renderItem}
            />
        </View>
    )
}

export default EffectFetchSample2