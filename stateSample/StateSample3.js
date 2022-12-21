import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateSample3 = () => {

    //string, object, array, number, bool, objectArray
    const [textColor, settextColor] = useState('tomato');

  return (
    <View>
      <Text style={{color:textColor, fontSize:40, fontWeight:600}}>Hello React Native</Text>
      <Button title='Change Color' onPress={() => settextColor('aqua')}></Button>
    </View>
  )
}

export default StateSample3