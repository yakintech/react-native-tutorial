import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const EffectSample = () => {

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);


    // SADECE BİR KERE ÇALIŞIR!!!
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log('DATA ', data);
            })

    }, [])

    useEffect(() => {

        console.log('EFFECT - 2');

    }, [counter2])
    //[] dependency




    return (
       <>
        <View>
            <Text>{counter}</Text>
            <Button title='Increase' onPress={() => setcounter(counter + 1)}></Button>
        </View>
        <View>
            <Text>{counter2}</Text>
            <Button title='Increase2' onPress={() => setcounter2(counter2 + 1)}></Button>
        </View>
        </>
    )
}

export default EffectSample