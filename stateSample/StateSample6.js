import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateSample6 = () => {

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0)

    return (
        <View>
            <Text>{counter}</Text>
            <Button title='Increase' onPress={() => setcounter(counter + 1)}></Button>
            <Button title='Increase-2' onPress={() => setcounter2(counter2 + 1)}></Button>

            <Child sayac={counter2} />
        </View>
    )
}

export default StateSample6


const Child = ({sayac}) => {

    console.log('Child comp rendered!');
    
    return <View>
        <Text>{sayac}</Text>
        <Text>Hello Child!</Text>
    </View>

}