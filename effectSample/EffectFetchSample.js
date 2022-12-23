import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const EffectFetchSample = () => {

    const [users, setusers] = useState([]);

    console.log('RENDER');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setusers(data);
            })

    }, [])

    const renderItem = ({item}) => {
        return <Text>{item.name}</Text>
    }
    return (
        <View>
            <FlatList
                data={users}
                renderItem={renderItem}
            />
        </View>
    )
}

export default EffectFetchSample