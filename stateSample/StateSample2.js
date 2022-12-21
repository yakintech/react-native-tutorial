import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateSample2 = () => {

    const [counter, setcounter] = useState(0);
    
    console.log('HELLO!');

    const increase = () => {

        setcounter(counter + 1);
        
    }

  return (
    <View>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>
      <Text style={{fontSize:30}}>{counter}</Text>

      <Button onPress={() => increase()} title='Increase'></Button>
    </View>
  )
}

export default StateSample2

