import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const list = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Pokèdex</Text>
    </View>
  )
}

export default list

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