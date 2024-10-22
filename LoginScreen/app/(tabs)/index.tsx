
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const index = () => {
  const click = () =>{
    console.log('add');
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading1}>Sign in</Text>
        <Text style={{ fontSize: 17 }} >New user ? <Text style={styles.heading2} >Create an account</Text></Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 18 }}> 
          Email address
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View
          style={{
            height: 1,
            backgroundColor: '#000',
            width: '100%',
          }}
        />
      </View>
      <View style={styles.containers}>
      <TouchableOpacity style={styles.button} onPress={click}>
        <Text style={{
          color:'white',
          textAlign:'center',
          }}>Press Here</Text>
      </TouchableOpacity>
    </View>
   <View style={{marginTop:30}}>
    <View  
    style={{
      backgroundColor:'black',
      height:1,
      width: '100%',
    }}
    />
   </View>
   <View style={{marginTop:30}}>
   <TouchableOpacity style={styles.button2} onPress={click}>
        <Text style={styles.btn2text}><AntDesign name="google" size={24} color="black" />Continue With Google</Text>
      </TouchableOpacity>
   </View>
   <View style={{marginTop:10}} >
   <TouchableOpacity style={styles.button2} onPress={click}>
        <Text style={styles.btn2text}><FontAwesome5 name="facebook" size={24} color="black" />Continue with Facebook</Text>
      </TouchableOpacity>
      </View>
      <View  style={{marginTop:10}} >
   <TouchableOpacity style={styles.button2} onPress={click}>
        <Text style={styles.btn2text}><FontAwesome name="apple" size={24} color="black" />Continue with Apple</Text>
      </TouchableOpacity>
   </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  heading1: {
    fontSize: 40,
    fontWeight: '900'
  },
  heading2: {
    fontWeight: '800',
    color: '#2da8fd',
    fontSize: 17,
  },
  containers: {
      flexDirection: 'row',
    justifyContent:'flex-end'
  },
   button: {
    backgroundColor: '#000000',
    padding: 10,
    width:100,
    borderRadius:20,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius:40,
  },
  btn2text:{
    // margin:10,
    alignItems:'center'
  }
});
