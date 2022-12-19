import React from 'react'
import { Button } from 'react-native'

//onPress = onClick

function OrderDetail(props) {

    return (<>
        <Button title='Hello' onPress={props.finish}></Button>
    </>)
}

export default OrderDetail