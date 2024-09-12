import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Home</Text>
    </View>
  )
}

export default home

const Styles = StyleSheet.create({
  container:{
    marginVertical: 30 
  },
  text:{
    fontSize: 32,
    fontWeight: 'bold',
    padding: 30
  }
})