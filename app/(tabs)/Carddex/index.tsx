import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardDex = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Carddex</Text>
    </View>
  )
}

export default CardDex

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