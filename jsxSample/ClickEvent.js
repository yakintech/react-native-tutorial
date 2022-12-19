import { View, Text, Button } from 'react-native'
import React from 'react'

const ClickEvent = (props) => {

    const clickMe = () => {
        alert('PRESS!')
    }

    return (
        <View>
            <Button onPress={() => props.showText('Çağatay')} title='SHOW'></Button>

            {/* <Button title='Button' onPress={clickMe()}></Button> */}
            <Button title='Button' onPress={clickMe}></Button>
            <Button title='Button' onPress={() => clickMe()}></Button>

        </View>
    )
}

export default ClickEvent