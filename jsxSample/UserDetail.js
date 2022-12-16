import { View, Text } from 'react-native'
import React from 'react'


const UserDetail = () => {

    let name = "Çağatay";
    let onlineStatus = false;
    let cities = ['İzmir', 'İstanbul', 'Baku', 'Atina'];

    let textSample = <Text>Hello Baku!</Text>;

    return (
        <View>
         
            {textSample}

            {
                cities.map(item => {
                    return <Text>{item}</Text>
                })
            }

            <Text>{name}</Text>
            {
                onlineStatus == true ? <Text>User online!</Text> : <Text>User Offline!</Text>
            }

        </View>
    )
}

export default UserDetail