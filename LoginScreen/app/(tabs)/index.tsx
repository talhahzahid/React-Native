

import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.heading1}>Sign in</Text>
      <Text srty>New user ? <Text style={styles.heading2} >Create an account</Text></Text>
    </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    margin:30,
  },
   heading1:{
    fontSize:40,
    fontWeight:'900'
   },
   heading2:{
   fontWeight:'800',
   color:'#2da8fd',
   fontSize:17,
   }
});
