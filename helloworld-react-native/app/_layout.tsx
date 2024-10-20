

import { View, Text } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={{
      backgroundColor: 'gray',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        color: 'white',
        fontSize: 30
      }}>Home</Text>
    </View>
  )
}

export default _layout