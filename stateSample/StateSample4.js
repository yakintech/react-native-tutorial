import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const StateSample4 = () => {

    const [onlineStatus, setonlineStatus] = useState(true)

  return (
    <View>
      {
          onlineStatus == true ? <Text>User Online</Text> : <Text>User Offline</Text>
      }
      <Button title='Change Status' onPress={() => setonlineStatus(!onlineStatus)}></Button>
    </View>
  )
}

export default StateSample4